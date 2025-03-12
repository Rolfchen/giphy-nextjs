import { debounce } from '../debounce';

jest.useFakeTimers();

describe('debounce', () => {
  it('should call the function after the specified delay', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 300);

    debouncedFn();
    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(300);
    expect(mockFn).toBeCalledTimes(1);
  });

  it('should reset the timer if called again within the delay', () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 300);

    debouncedFn();
    jest.advanceTimersByTime(200);
    debouncedFn(); // Reset the timer
    jest.advanceTimersByTime(200);

    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(100);
    expect(mockFn).toBeCalledTimes(1);
  });
});
