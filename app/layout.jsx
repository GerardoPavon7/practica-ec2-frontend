import './globals.css';

export const metadata = {
  title: 'Práctica 6 | Frontend en AWS EC2',
  description: 'Frontend de ejemplo desplegado en una máquina virtual EC2.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
