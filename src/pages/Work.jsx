import styles from './Work.module.css'

const projects = [
  { title: 'Herdade do Peso', image: '/images/herdadedopeso-15.jpg' },
  { title: 'EDP', image: '/images/edp-13.jpg' },
  { title: 'FC Porto', image: '/images/fcp-24.jpg' },
  { title: 'Samsung', image: '/images/samsung.jpg' },
  { title: 'ATB & Etevimol', image: '/images/atb-11.jpg' },
  { title: "D'Adélia", image: '/images/dadelia-9.jpg' },
  { title: 'The Feeting Room / Lot', image: '/images/lot-2.jpg' },
  { title: 'Quinta de Monforte', image: '/images/monforte-15.jpg' },
  { title: 'American Vintage', image: '/images/americanvintage-12.jpg' },
  { title: 'Basilar', image: '/images/basilar-9.jpg' },
  { title: 'Urbanista', image: '/images/urbanista-13.jpg' },
  { title: 'Balkan Campers', image: '/images/balkan-campers-15.jpg' },
  { title: 'WokToWalk', image: '/images/woktowalk.jpg' },
  { title: 'Sollo Life', image: '/images/sollolife-9.jpg' },
]

export default function Work() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Work</h2>
      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.title} className={styles.card}>
            <div className={styles.imgWrap}>
              <img src={p.image} alt={p.title} loading="lazy" />
            </div>
            <p className={styles.label}>{p.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
