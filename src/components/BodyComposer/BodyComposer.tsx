import { memo } from 'react';

import { CloseButton } from '../CloseButton/CloseButton';
import {
  FrameComponent,
  type FrameProps,
} from '../FrameComponent/FrameComponent';

type FCProps = FrameProps & {
  onCloseHandler: () => void;
};

export const BodyComposer = ({
  embedLink,
  embedTitle,
  onCloseHandler,
}: FCProps) => {
  return (
    <>
      <CloseButton onClickHandler={onCloseHandler} />
      <FrameComponent embedLink={embedLink} embedTitle={embedTitle} />
    </>
  );
};

export default memo(BodyComposer);
