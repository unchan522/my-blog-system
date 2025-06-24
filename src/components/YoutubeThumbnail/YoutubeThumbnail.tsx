import Image from 'next/image';

import { extractYoutubeVideoId } from '@/utils';

type YoutubeThumbnailProps = {
  youtubeLink: string;
  width?: number;
  height?: number;
  onClick?: () => void;
};

export const YoutubeThumbnail = ({
  youtubeLink,
  width = 1280,
  height = 720,
  onClick,
}: YoutubeThumbnailProps) => {
  const videoId = extractYoutubeVideoId(youtubeLink);

  if (!videoId) return <div>Invalid YouTube Link</div>;

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <Image
      src={thumbnailUrl}
      alt="YouTube Thumbnail"
      width={width}
      height={height}
      onClick={onClick}
    />
  );
};
