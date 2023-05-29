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
            <nav>
                <Link href="shop">Shop</Link>
                <Link href="about">About Us</Link>
                <Link href="contact">Contact</Link>
            </nav>
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