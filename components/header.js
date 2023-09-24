import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <section className={styles.header__container}>
                <Link href="/">
            <h2>
                    The Plant Corner
            </h2>
                </Link>
            <div className={styles.search}>
                <input type="text" name="search" placeholder='Search' />
                <Image
                    src="/images/magnifying-glass.png" // Route of the image file
                    height={20} // Desired size with correct aspect ratio
                    width={20} // Desired size with correct aspect ratio
                    alt="Your Name"
                />
            </div>
        </section>
    );
}