import styles from './About.module.css'

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.imageCol}>
        <img src="/images/eu.jpg" alt="João Falcão" />
      </div>
      <div className={styles.textCol}>
        <p className={styles.label}>About</p>
        <h2 className={styles.name}>João Falcão</h2>
        <p className={styles.role}>Travel & Commercial Photographer / Videographer</p>
        <p className={styles.bio}>
          Inspired by light, nature, and the quiet beauty of everyday moments.
          My approach is calm and intentional — focused on storytelling and authentic
          emotion across editorials, weddings, portraits, and travel work.
        </p>
        <p className={styles.bio}>
          I have a preference for organic tones and soft lighting, and I believe
          photography is about preserving atmosphere as much as capturing images.
        </p>
        <p className={styles.quote}>"Create to inspire and explore your daily boundaries."</p>
        <div className={styles.links}>
          <a href="mailto:hello@joaofalcao.pt">hello@joaofalcao.pt</a>
          <a href="https://www.instagram.com/joaoffalcao" target="_blank" rel="noopener noreferrer">@joaoffalcao</a>
          <a href="https://notyourtypicalphoto.pt/" target="_blank" rel="noopener noreferrer">Wedding Photography ↗</a>
        </div>
      </div>
    </section>
  )
}
