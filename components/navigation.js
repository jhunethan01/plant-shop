import styles from '../styles/Navigation.module.css';

export default function Splashscreen() {
    return (
        <section className={styles.container}>
            <a className={styles.sublink}>Plants </a>
            <a className={styles.sublink}>Bulbs </a>
            <a className={styles.sublink}>Indoor plants </a>
            <a className={styles.sublink}>Pots </a>
            <a className={styles.sublink}>Grow your own </a>
            <a className={styles.sublink}>Tools </a>
            <a className={styles.sublink}>Outdoor </a>
            <a className={styles.sublink}>Christmas</a>
            <a className={styles.sublink}>Offers</a>
        </section>
    )
}
