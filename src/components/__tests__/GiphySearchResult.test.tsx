import { render, screen } from '@testing-library/react';
import { GiphySearchResult } from '../GiphySearchResult';
import { searchGiphy } from '@/actions/searchGiphy';
import { IGiphyGifObject, IGiphyImages } from '@/types/giphyTypes';

jest.mock('@/actions/searchGiphy', () => ({
  searchGiphy: jest.fn(),
}));

const mockSearchGiphy = searchGiphy as jest.Mock;

// Helper function to create mock images object
const createMockImages = (): IGiphyImages => ({
  fixed_height: {
    url: '',
    width: '',
    height: '',
    size: '',
    mp4: '',
    mp4_size: '',
    webp: '',
    webp_size: '',
  },
  fixed_height_still: { url: '', width: '', height: '', size: '' },
  fixed_height_downsampled: { url: '', width: '', height: '', size: '' },
  fixed_width: {
    url: '',
    width: '',
    height: '',
    size: '',
    mp4: '',
    mp4_size: '',
    webp: '',
    webp_size: '',
  },
  fixed_width_still: { url: '', width: '', height: '', size: '' },
  fixed_width_downsampled: { url: '', width: '', height: '', size: '' },
  fixed_height_small: { url: '', width: '', height: '', size: '' },
  fixed_height_small_still: { url: '', width: '', height: '', size: '' },
  fixed_width_small: { url: '', width: '', height: '', size: '' },
  fixed_width_small_still: { url: '', width: '', height: '', size: '' },
  downsized: { url: '', width: '', height: '', size: '' },
  downsized_still: { url: '', width: '', height: '', size: '' },
  downsized_large: { url: '', width: '', height: '', size: '' },
  downsized_medium: { url: '', width: '', height: '', size: '' },
  original: {
    url: '',
    width: '',
    height: '',
    size: '',
    mp4: '',
    mp4_size: '',
    webp: '',
    webp_size: '',
  },
  original_still: { url: '', width: '', height: '', size: '' },
  looping: { mp4: '' },
  preview: { url: '', width: '', height: '', size: '' },
  preview_gif: { url: '', width: '', height: '', size: '' },
  preview_webp: { url: '', width: '', height: '', size: '' },
  hd: {
    url: '',
    width: '',
    height: '',
    size: '',
    mp4: '',
    mp4_size: '',
    webp: '',
    webp_size: '',
  },
  '480w_still': { url: '', width: '', height: '', size: '' },
});

describe('GiphySearchResult', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders nothing when no keyword is provided', async () => {
    const component = await GiphySearchResult({});
    render(component);

    expect(screen.queryByText(/no results found/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/failed to load results/i)
    ).not.toBeInTheDocument();
  });

  it('renders results when searchGiphy returns data', async () => {
    const mockResults: IGiphyGifObject[] = [
      {
        type: 'gif',
        id: '1',
        url: 'https://giphy.com/gifs/cat',
        slug: 'funny-cat',
        bitly_gif_url: '',
        bitly_url: '',
        embed_url: '',
        username: '',
        source: '',
        title: 'Funny Cat',
        rating: 'g',
        content_url: '',
        source_tld: '',
        source_post_url: '',
        is_sticker: 0,
        import_datetime: '',
        trending_datetime: '',
        images: createMockImages(),
        analytics_response_payload: '',
        analytics: {
          onload: { url: '' },
          onclick: { url: '' },
          onsent: { url: '' },
        },
      },
    ];

    mockSearchGiphy.mockResolvedValueOnce({ data: mockResults });

    const component = await GiphySearchResult({
      searchParams: { keyword: 'cat' },
    });
    render(component);

    expect(await screen.findByAltText('Funny Cat')).toBeInTheDocument();
  });

  it('renders "No results found" when searchGiphy returns empty data', async () => {
    mockSearchGiphy.mockResolvedValueOnce({ data: [] });

    const component = await GiphySearchResult({
      searchParams: { keyword: 'random' },
    });
    render(component);

    expect(
      await screen.findByText('No results found for "random".')
    ).toBeInTheDocument();
  });

  it('renders error message when searchGiphy throws an error', async () => {
    mockSearchGiphy.mockRejectedValueOnce(new Error('Failed to fetch'));

    const component = await GiphySearchResult({
      searchParams: { keyword: 'error' },
    });
    render(component);

    expect(
      await screen.findByText('Failed to load results.')
    ).toBeInTheDocument();
  });
});
