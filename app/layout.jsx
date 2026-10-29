import './globals.css';

export const metadata = {
  title: 'Práctica 8 | Azure Static Web Apps',
  description: 'Frontend publicado con Azure Static Web Apps.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
