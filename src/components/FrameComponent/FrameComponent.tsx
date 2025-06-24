import { CSSProperties, useContext } from 'react';

import VideoOverlayContext from '@/providers/VideoContext';
import { getValidEmbedLink } from '@/utils';

export type FrameProps = {
  embedLink: string;
  embedTitle?: string;
  style?: CSSProperties;
};

export const FrameComponent = (props: FrameProps) => {
  const { embedLink, embedTitle, style } = props;
  const frameAllowed =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  const { handleOnLoaded } = useContext(VideoOverlayContext);

  const onLoaded = (): void => {
    if (handleOnLoaded) {
      handleOnLoaded();
    }
  };

  const finalEmbedLink = `${getValidEmbedLink(embedLink)}?autoplay=1&mute=0&rel=0`;

  return (
    <iframe
      onLoad={onLoaded}
      src={finalEmbedLink}
      title={embedTitle}
      frameBorder="0"
      allow={frameAllowed}
      allowFullScreen
      style={style}
    />
  );
};
