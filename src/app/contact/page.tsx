import Button from '@/components/Button';
import styles from './page.module.css';

export default function Contact() {
  return (
    <>
      <div className={styles.header}>
        <div className="container animate-fade-in">
          <h1>Contacto</h1>
          <p style={{ marginTop: '1rem', opacity: 0.9 }}>Estamos aquí para escucharte y asesorarte</p>
        </div>
      </div>

      <section className="section">
        <div className={`container ${styles.contactGrid}`}>
          
          <div className="animate-fade-in delay-100">
            <h2>Envíanos un Mensaje</h2>
            <p style={{ marginBottom: '2rem', marginTop: '1rem' }}>Llena el siguiente formulario y nos pondremos en contacto contigo a la brevedad posible.</p>
            
            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Nombre Completo</label>
                <input type="text" id="name" className={styles.input} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Correo Electrónico</label>
                <input type="email" id="email" className={styles.input} required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>Teléfono</label>
                <input type="tel" id="phone" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Mensaje o Consulta</label>
                <textarea id="message" className={styles.textarea} required></textarea>
              </div>
              <Button type="submit">Enviar Mensaje</Button>
            </form>
          </div>

          <div className={`${styles.contactInfoCard} animate-fade-in delay-200`}>
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Dirección de la Oficina</h3>
              <p>Av. Paseo de la Reforma 123, Piso 4</p>
              <p>Col. Juárez, Cuauhtémoc</p>
              <p>C.P. 06600, Ciudad de México</p>
            </div>
            
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Teléfonos</h3>
              <p>Oficina: +52 (55) 1234 5678</p>
              <p>Urgencias: +52 (55) 8765 4321</p>
            </div>
            
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Correo Electrónico</h3>
              <p>contacto@normasantos.mx</p>
              <p>asesoria@normasantos.mx</p>
            </div>
            
            <div className={styles.infoItem}>
              <h3 className={styles.infoTitle}>Horario de Atención</h3>
              <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              <p>Sábados: Previa cita</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
