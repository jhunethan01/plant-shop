import styles from '../styles/Banner.module.css';

export default function Footer({text}) {
  return (
    <div className={styles.banner_container}>
        {text}
    </div>
  )
}
