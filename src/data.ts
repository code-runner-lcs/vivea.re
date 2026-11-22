// Contenus éditoriaux centralisés — à faire valider par Vivéa avant mise en prod.

/** Éditorial : nombre de producteurs (unique source — hero, footer, meta). */
export const NB_PRODUCTEURS = 160;

export const NAV_ITEMS = [
  { href: "/#op", label: "L'OP Vivéa" },
  { href: "/#produits", label: "Nos produits" },
  { href: "/#terroir", label: "Producteurs" },
  { href: "/#bio", label: "La gamme bio" },
  { href: "/terracoop/", label: "Terracoop" },
];

export interface Mission {
  num: string;
  title: string;
  text: string;
}

export const MISSIONS: Mission[] = [
  {
    num: "01",
    title: "Mettre en marché",
    text: "Concentrer la production des adhérents, structurer les volumes et donner accès à des débouchés réguliers, de la grande distribution aux transformateurs.",
  },
  {
    num: "02",
    title: "Garantir la qualité",
    text: "Définir et suivre des cahiers des charges, du champ à la mise en rayon, avec la traçabilité des lots en ligne de mire.",
  },
  {
    num: "03",
    title: "Accompagner les producteurs",
    text: "Conseil technique, appui administratif et animation du collectif : l'OP est au service de ses adhérents au quotidien.",
  },
];

export interface Produit {
  name: string;
  tag: string;
  note?: string;
  accent?: boolean;
  img: string;
  width: number;
  height: number;
}

export const PRODUITS: Produit[] = [
  {
    name: "Ananas Victoria",
    tag: "Emblématique",
    note: "La filière phare de l'OP, réputée au-delà de l'océan Indien.",
    accent: true,
    img: "/img/produits/ananas-victoria.webp",
    width: 800,
    height: 600,
  },
  {
    name: "Letchis",
    tag: "Fruit",
    note: "La campagne de l'été austral.",
    img: "/img/produits/letchis.webp",
    width: 800,
    height: 600,
  },
  {
    name: "Mangue",
    tag: "Fruit",
    note: "Plusieurs variétés au fil de la saison.",
    img: "/img/produits/mangue.webp",
    width: 800,
    height: 792,
  },
  { name: "Banane", tag: "Fruit", img: "/img/produits/banane.webp", width: 800, height: 532 },
  { name: "Avocat", tag: "Fruit", img: "/img/produits/avocat.webp", width: 800, height: 703 },
  { name: "Agrumes", tag: "Fruits", img: "/img/produits/agrumes.webp", width: 800, height: 600 },
  {
    name: "Chouchou",
    tag: "Légume",
    note: "Le légume des Hauts, star des caris.",
    img: "/img/produits/chouchou.webp",
    width: 800,
    height: 1067,
  },
  {
    name: "Fruits de la passion",
    tag: "Fruit",
    img: "/img/produits/fruits-de-la-passion.webp",
    width: 800,
    height: 666,
  },
  { name: "Papaye", tag: "Fruit", img: "/img/produits/papaye.webp", width: 800, height: 1069 },
  {
    name: "Vanille",
    tag: "Épice",
    note: "Cultivée dans le Sud sauvage.",
    img: "/img/produits/vanille.webp",
    width: 800,
    height: 533,
  },
  {
    name: "Tomate & légumes",
    tag: "Légumes",
    note: "De saison, pour le marché local.",
    img: "/img/produits/tomates-legumes.webp",
    width: 800,
    height: 515,
  },
  {
    name: "Brèdes & herbes",
    tag: "Légumes",
    img: "/img/produits/bredes-herbes.webp",
    width: 800,
    height: 591,
  },
];

// ---------- Page Espaces (Pro / Adhérent) ----------
export interface TabDef {
  id: "pro" | "adherent";
  label: string;
}

export const ESPACE_TABS: TabDef[] = [
  { id: "pro", label: "Espace pro" },
  { id: "adherent", label: "Espace adhérent" },
];

export const EXTRANET_URL = "https://extranet.vivea.re/extranet/";

export const PRO_ITEMS: { title: string; detail: string }[] = [
  {
    title: "Une offre riche",
    detail: "Des fruits et des légumes de qualité, une gamme complète et diversifiée pour approvisionner vos rayons.",
  },
  {
    title: "Un savoir-faire éprouvé",
    detail: "Une réponse réactive et adaptée à vos besoins d'approvisionnement.",
  },
  {
    title: "Un accueil professionnel",
    detail: "Sur notre site de Pierrefonds, un espace de vente en gros.",
  },
  {
    title: "Des équipements logistiques efficaces",
    detail: "Une plateforme de préparation et d'expédition de 2 700 m².",
  },
  {
    title: "Un service performant",
    detail: "Une équipe de préparateurs de commande opérationnelle du lundi au samedi, 6 véhicules de livraisons et 3 prestataires à votre service.",
  },
];

// ---------- Liens du footer (source unique, une colonne = un groupe) ----------
export interface FooterLink {
  href: string;
  label: string;
}

export const FOOTER_LINKS: { explorer: FooterLink[]; espaces: FooterLink[]; informer: FooterLink[] } = {
  explorer: [
    { href: "/#op", label: "L'OP Vivéa" },
    { href: "/#produits", label: "Nos produits" },
    { href: "/#terroir", label: "Où sont les producteurs ?" },
    { href: "/#bio", label: "La gamme bio" },
  ],
  espaces: [
    { href: "/espaces/", label: "Espace pro" },
    { href: "/espaces/adherent/", label: "Espace adhérent" },
    { href: "/terracoop/", label: "Terracoop" },
  ],
  informer: [
    { href: "#", label: "Actus Vivéa" },
    { href: "#contact", label: "Contactez-nous" },
  ],
};

// ---------- Page Terracoop ----------
// Textes repris verbatim de la page « Terracoop » du site vivéa.
export const TERRACOOP_TEXT: string[] = [
  "La Coopérative Agricole TERRACOOP est née du regroupement de deux coopératives : la Coopérative Vivéa et la Coopérative des Avirons.",
  "Les deux structures partagent la même vision et ambition pour le monde agricole réunionnais. Ce rapprochement a pour objectif de développer les services pour les producteurs adhérents et améliorer l'offre de produits pour les consommateurs.",
  "Terracoop développe des métiers d'approvisionnement des exploitations (agroéquipement et autres), de distribution de produits de jardinerie (Gamm Vert) et de distribution de fruits et légumes à travers l'enseigne Terracoop.",
  "Démarches Qualité, développement de l'offre, certification des exploitations, développement des circuits de distribution de proximité, le projet Terracoop porte une ambition pour le territoire Réunionnais.",
];

export const TERRACOOP_NOTE =
  "Le groupement de producteurs de fruits et légumes continue de porter le nom de Vivéa.";

export interface Zone {
  name: string;
  communes: string;
}

export const ZONES: Zone[] = [
  { name: "Le Nord", communes: "Saint-Denis · Sainte-Suzanne · Saint-André" },
  { name: "L'Ouest", communes: "Le Port · Saint-Paul · Saint-Leu" },
  { name: "Le Sud", communes: "Saint-Pierre · Saint-Louis · Saint-Joseph" },
  { name: "L'Est", communes: "Saint-Benoît · Bras-Panon · Sainte-Rose" },
  { name: "Les Hauts", communes: "Cilaos · Hell-Bourg · La Plaine-des-Cafres" },
];
