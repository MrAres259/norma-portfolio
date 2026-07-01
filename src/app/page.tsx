import Button from '@/components/Button';
import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container animate-fade-in`}>
          <h1 className={styles.heroTitle}>
            Norma Santos Hernández
          </h1>
          <p className={styles.heroSubtitle}>
            Soluciones legales estratégicas con integridad y excelencia. Tu confianza, nuestra prioridad.
          </p>
          <div className={styles.heroButtons}>
            <Button href="/contact">Agenda una Consulta</Button>
            <Button href="/practice-areas" variant="secondary">Nuestras Áreas</Button>
          </div>
        </div>
      </section>

      <section className={`section ${styles.features}`}>
        <div className="container">
          <h2 className="text-center animate-fade-in delay-100">Áreas de Práctica</h2>
          <div className={styles.featuresGrid}>
            <div className={`${styles.featureCard} animate-fade-in delay-200`}>
              <h3 className={styles.featureTitle}>Derecho Civil y Familiar</h3>
              <p>Asesoría integral en divorcios, pensiones alimenticias, sucesiones y contratos civiles. Protegemos lo que más te importa.</p>
              <br/>
              <Link href="/practice-areas" style={{color: 'var(--color-secondary)', fontWeight: 600}}>Leer más &rarr;</Link>
            </div>
            <div className={`${styles.featureCard} animate-fade-in delay-300`}>
              <h3 className={styles.featureTitle}>Derecho Corporativo</h3>
              <p>Constitución de sociedades, gobierno corporativo, fusiones y solución de controversias mercantiles para tu negocio.</p>
              <br/>
              <Link href="/practice-areas" style={{color: 'var(--color-secondary)', fontWeight: 600}}>Leer más &rarr;</Link>
            </div>
            <div className={`${styles.featureCard} animate-fade-in delay-300`}>
              <h3 className={styles.featureTitle}>Derecho Laboral</h3>
              <p>Representación en despidos injustificados, rescisiones, negociaciones colectivas y auditorías laborales.</p>
              <br/>
              <Link href="/practice-areas" style={{color: 'var(--color-secondary)', fontWeight: 600}}>Leer más &rarr;</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container text-center animate-fade-in delay-200">
          <h2>Sobre Norma Santos</h2>
          <p style={{ maxWidth: '800px', margin: '1.5rem auto 2rem' }}>
            Con más de dos décadas de experiencia litigando en la Ciudad de México, la Licenciada Norma Santos ha construido una reputación basada en resultados, ética profesional y un trato humano y personalizado para cada uno de sus clientes.
          </p>
          <Button href="/about">Conoce más</Button>
        </div>
      </section>
    </>
  );
}
