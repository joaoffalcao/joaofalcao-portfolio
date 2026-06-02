import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects.js'
import styles from './Project.module.css'

export default function Project() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  if (!project) return <Navigate to="/work" replace />

  const idx = projects.findIndex(p => p.slug === slug)
  const prev = projects[idx - 1]
  const next = projects[idx + 1]

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Link to="/work" className={styles.back}>← Work</Link>
        <h1 className={styles.title}>{project.title}</h1>
      </div>

      <div className={styles.gallery}>
        {project.images.map((src, i) => (
          <div key={i} className={styles.imgWrap}>
            <img src={src} alt={`${project.title} ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <nav className={styles.nav}>
        {prev ? (
          <Link to={`/work/${prev.slug}`} className={styles.navLink}>← {prev.title}</Link>
        ) : <span />}
        {next ? (
          <Link to={`/work/${next.slug}`} className={styles.navLink}>{next.title} →</Link>
        ) : <span />}
      </nav>
    </section>
  )
}
