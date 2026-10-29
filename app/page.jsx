export default function Home() {
  return (
    <main className="container">
      <header>
        <h1>Práctica 8: Azure Static Web Apps</h1>
        <p>Frontend publicado desde GitHub en Azure.</p>
      </header>

      <section>
        <h2>Estado de la aplicación</h2>
        <p className="status"><span className="status-dot" /> Aplicación funcionando</p>
      </section>

      <section>
        <h2>Servicios utilizados</h2>
        <ul>
          <li>Next.js 15 y React para crear el frontend.</li>
          <li>Azure Static Web Apps para publicar la aplicación.</li>
          <li>GitHub Actions para automatizar el despliegue.</li>
        </ul>
      </section>

      <footer>Práctica 8 · Azure</footer>
    </main>
  );
}
