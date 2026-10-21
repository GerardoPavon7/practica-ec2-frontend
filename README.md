# Práctica 6 AWS: frontend en EC2

Frontend de demostración desarrollado con Next.js 15.5.28. La pantalla incluye un formulario local que confirma su funcionamiento sin enviar ni almacenar datos personales. Se usa esta versión en lugar de Next.js 14 porque la rama 14 disponible en npm tiene avisos de seguridad críticos.

## Ejecutar localmente

```bash
npm ci
npm run dev
```

Abre `http://localhost:3000`.

## Producción

```bash
npm ci
npm run build
pm2 start ecosystem.config.js
pm2 save
```

Nginx usa `deploy/nginx.conf` como proxy inverso en el puerto 80 hacia Next.js en el puerto 3000. La aplicación corre con una instancia PM2 para ajustarse a la memoria limitada de una EC2 t2.micro.

Si se conecta un backend, define `NEXT_PUBLIC_BACKEND_URL` antes de `npm run build` y actualiza el frontend para consumir esa API. Esta práctica no proporcionó una URL pública de backend, por eso el formulario actual funciona como demostración independiente.
