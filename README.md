# Skyline Payments – Landingpage

Statische HTML/CSS-Website ohne Build-Schritt. Einfach den gesamten Ordner auf einen beliebigen Webspace hochladen oder lokal per Static-File-Server öffnen. Kein JavaScript für Inhalt, Layout oder Animationen nötig – die beiden vorhandenen Skripte binden ausschließlich Navigation und Footer ein.

## Struktur

```
/
├── index.html                  Hauptseite
├── assets/
│   ├── images/
│   │   ├── logo/                Logo (hell/dunkel), SVG
│   │   ├── hero/                Hero-Produktbild
│   │   ├── products/            Produktfotos (Terminal, Kartenleser, Dashboards, Service)
│   │   ├── sections/            Freie Sektionsbilder (aktuell ungenutzt)
│   │   └── backgrounds/         Dekorative Hintergrundgrafiken (aktuell ungenutzt)
│   ├── icons/                   Alle UI-Icons, SVG
│   └── fonts/                   Hinweis zu den verwendeten Google Fonts
├── css/
│   ├── style.css                 Basis-Styles (Reset, Layout, Komponenten, Farben)
│   ├── responsive.css            Breakpoints (Mobile/Tablet/Desktop)
│   └── animations.css            Keyframes, Hover-Effekte
├── js/
│   ├── navigation.js             Bindet Header/Navigation ein + Mobile-Menü-Toggle
│   └── footer.js                 Bindet den Footer ein
├── pages/
│   ├── impressum.html            Platzhalter – vor Veröffentlichung mit echten Angaben füllen
│   └── datenschutz.html          Platzhalter – vor Veröffentlichung juristisch prüfen
├── favicon/
│   ├── favicon.ico
│   └── favicon-32x32.png
└── README.md
```

## Hinweise

- **Kein Content-JavaScript**: Die eigentliche Seite (Texte, Bilder, Formular, Hover-Effekte) funktioniert komplett ohne JavaScript. Nur Header und Footer werden zur Laufzeit per `js/navigation.js` bzw. `js/footer.js` in die Platzhalter `<div id="site-header" data-base="./"></div>` / `<div id="site-footer" data-base="./"></div>` eingefügt, damit Nav/Footer nicht in jeder HTML-Datei dupliziert werden müssen. Das `data-base`-Attribut steuert die relativen Pfade (`./` auf der Startseite, `../` unter `pages/`).
- Fällt JavaScript aus, sieht der Besucher die Seite ohne Header/Footer-Leiste, aber Inhalt, Bilder und Formular bleiben vollständig nutzbar.
- Schriftarten (Manrope, Fraunces) werden per Google-Fonts-CDN-Link geladen, keine lokalen Font-Dateien.
- Das Kontaktformular hat kein Backend: es sendet per `mailto:`-Formular-Aktion (`action="mailto:..." enctype="text/plain"`) direkt aus dem Browser, ganz ohne JavaScript.
- `pages/impressum.html` und `pages/datenschutz.html` enthalten Platzhaltertexte (`[Firmenname]`, `[Straße]`, …) – vor dem Livegang durch echte, rechtlich geprüfte Angaben ersetzen.
- Alle Bildpfade sind relativ (`./assets/...` bzw. `../assets/...` aus `pages/`), es werden keine Bilder als Base64 eingebettet und keine externen Platzhalterbilder verwendet.
