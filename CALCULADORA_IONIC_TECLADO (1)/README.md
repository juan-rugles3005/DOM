# GorinBross — Calculadora (Ionic + Angular)

Proyecto Angular standalone convertido a **Ionic Angular**, listo para ejecutarse en el navegador y para empaquetarse como app móvil (Android/iOS) con Capacitor.

## Qué cambió respecto al proyecto original

- Se agregaron las dependencias `@ionic/angular`, `ionicons` y los paquetes de `@capacitor/*`.
- Se quitó el SSR (Angular Universal) porque no es necesario para una app Ionic/móvil.
- `app.config.ts` ahora incluye `provideIonicAngular()`.
- `app.html` envuelve todo en `<ion-app>`.
- El componente `calculadora` usa componentes standalone de Ionic (`ion-header`, `ion-content`, `ion-item`, `ion-input`, `ion-select`, `ion-button`, etc.) en vez de HTML plano. **La lógica (operar, historial, borrarHistorial) no cambió.**
- Se agregó `capacitor.config.ts` para poder generar los proyectos nativos de Android/iOS.

## Cómo correrlo

**Opción A — sin instalar nada extra (recomendada):**
```bash
npm install
npm start
```
Abre `http://localhost:4200`.

**Opción B — usando el CLI de Ionic:**
```bash
npm install -g @ionic/cli
npm install
ionic serve
```
También abre en `http://localhost:4200`.

Ambas opciones ejecutan lo mismo por dentro (`ng serve`). Usa la que te resulte más cómoda; no necesitas correr las dos.

## Cómo convertirlo en app móvil (opcional)

```bash
npm run build
npx cap add android   # o: npx cap add ios
npx cap sync
npx cap open android  # abre Android Studio
```

(Para iOS necesitas macOS con Xcode instalado.)
