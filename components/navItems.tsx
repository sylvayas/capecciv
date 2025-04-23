"use client"

// Définissez et exportez le type NavItem dans ce fichier
export type NavItem = {
  title: string
  href: string
  submenu?: NavItem[]  // sous-menu optionnel
}

// Exportez ensuite vos données
export const navItems: NavItem[] = [
  {
    title: "ACCUEIL",
    href: "/",
  },
  {
    title: "A PROPOS",
    href: "",
    submenu: [
      {
        title: "Mot du Directeur",
        href: "/a-propos/mot-du-directeur",
      },
      {
        title: "Historique et Objectif",
        href: "/a-propos/historique-objectif",
      },
      {
        title: "Nos Activités",
        href: "/a-propos/nos-activites",
      },
      {
        title: "Organigramme",
        href: "/a-propos/organigramme",
      },
      {
        title: "La CAPEC en Chiffres",
        href: "/a-propos/capec-en-chiffres",
      },
      {
        title: "Quelques Références",
        href: "/a-propos/references",
      },
    ],
  },
  {
    title: "RESSOURCES",
    href: "",
    submenu: [
      {
        title: "Recherches",
        href: "/ressources/recherches",
      },
      {
        title: "Etudes",
        href: "/ressources/etudes",
      },
    ],
  },
  {
    title: "PUBLICATION",
    href: "/publication",
  },
  {
    title: "NOS REALISATIONS",
    href: "",
    submenu: [
      {
        title: "PROGRAMME D'ACTIVITES",
        href: "",
      },
      {
        title: "RAPPORT D'ACTIVITES",
        href: "",
      },
      {
        title: "CR d'ACTIVITES",
        href: "",
      },
      {
        title: "INTERVIEW / QUESTION",
        href: "",
      },
      {
        title: "ACTUALITES",
        href: "",
      },
    ],
  },
  {
    title: "MEDIAS",
    href: "",
    submenu: [
      {
        title: "Photothèque",
        href: "/medias/phototheque",
      },
      {
        title: "Vidéothèque",
        href: "/medias/videotheque",
      },
    ],
  },
  {
    title: "CHERCHEURS",
    href: "/chercheur",
  },
]