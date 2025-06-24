import Head from 'next/head';
import { useState } from 'react';

import { CircleIcon } from '@/components/CircleIcon/CircleIcon';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { YouTubeOverlay } from '@/components/YouTubeOverlay.tsx/YoutubeOverlay';
import { YoutubeThumbnail } from '@/components/YoutubeThumbnail/YoutubeThumbnail';
import { ArticlesProps } from '@/types/article';
import { getAllArticles } from '@/utils/articles';

import style from '../styles/Home.module.css';

export default function Home({ articles }: ArticlesProps) {
  const imageStyle = {
    width: '80px',
    height: '80px',
  };

  const [video, setVideo] = useState('');

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
          <div className={style['self-introduction']}></div>
          <div className={style['self-video']}>
            {articles.map((article, index) => (
              <YoutubeThumbnail
                key={index}
                youtubeLink={article.fontMatter.embedLink}
                width={300}
                height={200}
                onClick={() => setVideo(article.fontMatter.embedLink)}
              />
            ))}
            {video && (
              <YouTubeOverlay
                embedLink={video}
                embedTitle={'Unchan Channel Video'}
                handleOnClose={() => {
                  setVideo('');
                }}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const articles = getAllArticles();

  return {
    props: { articles },
  };
};
