import Image from 'next/image';
import styles from '../styles/Splashscreen.module.css';

export default function Splashscreen() {
  return (
    <section className={styles.container}>
        <div className={styles.foreground}>
            <h2>
                Spring Sale
            </h2>
            <p>
            Spring is the perfect time to add some new life to your home and office with fresh plants. Save on all your favorite plants!
            </p>
            <button className={styles.button}>Shop now</button>
        </div>
        <div className={styles.background}>
        <Image
                src='/images/green_foliage.webp'
                className={styles.background_image}
                width="0"
                height="0"
                sizes="100vw"
            />
        </div>

    </section>
  )
}
