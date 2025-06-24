import { useEffect, useState } from 'react';

import VideoOverlayContext from '@/providers/VideoContext';

import BodyComposer from '../BodyComposer/BodyComposer';
import { MainDiv } from '../MainDiv/MainDiv';

type FCProps = {
  embedLink: string;
  embedTitle: string;
  handleOnClose?: () => void;
  handleOnOpen?: () => void;
  handleOnLoaded?: () => void;
};

export const YouTubeOverlay = ({
  embedLink,
  embedTitle,
  handleOnClose,
  handleOnOpen,
  handleOnLoaded,
}: FCProps) => {
  const [createOverlay, setCreateOverlay] = useState(false);
  const [showState, setShowState] = useState(false);

  const onCloseHandler = () => {
    setShowState(false);
    setTimeout(() => setCreateOverlay(false), 250);
  };

  useEffect(() => {
    setCreateOverlay(true);
  }, [embedLink, embedTitle]);

  useEffect(() => {
    if (createOverlay) {
      const timer = setTimeout(() => setShowState(true), 120);
      return () => clearTimeout(timer);
    }
  }, [createOverlay]);

  const contextValue = {
    handleOnClose,
    handleOnOpen,
    handleOnLoaded,
  };

  if (!createOverlay && !showState) return null;

  return (
    <VideoOverlayContext.Provider value={contextValue}>
      <MainDiv show={showState}>
        <BodyComposer
          embedLink={embedLink}
          embedTitle={embedTitle}
          onCloseHandler={onCloseHandler}
        />
      </MainDiv>
    </VideoOverlayContext.Provider>
  );
};
