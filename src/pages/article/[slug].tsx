import fs from 'fs';

import matter from 'gray-matter';
import React, { useEffect } from 'react';
import markdownToHtml from 'zenn-markdown-html';

import { EyeCatch } from '@/components/EyeCatch/EyeCatch';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

import style from './Article.module.css';

type ArticleProps = {
  fontMatter: {
    title: string;
    emoji: string;
    type?: string;
    topics?: string[];
    published: boolean;
    publishedAt?: string;
  };
  content: string;
};

function Article({ fontMatter, content }: ArticleProps) {
  // Warning: Prop `dangerouslySetInnerHTML` did not match.
  // エラーのため一時的にクライアントのhtml文字列にtabindexを付与している
  const markdownContent = markdownToHtml(content).replace(
    /<pre class="language-[^>]+>/g,
    (match) => match.replace('>', ' tabindex="0">'),
  );

  useEffect(() => {
    import('zenn-embed-elements');
  }, []);

  return (
    <>
      <Header />
      <main className={style['main-container']}>
        <div className={style['main-inner']}>
          <div className={style['title-wrap']}>
            <div className={style['eye-catch-wrap']}>
              <EyeCatch emoji={fontMatter.emoji} />
            </div>
            <h2 className={style.title}>{fontMatter.title}</h2>
          </div>
          {fontMatter.publishedAt ? (
            <p className={style.published}>公開: {fontMatter.publishedAt}</p>
          ) : (
            <p className={style.published}>公開: 未設定</p>
          )}
          <div
            className={`znc ${style.content}`}
            dangerouslySetInnerHTML={{
              __html: markdownContent,
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

type Params = {
  params: { slug: string };
};

export const getStaticProps = async ({ params }: Params) => {
  const fileContent = fs.readFileSync(`articles/${params.slug}.md`, 'utf-8');
  const { data, content } = matter(fileContent);
  return {
    props: {
      fontMatter: data,
      content,
    },
  };
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync('articles');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Article;
