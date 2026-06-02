import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>João Falcão</NavLink>

      <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
        <span className={open ? styles.barTop + ' ' + styles.barTopOpen : styles.barTop} />
        <span className={open ? styles.barMid + ' ' + styles.barMidOpen : styles.barMid} />
        <span className={open ? styles.barBot + ' ' + styles.barBotOpen : styles.barBot} />
      </button>

      <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
        <NavLink to="/work" className={({isActive}) => isActive ? styles.linkActive : styles.link} onClick={() => setOpen(false)}>Work</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? styles.linkActive : styles.link} onClick={() => setOpen(false)}>About</NavLink>
        <a href="https://notyourtypicalphoto.pt/" target="_blank" rel="noopener noreferrer" className={styles.link}>Casamentos</a>
        <a href="https://www.instagram.com/joaoffalcao" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
      </nav>
    </header>
  )
}
