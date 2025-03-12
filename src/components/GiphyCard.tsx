import { IGiphyGifObject } from '@/types/giphyTypes';
import Image from 'next/image';

export interface IGiphyCardProps {
  gif: IGiphyGifObject;
}

export const GiphyCard = ({ gif }: IGiphyCardProps) => {
  return (
    <article className="rounded-md relative overflow-hidden aspect-[4/4]">
      <Image
        src={gif.images.fixed_height.url}
        alt={gif.title}
        width={Number(gif.images.fixed_height.width)}
        height={Number(gif.images.fixed_height.height)}
        className=" inset-0 w-full h-full object-cover"
        unoptimized
      />
    </article>
  );
};
