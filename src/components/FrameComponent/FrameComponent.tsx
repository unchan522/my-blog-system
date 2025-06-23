import React, { useContext } from 'react';
import VideoOverlayContext from '../../providers/VideoContext';

export interface FrameProps {
  embedLink: string;
  embedTitle: string;
}

export const FrameComponent = (props: FrameProps) => {
  const { embedLink, embedTitle } = props;
  const frameAllowed =
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  const { handleOnLoaded } = useContext(VideoOverlayContext);

  const onLoaded = (): void => {
    if (handleOnLoaded) {
      handleOnLoaded();
    }
  };

  return (
    <iframe
      onLoad={onLoaded}
      src={`${embedLink}?autoplay=1&mute=0&rel=0`}
      title={embedTitle}
      frameBorder="0"
      allow={frameAllowed}
      allowFullScreen
    />
  );
};
