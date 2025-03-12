import { IGiphyTrendingResponse } from '@/types/giphyTypes';

export interface IUseSearchGiphy {
  searchTerm?: string;
}

export interface ISearchGiphyParams extends IUseSearchGiphy {
  pageParam?: {
    limit: number;
    offset: number;
  };
}

export const searchGiphy = async ({
  pageParam,
  searchTerm,
}: ISearchGiphyParams): Promise<IGiphyTrendingResponse> => {
  const { offset = 0, limit = 25 } = pageParam || {};
  const endpoint = `${process.env.GIPHY_URL}/gifs/search`;
  const params = new URLSearchParams({
    api_key: process.env.GIPHY_API_KEY || '',
    q: searchTerm || '',
    limit: limit.toString(), // Adjust the limit as needed
    offset: offset.toString(),
  });

  const response = await fetch(`${endpoint}?${params.toString()}`, {
    next: {
      revalidate: 3600, // Cache for 1 hour (adjust as needed)
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch from Giphy API: ${response.statusText}`);
  }

  return response.json();
};
