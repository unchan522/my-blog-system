import React, { useContext } from 'react';
import { MdClose } from 'react-icons/md';

import VideoOverlayContext from '@/providers/VideoContext';

import styles from './CloseButton.module.css';

type FCProps = {
  onClickHandler: () => void;
};

export const CloseButton = (props: FCProps) => {
  const { onClickHandler } = props;
  const { handleOnClose } = useContext(VideoOverlayContext);

  const handleOnClick = (): void => {
    onClickHandler();
    if (handleOnClose) {
      handleOnClose();
    }
  };

  return (
    <button className={styles.closeIcon} type="button" onClick={handleOnClick}>
      <MdClose size={24} />
    </button>
  );
};

/* exports */
export default CloseButton;
