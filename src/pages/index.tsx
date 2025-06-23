// 'use client';

import Head from 'next/head';

import { CircleIcon } from '@/components/CircleIcon/CircleIcon';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { YouTubeOverlay } from '@/components/YouTubeOverlay.tsx/YoutubeOverlay';

import style from '../styles/Home.module.css';
import { getAllArticles } from '@/utils/articles';
import { ArticlesProps } from '@/types/article';

export default function Home({ articles }: ArticlesProps) {
  const imageStyle = {
    width: '80px',
    height: '80px',
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Header />
      <main className={style['main-container']}>
        <div className={style['main-inner']}>
          <div className={style['self-name-container']}>
            <CircleIcon imageStyle={imageStyle} />
            <p>
              Unchan / <span>Channel</span>
            </p>
          </div>
          {/* <div className={style['self-introduction']}></div> */}
          <div className={style['self-video']}>
            {articles.map((article, index) => (
              <YouTubeOverlay
                key={index}
                embedLink={article.fontMatter.embedLink}
                embedTitle={article.fontMatter.embedTitle}
                closeIconSrc={article.fontMatter.closeIconSrc || ''}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const articles = getAllArticles();

  console.log('Articles:', articles);

  return {
    props: { articles },
  };
};
