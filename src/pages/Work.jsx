import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import styles from './Work.module.css'

export default function Work() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Work</h2>
      <div className={styles.grid}>
        {projects.map((p) => (
          <Link key={p.slug} to={`/work/${p.slug}`} className={styles.card}>
            <div className={styles.imgWrap}>
              <img src={p.cover} alt={p.title} loading="lazy" />
            </div>
            <p className={styles.label}>{p.title}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
