import { EyeCatch } from '@/components/EyeCatch/EyeCatch';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

import style from '../styles/About.module.css';

function About() {
  return (
    <>
      <Header />
      <main className={style['main-container']}>
        <div className={style['main-inner']}>
          <h2 className={style['page-title']}>About</h2>
          <div className={style['under-construction']}>
            <p>Under Construction...</p>
            <EyeCatch emoji="👷" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
