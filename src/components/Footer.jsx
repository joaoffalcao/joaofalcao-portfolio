import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="mailto:hello@joaofalcao.pt">hello@joaofalcao.pt</a>
      <a href="https://www.instagram.com/joaoffalcao" target="_blank" rel="noopener noreferrer">@joaoffalcao</a>
      <span>© {new Date().getFullYear()} João Falcão</span>
    </footer>
  )
}
