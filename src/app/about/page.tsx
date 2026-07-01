import styles from './page.module.css';

export default function About() {
  return (
    <>
      <div className={styles.aboutHeader}>
        <div className="container animate-fade-in">
          <h1>Sobre Norma Santos</h1>
          <p style={{ marginTop: '1rem', opacity: 0.9 }}>Trayectoria y Compromiso</p>
        </div>
      </div>

      <section className="section">
        <div className={`container ${styles.aboutContent} animate-fade-in delay-100`}>
          <div className={styles.aboutText}>
            <h2>Una Vida Dedicada a la Justicia</h2>
            <br/>
            <p>
              La Licenciada Norma Santos Hernández es egresada de la Universidad Nacional Autónoma de México (UNAM) y cuenta con más de 20 años de experiencia litigando en los tribunales de la Ciudad de México y área metropolitana.
            </p>
            <p>
              Su enfoque profesional se caracteriza por una atención meticulosa a los detalles, honestidad intachable y la búsqueda incansable de la mejor solución jurídica para sus clientes. Ha representado exitosamente tanto a individuos en situaciones familiares delicadas como a empresas multinacionales en litigios complejos.
            </p>
            <p>
              Actualmente dirige su propio despacho, donde lidera a un equipo de abogados comprometidos con los mismos valores éticos y profesionales que han caracterizado su carrera.
            </p>
          </div>

          <div className={styles.aboutStats}>
            <div className={styles.statItem}>
              <div className={styles.statValue}>20+</div>
              <div className={styles.statLabel}>Años de Experiencia</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>500+</div>
              <div className={styles.statLabel}>Casos de Éxito</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statValue}>100%</div>
              <div className={styles.statLabel}>Compromiso</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
