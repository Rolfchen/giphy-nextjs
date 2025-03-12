export interface IGiphyUser {
  avatar_url: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  is_verified: boolean;
}

export interface IGiphyImage {
  url: string;
  width: string;
  height: string;
  size?: string;
  mp4?: string;
  mp4_size?: string;
  webp?: string;
  webp_size?: string;
  frames?: string;
  hash?: string;
}

export interface IGiphySimpleMp4 {
  mp4: string;
}

/**
 * Collection of Giphy Image Objects
 */
export interface IGiphyImages {
  fixed_height: IGiphyImage;
  fixed_height_still: IGiphyImage;
  fixed_height_downsampled: IGiphyImage;
  fixed_width: IGiphyImage;
  fixed_width_still: IGiphyImage;
  fixed_width_downsampled: IGiphyImage;
  fixed_height_small: IGiphyImage;
  fixed_height_small_still: IGiphyImage;
  fixed_width_small: IGiphyImage;
  fixed_width_small_still: IGiphyImage;
  downsized: IGiphyImage;
  downsized_still: IGiphyImage;
  downsized_large: IGiphyImage;
  downsized_medium: IGiphyImage;
  original: IGiphyImage;
  original_still: IGiphyImage;
  looping: IGiphySimpleMp4;
  preview: IGiphyImage;
  preview_gif: IGiphyImage;
  preview_webp: IGiphyImage;
  hd?: IGiphyImage;
  '480w_still': IGiphyImage;
}

export interface IGiphyGifObject {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: IGiphyImages;
  user?: IGiphyUser;
  analytics_response_payload: string;
  analytics: {
    onload: {
      url: string;
    };
    onclick: {
      url: string;
    };
    onsent: {
      url: string;
    };
  };
}

export interface IGiphyPagination {
  total_count: number; // Total number of items available.
  count: number; // Number of items returned in this response.
  offset: number; // Position in pagination.
}

export interface IGiphyMeta {
  status: number; // HTTP response status.
  msg: string; // Human-readable response message.
  response_id: string; // Unique ID paired with this response.
}

/**
 * Response returned from Giphy's trending API
 */
export interface IGiphyTrendingResponse {
  data: IGiphyGifObject[];
  pagination: IGiphyPagination;
  meta: IGiphyMeta;
}
