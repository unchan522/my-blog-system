import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { BsFillMoonFill, BsSun } from 'react-icons/bs';

import style from './ChangeThemeButton.module.css';

const ChangeThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClickChangeTheme = () => {
    if (theme === 'light') setTheme('dark');
    if (theme === 'dark') setTheme('light');
  };

  if (!mounted) return null;

  return (
    <div
      className={style['theme-button-container']}
      onClick={handleClickChangeTheme}
    >
      {theme === 'dark' ? (
        <BsSun className={style.light} />
      ) : (
        <BsFillMoonFill className={style.dark} />
      )}
    </div>
  );
};

export default ChangeThemeButton;
