import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import style from './CircleIcon.module.css';
import myImage from '../../images/unchan.svg';

type CircleIconProps = {
  imageStyle?: {
    height: string;
    width: string;
  };
};

export const CircleIcon: FC<CircleIconProps> = ({
  imageStyle = {
    height: '40px',
    width: '40px',
  },
}) => {
  return (
    <div className={style['image-wrap']} style={imageStyle}>
      <Link className={style.link} href={'/'}>
        <Image className={style.image} src={myImage} alt="my image ..." />
      </Link>
    </div>
  );
};
