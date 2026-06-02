import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageCol}>
        <img src="/images/eu.jpg" alt="João Falcão" />
      </div>
      <div className={styles.textCol}>
        <p className={styles.tagline}>Travel and commercial photographer & videographer</p>
        <h1 className={styles.title}>Based in Porto,<br />Portugal.</h1>
        <p className={styles.sub}>Inspired by light, nature, and the quiet beauty of everyday moments.</p>
        <div className={styles.actions}>
          <Link to="/work" className={styles.btnPrimary}>View Work</Link>
          <Link to="/about" className={styles.btnSecondary}>About Me</Link>
        </div>
      </div>
    </section>
  )
}
