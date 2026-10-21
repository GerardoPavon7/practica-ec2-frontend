'use client';

import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="page-shell">
      <nav className="topbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Nexo, inicio">
          <span className="brand-mark">N</span>
          <span>Nexo</span>
        </a>
        <span className="lab-badge"><span className="status-dot" /> Laboratorio 6 · AWS EC2</span>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">UNA EXPERIENCIA WEB EN LA NUBE</p>
          <h1>Tu proyecto,<br /><span>listo para despegar.</span></h1>
          <p className="hero-description">
            Este frontend está publicado en una máquina virtual EC2 y servido por Nginx.
            La aplicación de Node.js se mantiene activa con PM2.
          </p>
          <a className="primary-link" href="#contacto">Conocer la aplicación <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-art" aria-label="Ilustración de despliegue en la nube" role="img">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="cloud-card">
            <div className="cloud-top"><span className="cloud-dot" /><span className="cloud-dot" /><span className="cloud-dot" /></div>
            <div className="cloud-icon">☁</div>
            <div className="cloud-line wide" /><div className="cloud-line" />
            <div className="cloud-footer"><span /> EC2 · Nginx · Node.js</div>
          </div>
          <span className="float-label label-top">DEPLOYMENT <b>✓</b></span>
          <span className="float-label label-bottom">ONLINE <i /></span>
          <span className="spark spark-one">✦</span><span className="spark spark-two">✦</span>
        </div>
      </section>

      <section className="status-strip" aria-label="Estado del despliegue">
        <div><span className="status-dot" /><strong>Frontend activo</strong></div>
        <span>Next.js 14</span><span>Nginx como proxy</span><span>PM2 en producción</span>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-intro">
          <p className="eyebrow">PRUEBA LA INTERFAZ</p>
          <h2>Hagamos algo<br />increíble.</h2>
          <p>Completa el formulario de demostración. La confirmación se muestra en esta página.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" type="text" placeholder="¿Cómo te llamas?" required />
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" type="email" placeholder="tu@correo.com" required />
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message" rows="3" placeholder="Cuéntame brevemente qué necesitas" required />
          <button type="submit">Enviar mensaje <span aria-hidden="true">→</span></button>
          {submitted && <p className="form-success" role="status">¡Gracias! La interfaz está funcionando correctamente.</p>}
          <p className="form-note">Formulario de demostración; no envía ni almacena datos personales.</p>
        </form>
      </section>

      <footer className="footer">
        <span>Práctica de Servicios Cloud · Facultad de Informática UAQ</span>
        <span>Desplegado en EC2 <span className="footer-dot">●</span></span>
      </footer>
    </main>
  );
}
