import { memo } from 'react';
// import CloseButton from './close-button';
import {
  FrameComponent,
  type FrameProps,
} from '../FrameComponent/FrameComponent';

type FCProps = FrameProps & {
  closeIconSrc?: string;
  onCloseHandler?: () => void;
};

export const BodyComposer = ({
  embedLink,
  embedTitle,
  onCloseHandler,
  closeIconSrc,
}: FCProps) => {
  return (
    <>
      {/* <CloseButton onClickHandler={onCloseHandler} src={closeIconSrc} /> */}
      <FrameComponent embedLink={embedLink} embedTitle={embedTitle} />
    </>
  );
};

export default memo(BodyComposer);
