export default function Home() {
  return (
    <main className="container">
      <header>
        <h1>Práctica 6: Frontend en AWS EC2</h1>
        <p>Aplicación de ejemplo desplegada en una máquina virtual.</p>
      </header>

      <section>
        <h2>Estado de la aplicación</h2>
        <p className="status"><span className="status-dot" /> Aplicación funcionando</p>
      </section>

      <section>
        <h2>Servicios utilizados</h2>
        <ul>
          <li>Next.js 15 para crear el frontend.</li>
          <li>Node.js y PM2 para ejecutar la aplicación.</li>
          <li>Nginx como proxy web en la máquina EC2.</li>
        </ul>
      </section>

      <footer>Laboratorio 6 · AWS</footer>
    </main>
  );
}
