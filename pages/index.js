import Head from 'next/head';
import Link from "next/link";
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Plant Corner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <section className={styles.body__container}>
          <div className={styles.container_row}>
            <div className={styles.box}>
              <Image
                src='/images/green foliage.webp'
                className={styles.background_image}
                width="0"
                height="0"
                sizes="100vw"
              />
              <h2 className={styles.foreground}>
                The Plant Corner
              </h2>
            </div>
          </div>
          <div className={styles.container_row}>
            <div className={styles.box}>
              <Image
                src='/images/roses.jpeg'
                className={styles.background_image}
                width="0"
                height="0"
                sizes="100vw"
              />
              <h2 className={styles.foreground}>
                Flowers
              </h2>
            </div>
            <div className={styles.box}>
              <Image
                src='/images/succulent.jpg'
                className={styles.background_image}
                width="0"
                height="0"
                sizes="100vw"
              />
              <h2 className={styles.foreground}>
                Succulents
              </h2>
            </div>
            <div className={styles.box}>
              <Image
                src='/images/plant care.jpg'
                className={styles.background_image}
                width="0"
                height="0"
                sizes="100vw"
              />
              <h2 className={styles.foreground}>
                Plant Care
              </h2>
            </div>
          </div>
        </section>
      </main>

      <footer>
        FOOTER
      </footer>
    </div>
  )
}
