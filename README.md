# 🎉 Invito digitale per il 18° di Gioele

> **Versione:** `1.0.0` ✨

Invito digitale interattivo e responsive realizzato per il diciottesimo compleanno di Gioele, in programma il **17 settembre 2026 alle ore 20:30** presso **Casa Modò – Eventi in Stile**.

Il progetto è pensato principalmente per smartphone e riproduce l'apertura di una busta elegante: dopo il tocco, il sigillo scompare, la linguetta si apre e il biglietto sale fino a occupare lo schermo.

## ✨ Funzionalità

- ✉️ Apertura animata della busta e del sigillo.
- 📱 Biglietto responsive ottimizzato per smartphone.
- 💎 Stile bianco, argento e glitter.
- ✨ Effetti luminosi animati sullo sfondo.
- 📍 Collegamento diretto alla posizione su Google Maps.
- 💬 Conferma tramite WhatsApp con messaggio precompilato.
- ♿ Supporto all'impostazione `prefers-reduced-motion`.

## 🛠️ Tecnologie

- React 19
- Vite 8
- CSS
- Oxlint
- Fontsource:
  - Cormorant Garamond
  - Great Vibes
  - Montserrat

## 🚀 Avvio in locale

### 📋 Requisiti

- Node.js compatibile con Vite 8
- npm

### 📦 Installazione

```bash
npm install
```

### ▶️ Avvio del progetto

```bash
npm run dev
```

Vite mostrerà nel terminale l'indirizzo locale da aprire nel browser.

## ⌨️ Comandi disponibili

```bash
npm run dev
```

Avvia il server di sviluppo.

```bash
npm run build
```

Crea la versione ottimizzata del progetto nella cartella `dist`.

```bash
npm run preview
```

Avvia un'anteprima locale della versione compilata.

```bash
npm run lint
```

Controlla la qualità del codice.

## 📁 Struttura principale

```text
src/
├── assets/images/              # Sfondi e texture glitter
├── components/
│   ├── BackgroundGlints/       # Brillantini animati dello sfondo
│   ├── Envelope/               # Busta, sigillo e animazione di apertura
│   └── InvitationCard/         # Contenuto e collegamenti dell'invito
├── App.jsx                     # Scena principale e stato di apertura
├── App.css                     # Sfondo e layout generale
├── index.css                   # Stili globali e font
└── main.jsx                    # Punto di ingresso React
```

## 📱 Controlli effettuati

L'interfaccia è stata verificata sui seguenti formati:

- iPhone: 390 × 844 px
- Android: 360 × 800 px
- Smartphone compatto: 320 × 568 px

Prima di creare una nuova versione è consigliato eseguire:

```bash
npm run lint
npm run build
```

## ✅ Stato del progetto

