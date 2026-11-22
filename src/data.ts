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

// ---------- Pages légales (squelettes — contenus À VALIDER VIVÉA) ----------
export interface LegalSection {
  title: string;
  blocks: string[];
}

/** Note d'état affichée en tête des deux pages légales. */
export const LEGAL_NOTE =
  "Squelette de conformité — les éléments entre crochets [à compléter] attendent les informations de Vivéa avant mise en prod.";

export const MENTIONS_LEGALES: LegalSection[] = [
  {
    title: "Éditeur du site",
    blocks: [
      "Vivéa — Organisation de Producteurs de fruits et légumes de La Réunion.",
      "Siège social : [adresse à compléter — site de Pierrefonds, La Réunion].",
      "Téléphone : [à compléter] · Email : [à compléter].",
      "Forme juridique, numéro SIREN/SIRET, RCS, numéro de TVA intracommunautaire : [à compléter].",
    ],
  },
  {
    title: "Directeur de la publication",
    blocks: [
      "Nom et fonction de la personne responsable de la publication : [à compléter].",
    ],
  },
  {
    title: "Hébergement",
    blocks: [
      "Hébergeur du site : [nom à compléter], [adresse], [pays]. Contact : [à compléter].",
    ],
  },
  {
    title: "Propriété intellectuelle",
    blocks: [
      "L'ensemble des contenus du site (textes, illustrations, visuels, logos) est protégé par le droit d'auteur et les droits de propriété intellectuelle. Toute reproduction ou réutilisation, totale ou partielle, sans autorisation écrite préalable est interdite.",
      "Les dénominations TERRACOOP et Gamm Vert ainsi que les visuels associés appartiennent à leurs détenteurs respectifs.",
    ],
  },
];

export const CONFIDENTIALITE: LegalSection[] = [
  {
    title: "Responsable du traitement",
    blocks: [
      "Vivéa — Organisation de Producteurs. Contact pour les questions relatives aux données personnelles : [à compléter].",
    ],
  },
  {
    title: "Données collectées par ce site",
    blocks: [
      "Ce site vitrine ne collecte aucune donnée personnelle : il ne dépose pas de cookies, n'utilise pas de traceurs et n'embarque aucun outil de statistiques d'audience.",
      "Les polices et les images utilisées sont hébergées directement sur le site (aucun échange avec un service tiers au chargement des pages).",
    ],
  },
  {
    title: "Extranet adhérents et liens externes",
    blocks: [
      "Le lien « Espace adhérent » renvoie vers l'extranet de Vivéa (extranet.vivea.re), qui possède ses propres conditions d'utilisation et sa propre politique de confidentialité, applicables à l'identification des adhérents.",
    ],
  },
  {
    title: "Vos droits",
    blocks: [
      "Vous disposez des droits d'accès, de rectification, d'effacement, de limitation et d'opposition prévus par le RGPD, et du droit à la portabilité de vos données.",
      "Vous pouvez les exercer auprès de Vivéa : [contact à compléter]. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr).",
    ],
  },
  {
    title: "Évolution de cette politique",
    blocks: [
      "La présente politique pourra être mise à jour, notamment si un formulaire de contact ou un outil de mesure d'audience venait à être ajouté au site : cette page serait alors modifiée avant la mise en service.",
    ],
  },
];

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
