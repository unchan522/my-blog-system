import twemoji, { Twemoji } from '@twemoji/api';
import React, { FC, useEffect, useState } from 'react';

import style from './EyeCatch.module.css';

type EyeCatchProps = {
  emoji: string;
  emojiStyle?: {
    width: string;
    height: string;
  };
};

export const EyeCatch: FC<EyeCatchProps> = ({ emoji, emojiStyle }) => {
  const [isClient, setIsClient] = useState(false);
  const emojiImg = (twemoji as Twemoji).parse(emoji || '😁', {
    ext: '.svg',
    folder: 'svg',
  });
  useEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);
  return (
    <>
      {isClient && (
        <div
          className={style['eye-catch']}
          style={emojiStyle}
          id="eye-catch"
          dangerouslySetInnerHTML={{ __html: emojiImg }}
        />
      )}
    </>
  );
};
