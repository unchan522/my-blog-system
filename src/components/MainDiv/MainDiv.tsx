import { useContext, useEffect } from 'react';

import VideoOverlayContext from '@/providers/VideoContext';

import styles from './style.module.css';

type FCProps = {
  children: React.ReactNode;
  show: boolean;
};

export const MainDiv = ({ show, children }: FCProps) => {
  const { handleOnOpen } = useContext(VideoOverlayContext);

  useEffect(() => {
    if (show && handleOnOpen) {
      handleOnOpen();
    }
  }, [show, handleOnOpen]);

  return (
    <div
      className={`${styles.videoPlayerOverlay} ${!show ? styles.hiddenTransform : ''}`}
    >
      {show && children}
    </div>
  );
};
