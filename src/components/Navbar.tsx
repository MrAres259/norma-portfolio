import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Norma Santos H.
        </Link>
        <nav>
          <ul className={styles.navLinks}>
            <li><Link href="/" className={styles.navLink}>Inicio</Link></li>
            <li><Link href="/about" className={styles.navLink}>Sobre Mí</Link></li>
            <li><Link href="/practice-areas" className={styles.navLink}>Áreas de Práctica</Link></li>
            <li><Link href="/contact" className={styles.navLink}>Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
