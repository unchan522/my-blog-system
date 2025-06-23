import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { HiBars3 } from 'react-icons/hi2';

import style from './Header.module.css';
import ChangeThemeButton from '../ChangeThemeButton/ChangeThemeButton';
import { CircleIcon } from '../CircleIcon/CircleIcon';

export const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hamburgerMenuRefEl = hamburgerMenuRef.current;
    if (!hamburgerMenuRefEl) return;

    const handleClickElement = (e: MouseEvent) => {
      if (!hamburgerMenuRefEl.contains(e.target as Node)) {
        handleClickWithoutHamburgerMenu();
      } else {
        handleClickHamburgerMenu();
      }
    };
    document.addEventListener('click', handleClickElement);
    return () => document.removeEventListener('click', handleClickElement);
  }, [hamburgerMenuRef]);

  const menuContents = [
    { name: 'Home', path: '/', isCurrentPath: router.pathname === '/' },
    {
      name: 'Articles',
      path: '/articles',
      isCurrentPath: router.pathname === '/articles',
    },
    {
      name: 'Works',
      path: '/works',
      isCurrentPath: router.pathname === '/works',
    },
    {
      name: 'About',
      path: '/about',
      isCurrentPath: router.pathname === '/about',
    },
  ];

  const handleClickWithoutHamburgerMenu = () => setIsMenuOpen(false);
  const handleClickHamburgerMenu = () =>
    setIsMenuOpen((prevState) => !prevState);

  return (
    <header className={style.header}>
      <div className={style['header-inner']}>
        <div className={style['left-side-container']}>
          <CircleIcon />
          <nav className={style.nav}>
            <ul className={style['list-container']}>
              <li>
                <Link className={style.link} href={'/articles'}>
                  Article
                </Link>
              </li>
              <li>
                <Link className={style.link} href={'/about'}>
                  About
                </Link>
              </li>
              <li>
                <Link className={style.link} href={'/works'}>
                  Works
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style['button-wrap']}>
          <ChangeThemeButton />
          <div ref={hamburgerMenuRef} className={style['menu-wrap']}>
            <HiBars3 className={style.menu} />
            {isMenuOpen && (
              <div className={style['menu-content']}>
                {menuContents.map((menu) => (
                  <Link
                    key={menu.path}
                    className={`${style['menu-link']} ${
                      menu.isCurrentPath && style['current-path']
                    }`}
                    href={menu.path}
                  >
                    {menu.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
