import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Image_box({image_src, title, link = false}) {
    return (
        <div className={`${link ? '' : styles.unclickable} ${styles.box}`}>
            <Image
                src={image_src}
                className={styles.background_image}
                width="0"
                height="0"
                sizes="100vw"
            />
            <h2 className={styles.foreground}>
                {title}
            </h2>
        </div>
    );
}