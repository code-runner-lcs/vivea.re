# vivea.re

Site vitrine de **Vivéa** — Organisation de Producteurs de fruits et légumes de La Réunion.

Architecture : **Astro 7 (SSG)** + îles **SolidJS**. Chaque page est pré-générée en **HTML statique** (SEO complet, contenu lisible sans JavaScript) ; seule l'interactivité (menu burger, onglets de l'espace) hydrate de petites îles Solid. Aucun cookie, aucun traceur.

## Stack

- **Astro 7** — output statique, routing par fichiers (`src/pages/`), `@astrojs/sitemap`
- **SolidJS 1.9** — îles hydratées : `Header` (menu burger), `Espaces` (onglets ARIA APG) ; les autres composants sont rendus côté build **sans JS**
- **TypeScript strict** via `astro check` (couvre `.astro` et `.ts/.tsx`)
- **Polices auto-hébergées** (fontsource variable) : Fraunces + Instrument Sans — aucun appel Google Fonts (RGPD)
- **Images WebP** pré-optimisées par `scripts/optimize-images.mjs` (sharp)
- **Node ≥ 22.23.4** — version pilotée par `.nvmrc` et `engines`

## Structure

```
src/
├── layouts/Base.astro          head commun (SEO/OG/canonical), fonts, skip-link, reveal
├── pages/                      1 fichier = 1 URL statique
│   ├── index.astro             accueil (hero → missions → produits → terroir → bio → cta-pro)
│   ├── espaces/index.astro     espace pro (île Espaces, onglet initial « pro »)
│   ├── espaces/adherent.astro  espace adhérent (même île, onglet initial « adherent »)
│   ├── terracoop.astro
│   ├── mentions-legales.astro  (squelettes RGPD — contenus dans data.ts)
│   ├── confidentialite.astro
│   └── 404.astro
├── components/                 un `.tsx` + un `.css` par section (convention)
├── data.ts                     contenus éditoriaux centralisés (nav, produits, footer, légal)
└── styles/base.css             tokens, reset, utilitaires, kit boutons, reveal au scroll
```

`scripts/optimize-images.mjs` — one-shot : jpg sources → webp 800px q80 (sharp), à relancer si un visuel change.

## Commandes

```bash
npm ci                # installation (reproduction exacte de package-lock.json)
npm run dev           # serveur de dev (HMR)
npm run build         # génération statique dans dist/
npm run preview       # sert dist/ en local
npm run check         # typecheck astro (.astro + .ts/.tsx)
npm run lint          # ESLint (js/ts ; les .astro restent sous astro check)
npm run format        # Prettier — write
npm run format:check  # Prettier — CI mode
node scripts/optimize-images.mjs   # one-shot conversion des visuels
```

## Routage & ancres

Pages réelles (multi-pages, navigation native) : `/`, `/espaces/` et `/espaces/adherent/`, `/terracoop/`, `/mentions-legales/`, `/confidentialite/`, 404.

- Ancres de l'accueil joignables depuis **toute** page : `/#op`, `/#produits`, `/#terroir`, `/#bio` (offset géré par `--header-h`).
- `#contact` pointe le footer, présent sur chaque page.
- Les onglets de l'espace gardent l'URL en phase (`history.replaceState`).

## CI

`.github/workflows/ci.yml` — sur chaque push/PR : `npm ci`, ESLint, Prettier, `astro check`, build de production (Node piloté par `.nvmrc`).

Dette nommée : **pas de tests unitaires** à ce stade — le site n'a plus de logique testable (routeur supprimé) ; lint + check + build jouent ce rôle. À rouvrir si un formulaire ou des filtres produits arrivent.

## Statut & checklist avant mise en prod

Éléments en attente **d'informations côté Vivéa** (hors code) :

- [ ] `EXTRANET_URL` (`src/data.ts`) — vérifier la cible depuis un accès extérieur (`curl -I https://extranet.vivea.re/extranet/`)
- [ ] **Coordonnées de contact** à insérer dans le footer (placeholders visibles)
- [ ] **Textes et visuels** à valider (squelettes légaux balisés « [à compléter] » dans `src/data.ts`)
- [ ] **Image OG** validée (composite initial : `public/og-vivea.jpg`)
- [ ] Retirer la note « Maquette de redesign — textes et visuels à valider » du footer une fois validé
- [ ] Passe **Lighthouse** sur un build de prod (visées : perf / a11y / SEO ≥ 95)
- [ ] Choisir et brancher l'**hébergement statique** de `dist/` (404 déjà produite)
