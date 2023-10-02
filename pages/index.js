import Head from 'next/head';
import Link from "next/link";
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/header';
import Image_box from '../components/image_box';
import Footer from '../components/footer';
import Banner from '../components/banner';
import Navigation from '../components/navigation';
import Splashscreen from '../components/splashscreen';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Plant Corner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Navigation />
        <Banner text='20% off plants, bulbs & seeds* | Shop now' />
          <Splashscreen />
        <section className={styles.body__container}>
          <div className={styles.container_row}>
            <h2 className={styles.container_label}>
              Personalised Picks
            </h2>
          </div>
          <div className={styles.container_row}>
            <Image_box image_src="/images/roses.jpeg" title="Flowers" link='/Flowers' />
            <Image_box image_src="/images/succulent.jpg" title="Succulents" link='/Succulents' />
            <Image_box image_src="/images/plant_care.jpg" title="Plant Care" link='/plant_care' />
          </div>
          <div className={styles.container_row}>
            <h2 className={styles.container_label}>
              Best Sellers
            </h2>
          </div>
          <div className={styles.container_row}>
            <Image_box image_src="/images/plant_care.jpg" title="Plant Care" link='/plant_care' />
            <Image_box image_src="/images/roses.jpeg" title="Flowers" link='/Flowers' />
            <Image_box image_src="/images/succulent.jpg" title="Succulents" link='/Succulents' />
          </div>
          <div className={styles.container_row}>
            <Image_box image_src="/images/succulent.jpg" title="Succulents" link='/Succulents' />
            <Image_box image_src="/images/plant_care.jpg" title="Plant Care" link='/plant_care' />
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
