import { GiphySearchResult } from '@/components/GiphySearchResult';
import { GiphySearchBar } from '@/components/GiphySearchBar';
import { Suspense } from 'react';

interface ISearchPageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: ISearchPageProps) {
  const params = await searchParams;
  const page = typeof params?.page === 'string' ? Number(params.page) : 0;
  const limit = 12;
  const pages = Array.from({
    length: page,
  }).map((_, index) => limit * index + 1);
  return (
    <main className="px-4 py-2 w-full">
      <header className="flex p-4 w-xl m-auto">
        <h1>Giphy Searcher</h1>
      </header>
      <Suspense>
        <GiphySearchBar className="w-xl m-auto" />
      </Suspense>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4 p-8 min-w-lg">
        <Suspense key="first">
          <GiphySearchResult searchParams={params} limit={limit} offset={0} />
        </Suspense>
        {pages.map((offset) => (
          <Suspense key={offset}>
            <GiphySearchResult
              searchParams={params}
              limit={limit}
              offset={offset}
            />
          </Suspense>
        ))}
      </div>
    </main>
  );
}
