# vivea.re

Re-développement SolidJS du site web de **Vivéa** — Organisation de Producteurs de La Réunion.

Reproduction fidèle du design (palette crème / vert profond / terracotta, typographies Fraunces + Instrument Sans), avec une architecture par composant : chaque section a son `.tsx` et son `.css` dédiés.

## Stack

- [SolidJS](https://www.solidjs.com/) + TypeScript
- Vite (build + dev server)
- Routing hash maison, sans dépendance : `#/` accueil · `#/espaces` · `#/espaces/adherent` · `#/terracoop`

## Structure

```
src/
├── index.tsx               Entrée (montage + styles de base)
├── App.tsx                 Routage hash + assemblage des pages
├── data.ts                 Contenus éditoriaux centralisés
├── styles/
│   └── base.css            Tokens, reset, utilitaires, boutons, reveal
└── components/
    ├── Header.tsx/.css     ├── Hero.tsx/.css      ├── Missions.tsx/.css
    ├── Produits.tsx/.css   ├── Terroir.tsx/.css   ├── BioBand.tsx/.css
    ├── CtaPro.tsx/.css     ├── Espaces.tsx/.css
    ├── Terracoop.tsx/.css  └── Footer.tsx/.css
```

## Démarrage

```bash
npm install
npm run dev       # serveur de dev
npm run build     # build de production dans dist/
npm run preview   # sert le build
npm run typecheck # tsc --noEmit
```

## Statut

Textes et visuels à valider par Vivéa avant mise en prod. Coordonnées de contact à insérer dans le footer.
