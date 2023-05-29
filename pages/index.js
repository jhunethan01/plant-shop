import Head from 'next/head';
import Link from "next/link";
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Image_box from '../components/image_box';

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
            <Image_box image_src="/images/green foliage.webp" title="The Plant Corner" />
          </div>
          <div className={styles.container_row}>
            <Image_box image_src="/images/roses.jpeg" title="Flowers" />
            <Image_box image_src="/images/succulent.jpg" title="Succulents" />
            <Image_box image_src="/images/plant care.jpg" title="Plant Care" />
          </div>
        </section>
      </main>

      <footer>
        FOOTER
      </footer>
    </div>
  )
}
