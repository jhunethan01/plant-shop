import Head from 'next/head';
import Link from "next/link";
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Image_box from '../components/image_box';
import Footer from '../components/footer';

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
            <h2 className={styles.container_label}>
              Personalised Picks
            </h2>
          </div>
          <div className={styles.container_row}>
            <Image_box image_src="/images/roses.jpeg" title="Flowers" />
            <Image_box image_src="/images/succulent.jpg" title="Succulents" />
            <Image_box image_src="/images/plant care.jpg" title="Plant Care" />
          </div>
          <div className={styles.container_row}>
            <h2 className={styles.container_label}>
              Best Sellers
            </h2>
          </div>
          <div className={styles.container_row}>
            <Image_box image_src="/images/plant care.jpg" title="Plant Care" />
            <Image_box image_src="/images/roses.jpeg" title="Flowers" />
            <Image_box image_src="/images/succulent.jpg" title="Succulents" />
          </div>
          <div className={styles.container_row}>
            <Image_box image_src="/images/succulent.jpg" title="Succulents" />
            <Image_box image_src="/images/plant care.jpg" title="Plant Care" />
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
