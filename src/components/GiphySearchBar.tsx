'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export interface IGiphySearchBarProps {
  className?: string;
}

export const GiphySearchBar = ({ className }: IGiphySearchBarProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialSearchTerm = searchParams.get('keyword') || '';

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get('searchTerm') as string;
    if (!searchTerm || searchTerm.trim() === '') {
      router.push(pathname);
    } else {
      router.push(`?keyword=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={cn('flex', 'gap-4', className)}>
      <Input
        name="searchTerm"
        defaultValue={initialSearchTerm}
        placeholder="Search for gifs"
      />
      <Button type="submit" className="">
        Search
      </Button>
    </form>
  );
};
