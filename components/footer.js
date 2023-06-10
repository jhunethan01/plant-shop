import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.container_row}>
            <ul className={styles.list}>
                <li className={styles.link}>About us</li>
                <li className={styles.link}>Contact</li>
                <li className={styles.link}>Environmental Policy</li>
                <li className={styles.link}>Delivery and Postage</li>
            </ul>
            <ul className={styles.list}>
                <li className={styles.link}>Terms and conditions</li>
                <li className={styles.link}>Customer Help Centre</li>
                <li className={styles.link}>Cookies and Privacy Policy</li>
            </ul>
        </div>
        <div className={styles.footer_trademark}>
        © 2023 The Plant Corner. All rights reserved. 
        </div>
    </footer>
  )
}
