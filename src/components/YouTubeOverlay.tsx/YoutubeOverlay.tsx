import { useEffect, useState } from 'react';

import VideoOverlayContext from '@/providers/VideoContext';

// import { MainDiv } from '../MainDiv/MainDiv';
import BodyComposer from '../BodyComposer/BodyComposer';

type FCProps = {
  embedLink: string;
  embedTitle: string;
  closeIconSrc: string;
  handleOnClose?: () => void;
  handleOnOpen?: () => void;
  handleOnLoaded?: () => void;
};

export const YouTubeOverlay = ({
  embedLink,
  embedTitle,
  closeIconSrc,
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

  // useEffect(() => {
  //   if (createOverlay) {
  //     const timer = setTimeout(() => setShowState(true), 120);
  //     return () => clearTimeout(timer);
  //   }
  // }, [createOverlay]);

  if (!createOverlay && !showState) return null;

  return (
    <VideoOverlayContext.Provider
      value={{ handleOnClose, handleOnOpen, handleOnLoaded }}
    >
      {/* <MainDiv show={showState}> */}
      <BodyComposer
        embedLink={embedLink}
        embedTitle={embedTitle}
        closeIconSrc={closeIconSrc}
        onCloseHandler={onCloseHandler}
      />
      {/* </MainDiv> */}
    </VideoOverlayContext.Provider>
  );
};
