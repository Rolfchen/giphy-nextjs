import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { GiphySearchBar } from '../GiphySearchBar';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe('GiphySearchBar', () => {
  const push = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });
    (usePathname as jest.Mock).mockReturnValue('/');
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the search input and button', () => {
    render(<GiphySearchBar />);

    expect(screen.getByPlaceholderText('Search for gifs')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('appends the search term to the URL when submitted', async () => {
    render(<GiphySearchBar />);
    const user = userEvent.setup();

    const input = screen.getByPlaceholderText('Search for gifs');
    const button = screen.getByRole('button', { name: /search/i });

    await user.type(input, 'funny cats');
    await user.click(button);

    expect(push).toHaveBeenCalledWith('?keyword=funny%20cats');
  });

  it('clears the search term from the URL if the input is empty', async () => {
    render(<GiphySearchBar />);
    const user = userEvent.setup();

    const input = screen.getByPlaceholderText('Search for gifs');
    const button = screen.getByRole('button', { name: /search/i });

    await user.clear(input);
    await user.click(button);

    expect(push).toHaveBeenCalledWith('/');
  });
});
