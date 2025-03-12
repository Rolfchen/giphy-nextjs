'use server';

import { searchGiphy } from '@/actions/searchGiphy';
import { IGiphyGifObject } from '@/types/giphyTypes';
import { GiphyCard } from './GiphyCard';

export interface IGiphySearchResultProps {
  searchParams?: { [key: string]: string | string[] | undefined };
  offset?: number;
  limit?: number;
}

export const GiphySearchResult = async ({
  searchParams,
  offset = 0,
  limit = 25,
}: IGiphySearchResultProps) => {
  const keyword =
    typeof searchParams?.keyword === 'string' ? searchParams.keyword : '';

  if (!keyword) {
    return <></>;
  }

  try {
    const data = await searchGiphy({
      searchTerm: keyword,
      pageParam: { offset, limit },
    });

    const results: IGiphyGifObject[] = data.data;

    if (!results || results.length === 0) {
      return <p>No results found for "{keyword}".</p>;
    }

    return (
      <>
        {results.map((gif) => (
          <GiphyCard key={gif.id} gif={gif} />
        ))}
      </>
    );
  } catch (error) {
    return <p>Failed to load results.</p>;
  }
};
