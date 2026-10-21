import './globals.css';

export const metadata = {
  title: 'Nexo | Frontend en AWS EC2',
  description: 'Frontend de demostración desplegado en una instancia EC2 con Nginx y PM2.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
