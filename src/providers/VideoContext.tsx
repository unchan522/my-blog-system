import { createContext } from 'react';

interface CtxProps {
  handleOnOpen?: () => void;
  handleOnClose?: () => void;
  handleOnLoaded?: () => void;
}

const VideoOverlayContext = createContext<CtxProps>({});

export default VideoOverlayContext;
