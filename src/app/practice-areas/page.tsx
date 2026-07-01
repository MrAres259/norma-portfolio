import styles from './page.module.css';

export default function PracticeAreas() {
  return (
    <>
      <div className={styles.header}>
        <div className="container animate-fade-in">
          <h1>Áreas de Práctica</h1>
          <p style={{ marginTop: '1rem', opacity: 0.9 }}>Especialidades y Servicios Legales</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          
          <div className={`${styles.areaCard} animate-fade-in delay-100`}>
            <h2 className={styles.areaTitle}>Derecho Civil y Familiar</h2>
            <p>Brindamos asesoría y representación legal en asuntos que afectan directamente su patrimonio y relaciones familiares, siempre con sensibilidad, discreción y firmeza.</p>
            <ul className={styles.areaList}>
              <li>Divorcios (Incausados, Mutuo Acuerdo)</li>
              <li>Pensiones Alimenticias</li>
              <li>Guarda y Custodia de Menores</li>
              <li>Juicios Sucesorios (Testamentarios e Intestados)</li>
              <li>Elaboración y Revisión de Contratos Civiles</li>
              <li>Arrendamiento Inmobiliario</li>
            </ul>
          </div>

          <div className={`${styles.areaCard} animate-fade-in delay-200`}>
            <h2 className={styles.areaTitle}>Derecho Corporativo y Mercantil</h2>
            <p>Protegemos los intereses de su empresa desde su formación hasta su operación diaria, asegurando el cumplimiento normativo y resolviendo controversias comerciales.</p>
            <ul className={styles.areaList}>
              <li>Constitución de Sociedades Mercantiles</li>
              <li>Elaboración de Actas de Asamblea</li>
              <li>Contratos Mercantiles</li>
              <li>Cobranza Judicial y Extrajudicial</li>
              <li>Protección de Propiedad Intelectual</li>
              <li>Auditoría Legal Corporativa</li>
            </ul>
          </div>

          <div className={`${styles.areaCard} animate-fade-in delay-300`}>
            <h2 className={styles.areaTitle}>Derecho Laboral</h2>
            <p>Representamos a trabajadores y empresas en conflictos laborales, garantizando el respeto a los derechos consagrados en la Ley Federal del Trabajo.</p>
            <ul className={styles.areaList}>
              <li>Despidos Injustificados</li>
              <li>Cálculo y Reclamo de Liquidaciones</li>
              <li>Contratos Individuales de Trabajo</li>
              <li>Rescisión de Relaciones Laborales</li>
              <li>Acoso Laboral y Discriminación</li>
              <li>Defensa de Patrones ante Conciliación y Arbitraje</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
