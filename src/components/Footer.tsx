import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Norma Santos Hernández</h3>
          <p className={styles.footerText}>Despacho de abogados en CDMX comprometidos con la excelencia y la ética profesional.</p>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Enlaces Rápidos</h3>
          <ul className={styles.footerLinks}>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/about">Sobre Mí</Link></li>
            <li><Link href="/practice-areas">Áreas de Práctica</Link></li>
            <li><Link href="/contact">Contacto</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Contacto</h3>
          <p className={styles.footerText}>📍 Ciudad de México, México</p>
          <p className={styles.footerText}>📞 +52 (55) 1234 5678</p>
          <p className={styles.footerText}>✉️ contacto@normasantos.mx</p>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Norma Santos Hernández. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
