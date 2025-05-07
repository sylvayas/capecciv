
"use client";
import Image from "next/image";
import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Search } from "lucide-react";

// Définir une interface pour le type des publications
interface Publication {
  title: string;
  author: string;
  authorLink: string;
  pdfLink: string;
}

// Définir les types possibles pour selectedType
type PublicationType =
  | "Politique Économique et Développement (PED)"
  | "Bulletin de Politique Économique et Développement (BUPED)"
  | "Lettre de Politique Économique (LPE)"
  | "Publications dans les revues spécialisées (PRS)";

// Définir le type pour availableYearsByType et publicationsByType
interface YearsByType {
  [key: string]: string[];
}

interface PublicationsByType {
  [key: string]: { [year: string]: Publication[] };
}

export default function PublicationsPage() {
  const [selectedType, setSelectedType] = useState<PublicationType>("Politique Économique et Développement (PED)");
  const [selectedYear, setSelectedYear] = useState<string>("Sélectionnez l’année");
  const [showPublications, setShowPublications] = useState<boolean>(false);
  const [currentPublications, setCurrentPublications] = useState<Publication[]>([]);

  // Liste des années disponibles pour chaque type de publication
  const availableYearsByType: YearsByType = {
    "Politique Économique et Développement (PED)": [
      "2005",
      "2006",
      "2008",
      "2012",
      "2013",
      "2014",
      "2015",
      "2017",
    ],
    "Bulletin de Politique Économique et Développement (BUPED)": [
      "2003",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2018",
    ],
    "Lettre de Politique Économique (LPE)": [
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2018",
      "2020",
    ],
    "Publications dans les revues spécialisées (PRS)": [],
  };

  // Données des publications
  const publications2015: Publication[] = [
    {
      title: "EFFETS REELS DE LA FUITE DES CAPITAUX EN COTE D’IVOIRE",
      author: "Prof. Loesse Jacques ESSO, CAPEC, Côte d’Ivoire",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_Prof._ESSO_2015_Etude.pdf",
    },
    {
      title: "ANALYSE DE LA PERFORMANCE DES EXPLOITATIONS DE CACAO DE LA COTE D’IVOIRE : VERS UNE DIVERSIFICATION DE L’OFFRE IVOIRIENNE",
      author: "Dr FE Doukoure, Chercheur Junior CAPEC, Côte d’Ivoire",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_2015_FE.pdf",
    },
    {
      title: "DETERMINANTS DE LA DISPOSITION DES MANAGERS A FORMALISER LES ENTREPRISES DU SECTEUR INFORMEL EN COTE IVOIRE",
      author: "TRAORE Nohoua",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_2015_TRAORE_NOHOUA.pdf",
    },
    {
      title: "SOUTENABILITE DE LA DETTE PUBLIQUE DE COTE D’IVOIRE: LES IMPLICATIONS DE POLITIQUE FISCALE",
      author: "Nahoua YEO Enseignant-chercheur, Université Félix Houphouët-Boigny",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_YEO_2014_Souty_nability_budgy_taire.pdf",
    },
    {
      title: "IMPOSITION ET PERFORMANCE DES PETITES ET MOYENNES ENTREPRISES (PME) EN COTE D’IVOIRE",
      author: "Prof. BALLO Zié, CAPEC, Côte d’Ivoire",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/imposition_et_performance_des_PME_21_Avril_3_PED_2014.pdf",
    },
    {
      title: "DECENTRALISATION ET INCITATIONS FISCALES EN COTE D’IVOIRE",
      author: "Prof. BALLO Zié, CAPEC, Côte d’Ivoire",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_Prof_Ballo_2015_Etude_DECENTRALISATION.pdf",
    },
    {
      title: "ANALYSE DU SENTIER DE CROISSANCE VERS L’EMERGENCE ECONOMIQUE DES PAYS AFRICAINS : QUELLES LECONS PEUT-ON TIRER DE L’ORGANISATION INDUSTRIELLE DU JAPON ?",
      author: "Prof. AHOURE Alban A. E.",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_Prof._AHOURE_Etude_2015.pdf",
    },
  ];

  const publications2005: Publication[] = [
    {
      title: "INVESTISSEMENTS DIRECTS ETRANGERS ET CROISSANCE ECONOMIQUE EN COTE D'IVOIRE",
      author: "POKOU KOFFI",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED130c.pdf",
    },
    {
      title: "FINANCEMENT ET INVESTISSEMENT : LE CAS DE LA COTE D'IVOIRE",
      author: "KAHO Arsène R. & BROU Bosson J.M.",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED129c.pdf",
    },
    {
      title: "CRIMINALITE ET CROISSANCE ECONOMIQUE : UNE APPROCHE ECONOMETRIQUE DU MODELE IVOIRIEN",
      author: "OUATTARA Wautabouna & WAPO Hilaire (Consultants)",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED128c.pdf",
    },
    {
      title: "ETUDE SOCIO-ECONOMIQUE DE LA FILIERE DU MANIOC A TCHIMOU-ASSEKRO ET DANS LES VILLAGES ENVIRONNANTS (BOUAKE - COTE D'IVOIRE)",
      author: "MANSO Jean Marie Mangoueyi (Consultant)",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED127c.pdf",
    },
    {
      title: "CAPITAL SOCIAL ET CROISSANCE ECONOMIQUE EN PERIODE POST-CONFLIT : CAS DE LA COTE D'IVOIRE",
      author: "TCHETCHE N'GUESSAN",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE126.pdf",
    },
    {
      title: "CONTRIBUTIONS DES DEPENSES PUBLIQUES ET PRIVEES DE CAPITAL A LA CROISSANCE ECONOMIQUE EN COTE D'IVOIRE",
      author: "NGARESSEUM Deuro Kan Toloum",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED124.pdf",
    },
    {
      title: "ENJEUX DES REFORMES EN COURS DE LA BCEAO ET DE L'UEMOA",
      author: "BAMBA N'GALADJO LAMBERT",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED123.pdf",
    },
    {
      title: "INSTABILITE MACROECONOMIQUE, ACCUMULATION DE CAPITAL ET CROISSANCE : CAS DE LA COTE D'IVOIRE 1970-2002",
      author: "NGARESSEUM Deuro Kan Toloum",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED122.pdf",
    },
    {
      title: "DEFICIT BUDGETAIRE, EPARGNE NATIONALE ET PRINCIPE D'EQUIVALENCE RICARDIENNE EN COTE D'IVOIRE",
      author: "KACOU Kouamela",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED120.pdf",
    },
    {
      title: "STRUCTURE ET EFFICACITE DU SECTEUR FINANCIER IVOIRIEN",
      author: "BAMBA N'GALADJO LAMBERT",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED119.pdf",
    },
    {
      title: "EFFICACITE MACROECONOMIQUE DU CREDIT BANCAIRE EN COTE D'IVOIRE",
      author: "KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED118.pdf",
    },
    {
      title: "INVESTISSEMENTS DIRECTS ETRANGERS : DETERMINANTS ET INFLUENCE SUR LA CROISSANCE ECONOMIQUE",
      author: "ESSO LOESSE JACQUES",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED117.pdf",
    },
    {
      title: "LE FINANCEMENT PUBLIC EN COTE D'IVOIRE : CROWDING IN OU CROWDING OUT ?",
      author: "BAMBA N'GALADJO LAMBERT",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE115.pdf",
    },
    {
      title: "RELATION D'EQUILIBRE DE LONG TERME ET CAUSALITE ENTRE LE DEFICIT BUDGETAIRE, LA PRESSION FISCALE, LE FINANCEMENT EXTERIEUR ET LE NIVEAU DE PRODUITS EN COTE D'IVOIRE",
      author: "KACOU Kouamela",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED114.pdf",
    },
    {
      title: "DETTE EXTERIEURE ET CROISSANCE ECONOMIQUE : CAS DE LA COTE D'IVOIRE",
      author: "NGARESSEUM Deuro Kan Toloum",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED113.pdf",
    },
    {
      title: "RELATION ENTRE INVESTISSEMENT PUBLIC ET INVESTISSEMENT PRIVE EN COTE D'IVOIRE : CONTRIBUTION A L'ANALYSE EMPIRIQUE D'UN LIEN AMBIGU",
      author: "KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED112.pdf",
    },
    {
      title: "DEVELOPPEMENT FINANCIER, CROISSANCE ECONOMIQUE ET INEGALITES DE REVENUS ENTRE PAYS DE L'UEMOA",
      author: "ESSO LOESSE JACQUES",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED111.pdf",
    },
  ];

  const publications2006: Publication[] = [
    {
      title: "AIDE ET CROISSANCE ECONOMIQUE EN COTE D'IVOIRE : UNE ANALYSE PAR SIMULATION EN PERIODE POST-CONFLIT",
      author: "ESSO LOESSE JACQUES",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED134.pdf",
    },
    {
      title: "INVESTISSEMENT PUBLIC, AMELIORATION DU NIVEAU DE VIE ET CROISSANCE EN COTE D'IVOIRE : UNE ANALYSE STRUCTURELLE CLIOMETRIQUE",
      author: "KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED133.pdf",
    },
    {
      title: "ECHANGES COMMERCIAUX UE-CEDEAO, RECETTES FISCALES DE LA COTE D'IVOIRE ET GOUVERNANCE",
      author: "ESSO LOESSE JACQUES",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED132.pdf",
    },
    {
      title: "IMPACT DES DEPENSES PUBLIQUES SUR LE NIVEAU DE VIE EN COTE D'IVOIRE : UNE ANALYSE PAR LES MODELES AUTOREGRESSIFS A SEUILS ENDOGENES",
      author: "KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED131.pdf",
    },
  ];

  const publications2008: Publication[] = [
    {
      title: "ANALYSE DE L'EFFICACITE ECONOMIQUE EN COTE D'IVOIRE",
      author: "Wautabouna OUATTARA - Consultant",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PEDN11.pdf",
    },
    {
      title: "DYNAMIQUE DES RECETTES DU CAFE ET DU CACAO EN COTE D'IVOIRE",
      author: "Prof. ESSO Loesse Jacques",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PEDN_10.pdf",
    },
    {
      title: "ANALYSE RETROSPECTIVE DE L'EQUITE SOCIALE ET ESQUISSE D'IMAGES A LONG TERME DE LA SOCIETE IVOIRIENNE",
      author: "Prof. KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PEDN_09.pdf",
    },
    {
      title: "EPARGNE, INVESTISSEMENT ET CROISSANCE ECONOMIQUE EN COTE D'IVOIRE ET CONSEQUENCES POUR L'ACTION DES POUVOIRS PUBLICS",
      author: "Prof. ESSO Loesse Jacques",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PEDN_08.pdf",
    },
    {
      title: "LA CRISE DES SUBPRIMES AUX ETATS-UNIS ET LES ECONOMIES DES PAYS DE L'UEMOA : UNE EVALUATION ECONOMETRIQUE A PARTIR DE LA BRVM",
      author: "Dr. AKA Brou Emmanuel",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PEDN_07.pdf",
    },
    {
      title: "STRUCTURE DU MARCHE NATIONAL DU CAFE-CACAO ET PRIX AU PRODUCTEUR",
      author: "Dr. MALAN Béïla Benoît",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PEDN_06.pdf",
    },
    {
      title: "EVALUATION DES EFFETS DE LA FISCALITE INDIRECTE SUR LES PRIX ET LE BIEN-ETRE DES POPULATIONS EN COTE D'IVOIRE",
      author: "Dr. YEO Nahoua",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PEDN_05.pdf",
    },
    {
      title: "DECENTRALISATION EN COTE D'IVOIRE : UN BILAN DU FONCTIONNEMENT DES CONSEILS GENERAUX ET DISTRICTS",
      author: "Prof. BALLO Zié",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PEDN_04.pdf",
    },
    {
      title: "BILAN DIAGNOSTIC DE L'INDUSTRIE IVOIRIENNE",
      author: "M. TANO A. Paulin",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PEDN_03.pdf",
    },
    {
      title: "ANALYSE DE LA CONSOMMATION D'ENERGIE ET GESTION DURABLE EN COTE D'IVOIRE",
      author: "M. DJEZOU Wadjamsse Beaudelaire",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PEDN_02.pdf",
    },
    {
      title: "LA DIMENSION SOCIALE DU DEVELOPPEMENT DURABLE EN COTE D'IVOIRE",
      author: "Prof. KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PEDN_01_08.pdf",
    },
  ];

  const publications2012: Publication[] = [
    {
      title: "APE : UNE OPPORTUNITE POUR LA COTE D'IVOIRE ?",
      author: "Dr. SOBIA Assata, Dr. YOLI BI SANI Martin, M. KOUAME Kouad",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_Dr_SOBIA_Dr_YOLI_APE_une_opportunity_pour_la_CI_11.pdf",
    },
    {
      title: "STABILISATION DES PRIX DU CAFE ET DU CACAO EN COTE D'IVOIRE",
      author: "Dr. MALAN Béïla Benoît, Chercheur Associé CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_Dr_MALAN_La_stabilisation_des_prix_du_cacao_et_du_cafy_menace_19.pdf",
    },
    {
      title: "SYSTEME THERMIQUE ET EQUILIBRE DU SECTEUR DE L'ENERGIE EN COTE D'IVOIRE",
      author: "Dr. DJEZOU Wadjamsse Beaudelaire & DJA N'GUESSAN Ferdinand",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_DJEZOU_DJA_Systy_me_thermique_16.pdf",
    },
    {
      title: "CLIMAT DES AFFAIRES ET PERFORMANCE DES ENTREPRISES IVOIRIENNES",
      author: "N'GOTTA Celaine & BECHO Isabelle, Chercheurs Associés",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BECHO_CELAINE_PED_Climat_des_affaires_et_performance_des_productive_14.pdf",
    },
    {
      title: "INVESTIGATION EMPIRIQUE DU RECOURS AUX CONSULTATIONS PRENATALES EN COTE D'IVOIRE",
      author: "Dr. TIEHI Tito Nestor, Chercheur Associé CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_15_2012_Dr_Tito_TIEHI.pdf",
    },
  ];

  const publications2013: Publication[] = [
    {
      title: "CRIME, SELF PROTECTION AND BUSINESS GROWTH IN COTE D'IVOIRE",
      author: "ASSI J. C. KIMOU AND KWABENA GYIMAH-BREMPONG",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_2013_KIMOU.pdf",
    },
    {
      title: "ESSAI D’ÉVALUATION DE L’IMPACT DE LA CRÉATION DE L’UEMOA SUR LE NIVEAU DE DÉVELOPPEMENT DES PAYS MEMBRES",
      author: "FE DOUKOURE CHARLES, ENSEA d’Abidjan et CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_Dr_FE_ESSAI_D_EVALUATION_DE_L_IMPACT_DE_LA_CREA_DE_L_UEMOA.pdf",
    },
  ];

  const publications2014: Publication[] = [
    {
      title: "ANALYSE DES PERFORMANCES ECONOMIQUE ET TECHNIQUE DES FIRMES EN COTE D'IVOIRE",
      author: "N’GOTTA K. Celaine",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_2014_CELAINE_CRDI.pdf",
    },
    {
      title: "INEGALITES DE GENRE ET ENTREPRENEURIAT EN COTE D'IVOIRE",
      author: "N’DEDE Bosoma Florence epse DAGNAN, Université Félix Houphouët Boigny",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_2014_NDEDE_final_PED.pdf",
    },
    {
      title: "MAIN D’OEUVRE FAMILIALE DANS LES PME IVOIRIENNES : LOGIQUES SOCIALES ET ENJEUX",
      author: "Jean-Louis LOGNON, Sociologue, Université Félix Houphouët Boigny",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_2014_LOGNON.pdf",
    },
    {
      title: "EFFET DES INVESTISSEMENTS EN TIC ET EN CAPITAL HUMAIN SUR LA PRODUCTIVITE DU TRAVAIL AU SEIN DES ENTREPRISES EN COTE D'IVOIRE : EVIDENCE EMPIRIQUE SUR DONNEES DE PANEL",
      author: "KOUADIO Kouassi B., Doctorant CAPEC-UFR SEG",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_2014_KOUADIO_B.pdf",
    },
    {
      title: "MACROECONOMIC AND SOCIAL IMPACTS OF ECONOMIC PARTNERSHIP AGREEMENTS ON IVORIAN ECONOMY: A NEW ASSESSMENT",
      author: "FE DOUKOURE Charles, ENSEA d'Abidjan et CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_2014_FE_DOUKOURE.pdf",
    },
    {
      title: "LES ENTREPRISES FAMILIALES IVOIRIENNES SONT-ELLES PERFORMANTES QUE LES ENTREPRISES NON FAMILIALES ?",
      author: "BALLO Zié, Chercheur à la CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_BALLO_2014_ENTREPRISES_FAMILIALES.pdf",
    },
    {
      title: "IMPOSITION ET PERFORMANCE DES PETITES ET MOYENNES ENTREPRISES (PME) EN COTE D'IVOIRE",
      author: "BALLO Zié, Chercheur à la CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_BALLO_2014_IMPOSITION.pdf",
    },
  ];

  const publications2017: Publication[] = [
    {
      title: "IMPACT DU PROJET DE CONSEIL AGRICOLE SUR LES PERFORMANCES DES PRODUCTEURS D’ANACARDE DE COTE D’IVOIRE",
      author: "Dr FE Doukoure, Chercheur Junior CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/PED_Dr_FE_2017_Etude.pdf",
    },
  ];

  const bupedPublications2003: Publication[] = [
    {
      title: "SITUATION MACROECONOMIQUE DE LA COTE D'IVOIRE AU REGARD DES CRITERES DE CONVERGENCE DE L'UEMOA",
      author: "BAMBA N'GALADJO Lambert",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPEC_19_SEPT_2.pdf",
    },
    {
      title: "PRINCIPALES CARACTERISTIQUES DE L'EVOLUTION ECONOMIQUE DE LA COTE D'IVOIRE AU COURS DE L'ANNEE 2002",
      author: "BAMBA N'GALADJO Lambert",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPEC_19_SEPT_1.pdf",
    },
    {
      title: "L'ADAPTATION DES POLITIQUES COMMERCIALES DE LA COTE D'IVOIRE A L'ACCORD DE L'OMC",
      author: "BAMBA N'GALADJO Lambert",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPEC_OMC.pdf",
    },
    {
      title: "L'ECONOMIE SOCIALE DE MARCHE (ESM)",
      author: "BAMBA N'GALADJO Lambert",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/buped_ESM_CORRIGEE_08_DEC_2003.pdf",
    },
    {
      title: "FRANC CFA ET EURO",
      author: "BAMBA N'GALADJO Lambert",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/buped_franc_cfa_euro.pdf",
    },
  ];

  const bupedPublications2005: Publication[] = [
    {
      title: "DEVELOPPEMENT FINANCIER, CROISSANCE ECONOMIQUE ET INEGALITE DE REVENUS ENTRE PAYS DE L'UEMOA",
      author: "ESSO Loesse Jacques",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED61.pdf",
    },
    {
      title: "RELATION ENTRE INVESTISSEMENT PUBLIC ET INVESTISSEMENT PRIVE EN COTE D'IVOIRE : CONTRIBUTION A L'ANALYSE EMPIRIQUE D'UN LIEN AMBIGU",
      author: "KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/RELATION_ENTRE_INVESTISSEMENT_PUBLIC_ET_INVESTISSEMENT_PRIVE.pdf",
    },
    {
      title: "BUPED79",
      author: "KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED79.pdf",
    },
    {
      title: "BUPED78",
      author: "N'GUESSAN",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED78.pdf",
    },
    {
      title: "BUPED75",
      author: "DEURO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED75.pdf",
    },
    {
      title: "BUPED74",
      author: "BAMBA",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED74.pdf",
    },
    {
      title: "BUPED73",
      author: "DEURO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED73.pdf",
    },
    {
      title: "BUPED71",
      author: "KACOU",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED71.pdf",
    },
    {
      title: "BUPED70",
      author: "BAMBA",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED70.pdf",
    },
    {
      title: "BUPED69",
      author: "KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED69.pdf",
    },
    {
      title: "BUPED68",
      author: "ESSO Loesse Jacques",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED68.pdf",
    },
    {
      title: "BUPED66",
      author: "BAMBA",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED66.pdf",
    },
    {
      title: "BUPED65",
      author: "BAMBA",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED65.pdf",
    },
    {
      title: "BUPED64",
      author: "KACOU",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED64.pdf",
    },
    {
      title: "BUPED63",
      author: "DEURO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED63.pdf",
    },
  ];

  const bupedPublications2006: Publication[] = [
    {
      title: "BUPED82",
      author: "ESSO Loesse Jacques",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED82.pdf",
    },
    {
      title: "BUPED81",
      author: "KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED81.pdf",
    },
    {
      title: "BUPED80",
      author: "ESSO Loesse Jacques",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED80.pdf",
    },
  ];

  const bupedPublications2007: Publication[] = [
    {
      title: "BUPED86",
      author: "KEHO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED86.pdf",
    },
    {
      title: "BUPED87",
      author: "KEHO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED87.pdf",
    },
  ];

  const bupedPublications2008: Publication[] = [
    {
      title: "CROISSANCE EN FAVEUR DES PAUVRES ET INVESTISSEMENT PUBLIC EN COTE D'IVOIRE",
      author: "ESSO Loesse Jacques",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED87.pdf",
    },
    {
      title: "ANALYSE DE L'EFFICACITE ECONOMIQUE EN COTE D'IVOIRE",
      author: "Wautabouna OUATTARA, Consultant",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED11.pdf",
    },
    {
      title: "EPARGNE, INVESTISSEMENT ET CROISSANCE ECONOMIQUE EN COTE D'IVOIRE",
      author: "Dr. ESSO Loesse Jacques",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPEDN_08_Dr_ESSO.pdf",
    },
    {
      title: "LA CRISE DES SUBPRIMES AUX ETATS-UNIS ET LES ECONOMIES DES PAYS DE L'UEMOA",
      author: "AKA Brou Emmanuel, Consultant",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPEDN_07_AKA_consultant.pdf",
    },
    {
      title: "EVALUATION DES EFFETS DE LA FISCALITE INDIRECTE SUR LES PRIX ET LE BIEN-ETRE DES POPULATIONS EN COTE D'IVOIRE",
      author: "YEO Nahoua, Consultant",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPEDN_05_YEO_consultant.pdf",
    },
    {
      title: "DECENTRALISATION EN COTE D'IVOIRE : BILAN DU FONCTIONNEMENT DES CONSEILS GENERAUX ET DISTRICTS",
      author: "Prof. BALLO Zié",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPEDN_04_Pr_BALLO.pdf",
    },
    {
      title: "ANALYSE DE LA CONSOMMATION D'ENERGIE ET GESTION DURABLE EN COTE D'IVOIRE",
      author: "DJEZOU Wadjamsse Beaudelaire, Consultant",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPEDN_02_DJEZOU_consultant.pdf",
    },
    {
      title: "LA DIMENSION SOCIALE DU DEVELOPPEMENT DURABLE EN COTE D'IVOIRE",
      author: "Dr. KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPEDN_01_Dr_KEHO.pdf",
    },
  ];

  const bupedPublications2009: Publication[] = [
    {
      title: "DETERMINANTS OF VOTING IN COTE D'IVOIRE: THE CASE OF PRESIDENTIAL ELECTIONS",
      author: "BALLO Zié",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_02.2009_BALLO.pdf",
    },
    {
      title: "ANALYSE DE LA CONTRIBUTION DES IDE À LA CROISSANCE « PRO-PAUVRE » EN COTE D'IVOIRE",
      author: "Wautabouna OUATTARA",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_01.2009_WAUTA.pdf",
    },
    {
      title: "ANALYSE DES DÉTERMINANTS DE LA PAUVRETÉ EN COTE D'IVOIRE",
      author: "KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPEDN_09_Dr_KEHO_.pdf",
    },
    {
      title: "IMPACT DES POLITIQUES ÉCONOMIQUES SUR LE SECTEUR AGRICOLE EN COTE D'IVOIRE",
      author: "ANGM",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_10.2009_ANGM.pdf",
    },
    {
      title: "EVALUATION DES POLITIQUES FISCALES EN COTE D'IVOIRE",
      author: "DEURO Kan Toloum",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_08.2009_DEURO_OK.pdf",
    },
    {
      title: "DYNAMIQUE DE L'INDUSTRIE IVOIRIENNE ET CROISSANCE ÉCONOMIQUE",
      author: "AHOURE Alban A. E.",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_07.2009_AHOURE_OK.pdf",
    },
    {
      title: "EFFETS DES CHOCS EXTERNES SUR L'ÉCONOMIE IVOIRIENNE",
      author: "ESSO Loesse Jacques",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_06.2009_ESSO_OK.pdf",
    },
    {
      title: "RÔLE DU SECTEUR INFORMEL DANS LA CROISSANCE ÉCONOMIQUE EN COTE D'IVOIRE",
      author: "ESSO Loesse Jacques",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_05.2009_ESSO_OK.pdf",
    },
    {
      title: "INVESTISSEMENT PUBLIC ET CROISSANCE ÉCONOMIQUE EN COTE D'IVOIRE",
      author: "KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_04.2009_KEHO_OK.pdf",
    },
    {
      title: "ANALYSE DES DÉPENSES PUBLIQUES ET LEUR IMPACT SUR LA CROISSANCE EN COTE D'IVOIRE",
      author: "KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_03.2009_KEHO_OK.pdf",
    },
  ];

  const bupedPublications2010: Publication[] = [
    {
      title: "QUELLE POLITIQUE DE REDUCTION DU DEFICIT BUDGETAIRE EN COTE D'IVOIRE ?",
      author: "Yaya KEHO, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_03.2009_KEHO_OK.pdf",
    },
    {
      title: "CORRUPTION, INVESTISSEMENTS ET CROISSANCE ECONOMIQUE EN COTE D'IVOIRE",
      author: "Wautabouna OUATTARA, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_02.2010_WAUTA_ok.pdf",
    },
    {
      title: "INTEGRATION ECONOMIQUE, DEMOCRATIE ET INSTITUTIONS POLITIQUES OUEST-AFRICAINES : UN PLAIDOYER POUR DES INSTITUTIONS FORTES",
      author: "Wautabouna OUATTARA, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_01.2010_Wauta_ok.pdf",
    },
    {
      title: "DETERMINATION D'UNE STRUCTURE OPTIMALE DES RECETTES FISCALES EN COTE D'IVOIRE",
      author: "Yaya KEHO, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_4._2010_Dr_KEHO_YAYA.pdf",
    },
    {
      title: "EFFETS MACROECONOMIQUES DE LA POLITIQUE FISCALE EN COTE D'IVOIRE",
      author: "Yaya KEHO, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_3._2010_Dr_KEHO_YAYA.pdf",
    },
  ];

  const bupedPublications2011: Publication[] = [
    {
      title: "COMMENT REUSSIR LA PROMOTION DE L’INVESTISSEMENT PRIVE AU SERVICE DU DEVELOPPEMENT EN COTE D’IVOIRE EN PERIODE POST-CRISE ?",
      author: "Prof. Wautabouna OUATTARA, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_Prof._WAUTABOUNA_2011.pdf",
    },
    {
      title: "ARMED CONFLICT AND SCHOOLING OUTCOMES IN COTE D'IVOIRE",
      author: "Prof. BALLO Zié, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_06.2011_Prof._BALLO_ZIE_ok_4_.pdf",
    },
    {
      title: "COMMENT REUSSIR LA PROMOTION DE L’INVESTISSEMENT PRIVE AU SERVICE DU DEVELOPPEMENT EN COTE D’IVOIRE EN PERIODE POST-CRISE ?",
      author: "Prof. Wautabouna OUATTARA, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPEDN_11_Pr_OUATTARA.pdf",
    },
  ];

  const bupedPublications2012: Publication[] = [
    {
      title: "LA RELANCE POST CRISE EN COTE D'IVOIRE A-T-ELLE NECESSAIREMENT BESOIN D'UN SURCROIT D'ASSISTANCE EXTERIEURE ? : UNE ANALYSE PAR LES EFFETS DE SEUILS",
      author: "YOHOU Djédjé Hermann & KAMAGATE Tidiane, Chercheurs Associés CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_N_09.2012_YOHOU_KAMAGATE.pdf",
    },
    {
      title: "DETERMINANTS DE LA VOLATILITE DES PRIX DES PRODUITS ALIMENTAIRES ET LA PERTINENCE DES MESURES DE STABILISATION EN COTE D'IVOIRE",
      author: "Dr. NAHOUA YEO, Chercheur Associé CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_17.2012_YEO_NAHOUA.pdf",
    },
    {
      title: "GOUVERNANCE, CLIMAT DES AFFAIRES ET PERFORMANCE PRODUCTIVE DU SECTEUR PRIVE IVOIRIEN : UNE ANALYSE COMPARATIVE AVEC LES PAYS AFRICAINS LEADERS",
      author: "N'GUESSAN Dieu-Donné Melagne, Chercheur Associé CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_13.2012_N_GUESSAN_DIEU_DONNE_OK.pdf",
    },
    {
      title: "CHOCS EXTERIEURS ET FLUCTUATIONS MACROECONOMIQUES EN COTE D'IVOIRE",
      author: "FE Doukouré Charles & KANGA Kouamé D'Ati",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_12._2012_FE_KANGA.pdf",
    },
    {
      title: "INVESTIGATION EMPIRIQUE DU RECOURS AUX CONSULTATIONS PRENATALES EN COTE D'IVOIRE",
      author: "Dr. TIEHI Tito Nestor, Chercheur Associé CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_15.2012_Dr_TIEHI_Tito_OK.pdf",
    },
    {
      title: "APE : UNE OPPORTUNITE POUR LA COTE D'IVOIRE ?",
      author: "Dr. SOBIA Aïssata, Dr. YOLI Bi Sani Martin, KOUAME Franc",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_11.2012_Dr_SOBIA_YOLI.pdf",
    },
    {
      title: "STABILISATION DES PRIX DU CAFE ET DU CACAO EN COTE D'IVOIRE",
      author: "Dr. MALAN Béïla Benoît, Chercheur Associé CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_19.2012_Dr_MALAN_OK.pdf",
    },
    {
      title: "LE SYSTEME THERMIQUE ET L'EQUILIBRE DU SECTEUR DE L'ENERGIE ELECTRIQUE EN COTE D'IVOIRE",
      author: "Dr. DJEZOU Wadjamsse Beaudelaire & Dr. DJA N'GUESSAN Ferdinand",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_16.2012_DJEZOU_DJA_N_GUESSAN_OK.pdf",
    },
    {
      title: "CLIMAT DES AFFAIRES ET PERFORMANCE DES ENTREPRISES IVOIRIENNES",
      author: "N'GOTTA Celaine & BECHO Isabelle, Chercheurs Associés CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_14.2012_BECHO_N_GOTTA.pdf",
    },
    {
      title: "BUPEDN_12_Prof._NGBO",
      author: "Prof. NGBO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPEDN_12_Prof._NGBO.pdf",
    },
  ];

  const bupedPublications2013: Publication[] = [
    {
      title: "ESSAI D'ÉVALUATION DE L'IMPACT DE LA CRÉATION DE L'UEMOA SUR LE NIVEAU DE DÉVELOPPEMENT DES PAYS MEMBRES",
      author: "Dr. FE Doukouré Charles, ENSEA et Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_2013_FE.pdf",
    },
    {
      title: "CRIME, SELF-PROTECTION AND BUSINESS GROWTH IN COTE D’IVOIRE",
      author: "ASSI J. C. KIMOU & KWABENA GYIMAH-BREMPONG",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_2013_KIMOU.pdf",
    },
    {
      title: "INCIDENCE ET EFFICACITÉ ÉCONOMIQUE DES TAXES INDIRECTES EN COTE D’IVOIRE",
      author: "Nahoua YEO, PhD Enseignant-chercheur à l’UFRSEG, Université FHB",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_2013_YEO.pdf",
    },
    {
      title: "ESSAI D'ÉVALUATION DE L'IMPACT DE LA CRÉATION DE L'UEMOA SUR LE NIVEAU DE DÉVELOPPEMENT DES PAYS MEMBRES",
      author: "Dr. FE Doukouré Charles, ENSEA et Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_2013_FE.pdf",
    },
    {
      title: "ARMED CONFLICT AND SCHOOLING OUTCOMES IN CÔTE D’IVOIRE",
      author: "Prof. Zié BALLO, Chercheur - CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_06.2011_Prof._BALLO_ZIE_ok.pdf",
    },
  ];

  const bupedPublications2014: Publication[] = [
    {
      title: "LES ENTREPRISES FAMILIALES IVOIRIENNES SONT-ELLES PERFORMANTES QUE LES ENTREPRISES NON FAMILIALES ?",
      author: "BALLO ZIE, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_2014_BALLO.pdf",
    },
    {
      title: "Analyse de la performance économique et de l’efficience des firmes en Côte d’Ivoire",
      author: "Célaine NGOTTA",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_CELAINE_CRDI_OK_1_.pdf",
    },
    {
      title: "ENTREPRENEURIAT ET GENRE CÔTE D’IVOIRE",
      author: "N’DEDE Bosoma Florence epse DAGNAN; Jean-Louis LOGNON, Université F",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_2014_NDEDE_final_PED.pdf",
    },
    {
      title: "MAIN D’ŒUVRE FAMILIALE DANS LES PME IVOIRIENNES : LOGIQUES SOCIALES ET ENJEUX",
      author: "Jean-Louis LOGNON, Sociologue, Enseignant chercheur Université Félix",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_2014_LOGNON.pdf",
    },
    {
      title: "EFFET DES INVESTISSEMENTS EN TIC ET EN CAPITAL HUMAIN SUR LA PRODUCTIVITÉ DU TRAVAIL AU SEIN DES ENTREPRISES EN CÔTE D’IVOIRE.",
      author: "KOUADIO Kouassi B., CAPEC-UFR SEG",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_2014_KOUADIO_BONIFACE.pdf",
    },
    {
      title: "MACROECONOMIC AND SOCIAL IMPACTS OF ECONOMIC PARTNERSHIP AGREEMENTS ON IVORIAN ECONOMY: A NEW ASSESSMENT",
      author: "FE Doukouré Charles, ENSEA et Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_2014_FE_DOUKOURE.pdf",
    },
  ];

  const bupedPublications2015: Publication[] = [
    {
      title: "Analyse de la performance des exportations de cacao de la Côte d'Ivoire : vers une diversification de l’offre Ivoirienne",
      author: "Dr FE Doukouré Charles Enseignant à l’ENSEA et Chercheur Junior à",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_2015_Dr_FE_docx_3_.pdf",
    },
  ];

  const bupedPublications2016: Publication[] = [
    {
      title: "COMMERCE INTRA UEMOA DE LA COTE D’IVOIRE : INFLUENCE DES INFRASTRUCTURES ET DE L’ENVIRONNEMENT ECONOMIQUE.",
      author: "Dr FE Doukouré Charles Enseignant à l’ENSEA et Chercheur Junior à",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_2016.pdf",
    },
  ];

  const bupedPublications2018: Publication[] = [
    {
      title: "ENGAGEMENT DE LA SOCIÉTÉ CIVILE ET GOUVERNANCE ÉCONOMIQUE EN CÔTE D’IVOIRE",
      author: "Prof. Assi Kimou José, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_2018_Prof._KIMOU.pdf",
    },
    {
      title: "ANALYSE DES EFFETS DE L’ENDETTEMENT ET DU DÉFICIT BUDGÉTAIRE SUR LA CROISSANCE DE LA CÔTE D’IVOIRE À LONG TERME",
      author: "Prof. Esso Loesse Jacques, Chercheurs CAPEC – Dr Fé Doukouré Charles",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_Dr_FE_2018.pdf",
    },
    {
      title: "ANALYSE DES EFFETS DE L’ENDETTEMENT ET DU DÉFICIT BUDGÉTAIRE SUR LA CROISSANCE DE LA CI À LONG TERME",
      author: "Prof. Esso Loesse Jacques, Chercheurs CAPEC – Dr Fé Doukouré Charles",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/BUPED_Dr_FE_Maquette.pdf",
    },
  ];

  const lpePublications2003: Publication[] = [
    {
      title: "Comment la Côte d'Ivoire s'adapte-t-elle aux Accords de l'OMC ?",
      author: "BAMBA N'Galadjo Lambert",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/N_42_LPE_Bamba.pdf",
    },
    {
      title: "Le SIGFIP : une garantie de rationalisation du paiement des dépenses de l'État",
      author: "GBAKA Kouadio Gaspard",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/N_32_LPE_Gbaka.pdf",
    },
    {
      title: "Quels rôles doivent jouer les secteurs public et privé dans l'éducation et la formation en Côte d'Ivoire ?",
      author: "KACOU Kouamela",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/N_29_LPE_Kacou.pdf",
    },
    {
      title: "IMPACT DE L'UEMOA SUR LE COMMERCE INTRA-COMMUNAUTAIRE : ÉVALUATION À L'AIDE D'UN MODÈLE DE GRAVITÉ",
      author: "Prof. NGARESSEUM Deuro Kan Toloum",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/N_44_LPE_Deuro.pdf",
    },
    {
      title: "COMMENT UNE POLITIQUE DE RÉCONCILIATION NATIONALE GLOBALE PEUT-ELLE FAVORISER LE REDRESSEMENT ÉCONOMIQUE ET FISCAL ?",
      author: "N'GUESSAN TCHETCHE",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/N_43_LPE_Tch_tch_.pdf",
    },
    {
      title: "COMMENT LA CÔTE D'IVOIRE S'ADAPTE-T-ELLE AUX ACCORDS DE L'OMC",
      author: "BAMBA N'Galadjo Lambert",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/N_42_LPE_Bamba.pdf",
    },
    {
      title: "LES FONDEMENTS DE LA SURVEILLANCE MACROÉCONOMIQUE",
      author: "BAMBA N'Galadjo Lambert",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/N_41_LPE_Bamba.pdf",
    },
  ];

  const lpePublications2004: Publication[] = [
    {
      title: "ROLE DES INSTITUTIONS DANS LA PROMOTION DE LA CROISSANCE EN AFRIQUE SUBSAHARIENNE",
      author: "Loesse Jacques ESSO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE75.pdf",
    },
  ];

  const lpePublications2005: Publication[] = [
    {
      title: "ETAT DE LA CONVERGENCE DANS L'UEMOA EN 2002",
      author: "BAMBA N'Galadjo Lambert",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/N_40_LPE_Bamba.pdf",
    },
    {
      title: "BILAN DE LA GESTION MACROECONOMIQUE EN 2002",
      author: "BAMBA N'Galadjo Lambert",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/N_39_LPE_Bamba.pdf",
    },
    {
      title: "IMPACTS DU DESENGAGEMENT DE L'ETAT DU SYSTEME PRODUCTIF ET DE LA LIBERALISATION DES ECHANGES SUR LA CROISSANCE DES EXPORTATIONS IVOIRIENNES",
      author: "KACOU Kouamela",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/N_38_LPE_Kacou.pdf",
    },
  ];

  const lpePublications2006: Publication[] = [
    {
      title: "AIDE, POLITIQUES ECONOMIQUES ET CROISSANCE DE LA COTE D'IVOIRE EN PERIODE POST-CRISE",
      author: "Dr. Loesse Jacques ESSO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE119.pdf",
    },
    {
      title: "EFFETS DYNAMIQUES DE L'AIDE ET DE LA CROISSANCE ECONOMIQUE EN COTE D'IVOIRE",
      author: "Dr. Loesse Jacques ESSO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE118.pdf",
    },
    {
      title: "LA CROISSANCE PRO-PAUVRE : LE ROLE DES INVESTISSEMENTS PUBLICS",
      author: "Prof. KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE117.pdf",
    },
    {
      title: "REDUIRE LA PAUVRETE POUR STIMULER LA CROISSANCE",
      author: "Prof. KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE116.pdf",
    },
    {
      title: "EVOLUTIONS RECENTES DES RECETTES D'IMPORTATION DE LA COTE D'IVOIRE",
      author: "Dr. Loesse Jacques ESSO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE114.pdf",
    },
    {
      title: "LE CONTROLE DES SOUVERAINETES BUDGETAIRES IMPLIQUE-T-IL UN RENONCEMENT A LA CROISSANCE ? UNE REPONSE EMPIRIQUE A PARTIR DU CAS DE LA COTE D'IVOIRE",
      author: "Prof. KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE112.pdf",
    },
  ];

  const lpePublications2007: Publication[] = [
    {
      title: "EVOLUTION DE LA PAUVRETE ET DES INEGALITES EN COTE D'IVOIRE",
      author: "Dr. Loesse Jacques ESSO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE129.pdf",
    },
    {
      title: "LA CROISSANCE EN COTE D'IVOIRE EST-ELLE EN FAVEUR DES PAUVRES ?",
      author: "Dr. Loesse Jacques ESSO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE128.pdf",
    },
    {
      title: "LES DEPENSES PUBLIQUES D'EDUCATION ET DE SANTE : EVOLUTIONS ET INCIDENCE SUR LA PAUVRETE",
      author: "Prof. KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE127.pdf",
    },
    {
      title: "LES DEPENSES PUBLIQUES D'EDUCATION ET LEUR IMPACT SUR LA CROISSANCE (1970-2002)",
      author: "Prof. KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE126.pdf",
    },
    {
      title: "LES ECONOMIES AFRICAINES FACE A LA MONDIALISATION",
      author: "Prof. NGARESSEUM Deuro Kan Toloum",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_132_Deuro._1_.pdf",
    },
    {
      title: "LA REPARTITION SECTORIELLE DE L'INVESTISSEMENT PUBLIC EN COTE D'IVOIRE ET SON LIEN AVEC LA CROISSANCE(1)",
      author: "Prof. KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_131.pdf",
    },
  ];

  const lpePublications2008: Publication[] = [
    {
      title: "CONTRIBUTION DES SUPERFICIES ET DU RENDEMENT A LA VARIATION DE LA PRODUCTION DE RIZ EN COTE D'IVOIRE",
      author: "Prof. NGARESSEUM Deuro Kan Toloum",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_16_2009_Deuro_...pdf",
    },
    {
      title: "PEUT-ON PROLONGER LA PERIODE D'ACTIVITE EN COTE D'IVOIRE?",
      author: "Dr. Loesse Jacques ESSO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_12_2009_ESSO.pdf",
    },
  ];

  const lpePublications2009: Publication[] = [
    {
      title: "CONTRIBUTION DES SUPERFICIES ET DU RENDEMENT A LA VARIATION DE LA PRODUCTION DE RIZ EN COTE D'IVOIRE",
      author: "Prof. NGARESSEUM Deuro Kan Toloum",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_16_2009_Deuro_...pdf",
    },
    {
      title: "PEUT-ON PROLONGER LA PERIODE D'ACTIVITE EN COTE D'IVOIRE?",
      author: "Dr. Loesse Jacques ESSO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_12_2009_ESSO.pdf",
    },
    {
      title: "LA SECURITE SOCIALE EN COTE D'IVOIRE",
      author: "Dr. Loesse Jacques ESSO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_11_2009_ESSO.pdf",
    },
    {
      title: "EFFETS DE LA DEPENDANCE DEMOGRAPHIQUE SUR L'EPARGNE ET LA CROISSANCE EN COTE D'IVOIRE ?",
      author: "Dr. Loesse Jacques ESSO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_10_2009_ESSO.pdf",
    },
    {
      title: "DYNAMIQUE DE LA DEPENDANCE DEMOGRAPHIQUE ET DE L'EPARGNE EN COTE D'IVOIRE ?",
      author: "Dr. Loesse Jacques ESSO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_09_2009_ESSO.pdf",
    },
    {
      title: "QUEL EST LE TAUX DE PRESSION FISCALE OPTIMAL POUR LA COTE D'IVOIRE",
      author: "Dr. KEHO Yaya",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_07_2009_KEHO.pdf",
    },
    {
      title: "PARTICIPATION DU PRIVE ET FOURNITURE DE L'EAU EN COTE D'IVOIRE : BILAN ET PERSPECTIVES",
      author: "Prof. Akée G. M. N'GBO",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/1_LPE_N_21_2009_N_Gbo.pdf",
    },
  ];

  const lpePublications2010: Publication[] = [
    {
      title: "CORRUPTION, INVESTISSEMENTS PRIVES ET CROISSANCE ECONOMIQUE EN COTE D'IVOIRE",
      author: "Wautabouna OUATTARA, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_04_2010_Wauta.pdf",
    },
    {
      title: "CORRUPTION, INVESTISSEMENTS PUBLICS ET CROISSANCE ECONOMIQUE EN COTE D'IVOIRE",
      author: "Wautabouna OUATTARA, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_03_2010_Wauta.pdf",
    },
    {
      title: "DEMOCRATIE ET INSTITUTIONS POLITIQUES OUEST-AFRICAINES",
      author: "Wautabouna OUATTARA, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_02_2010_Wauta.pdf",
    },
    {
      title: "INTEGRATION ECONOMIQUE ET INSTITUTIONS POLITIQUES OUEST-AFRICAINES",
      author: "Wautabouna OUATTARA, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_01_2010_Wauta.pdf",
    },
    {
      title: "LA POLITIQUE FISCALE IVOIRIENNE FACE A LA NORME COMMUNAUTAIRE DE 1%: QUELQUES ELEMENTS D'ANALYSE",
      author: "Dr. KEHO Yaya, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_08_2010_KEHO.pdf",
    },
    {
      title: "RÉDUIRE LE TAUX DE PRESSION FISCALE OU AMÉNAGER LA STRUCTURE DE L'ASSIETTE FISCALE : QUELLE STRATÉGIE POUR UNE CROISSANCE OPTIMALE EN CÔTE",
      author: "Dr. KEHO Yaya, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_07_2010_Dr_KEHO_YAYA.pdf",
    },
    {
      title: "LES EFFETS DES PRÉLÈVEMENTS FISCAUX SUR L'ACTIVITÉ ÉCONOMIQUE EN CÔTE D'IVOIRE",
      author: "Dr. KEHO Yaya, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_N_06_2010_Dr_KEHO_YAYA.pdf",
    },
  ];

  const lpePublications2011: Publication[] = [
    {
      title: "COMMENT RÉUSSIR LA PROMOTION DE L’INVESTISSEMENT PRIVÉ AU SERVICE DU DÉVELOPPEMENT EN CÔTE D’IVOIRE EN PÉRIODE POST-CRISE ?",
      author: "Prof. Wautabouna OUATTARA, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_2011_Prof._OUATTARA.pdf",
    },
  ];

  const lpePublications2012: Publication[] = [
    {
      title: "GOUVERNANCE, CLIMAT DES AFFAIRES ET PERFORMANCE PRODUCTIVE DU SECTEUR PRIVÉ IVOIRIEN",
      author: "N'GUESSAN Dieu-Donné Melagne, Chercheur Associé CAPEC",      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_2012_NGUESSAN.pdf",
    },
  ];

  const lpePublications2013: Publication[] = [
    {
      title: "CRIME, SELF-PROTECTION AND BUSINESS GROWTH IN CÔTE D’IVOIRE",
      author: "ASSI J. C. KIMOU & KWABENA GYIMAH-BREMPONG",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_2013_KIMOU.pdf",
    },
  ];

  const lpePublications2014: Publication[] = [
    {
      title: "LES ENTREPRISES FAMILIALES IVOIRIENNES SONT-ELLES PLUS PERFORMANTES QUE LES ENTREPRISES NON FAMILIALES ?",
      author: "BALLO Zié, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_2014_BALLO.pdf",
    },
  ];

  const lpePublications2015: Publication[] = [
    {
      title: "ANALYSE DE LA PERFORMANCE DES EXPORTATIONS DE CACAO DE LA CÔTE D’IVOIRE",
      author: "Dr. FE Doukouré Charles, ENSEA et Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_2015_FE.pdf",
    },
  ];

  const lpePublications2018: Publication[] = [
    {
      title: "ANALYSE DES EFFETS DE L’ENDETTEMENT ET DU DÉFICIT BUDGÉTAIRE SUR LA CROISSANCE À LONG TERME",
      author: "Prof. Esso Loesse Jacques & Dr. FE Doukouré Charles, Chercheurs CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_2018_ESSO_FE.pdf",
    },
  ];

  const lpePublications2020: Publication[] = [
    {
      title: "IMPACT DE LA PANDÉMIE DE COVID-19 SUR L’ÉCONOMIE IVOIRIENNE",
      author: "Dr. FE Doukouré Charles, Chercheur CAPEC",
      authorLink: "https://capec-ci.org/publications/Search_pub",
      pdfLink: "https://capec-ci.org/docs/publications/LPE_2020_FE.pdf",
    },
  ];

  // Structure des publications par type et année
  const publicationsByType: PublicationsByType = {
    "Politique Économique et Développement (PED)": {
      "2005": publications2005,
      "2006": publications2006,
      "2008": publications2008,
      "2012": publications2012,
      "2013": publications2013,
      "2014": publications2014,
      "2015": publications2015,
      "2017": publications2017,
    },
    "Bulletin de Politique Économique et Développement (BUPED)": {
      "2003": bupedPublications2003,
      "2005": bupedPublications2005,
      "2006": bupedPublications2006,
      "2007": bupedPublications2007,
      "2008": bupedPublications2008,
      "2009": bupedPublications2009,
      "2010": bupedPublications2010,
      "2011": bupedPublications2011,
      "2012": bupedPublications2012,
      "2013": bupedPublications2013,
      "2014": bupedPublications2014,
      "2015": bupedPublications2015,
      "2016": bupedPublications2016,
      "2018": bupedPublications2018,
    },
    "Lettre de Politique Économique (LPE)": {
      "2003": lpePublications2003,
      "2004": lpePublications2004,
      "2005": lpePublications2005,
      "2006": lpePublications2006,
      "2007": lpePublications2007,
      "2008": lpePublications2008,
      "2009": lpePublications2009,
      "2010": lpePublications2010,
      "2011": lpePublications2011,
      "2012": lpePublications2012,
      "2013": lpePublications2013,
      "2014": lpePublications2014,
      "2015": lpePublications2015,
      "2018": lpePublications2018,
      "2020": lpePublications2020,
    },
    "Publications dans les revues spécialisées (PRS)": {},
  };

  // Gestion de l'affichage des publications
  const handleShowPublications = () => {
    if (selectedYear === "Sélectionnez l’année") {
      setShowPublications(false);
      setCurrentPublications([]);
      return;
    }

    const publications = publicationsByType[selectedType]?.[selectedYear] || [];
    setCurrentPublications(publications);
    setShowPublications(true);
  };

  // Rendu des années disponibles pour le type sélectionné
  const availableYears = availableYearsByType[selectedType] || [];

  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">
    <div className="max-w-5xl mx-auto mt-24 mb-52 p-6 bg-white rounded-lg">
    <h2 className="text-4xl font-bold text-gray-800 mb-2">Publications</h2>
        <div className="h-1 w-12 bg-orange-500 mb-6"></div>

        {/* Section PED */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-orange-600 mb-2 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Politique Économique et Développement (PED)
          </h3>
          <p className="text-gray-600">
            Le PED rend compte des résultats des études et recherches dans leur intégralité sans aucune restriction, avec toute la technicité et la rigueur nécessaires. Sa distribution se fait sur demande expresse quand les lecteurs ne le consultent pas sur place.
          </p>
        </section>

        {/* Section BUPED */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-orange-600 mb-2 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Bulletin de Politique Économique et Développement (BUPED)
          </h3>
          <p className="text-gray-600">
            Le BUPED, à la différence du PED, résume en une vingtaine de pages au plus et sans détail technique, les conclusions et recommandations des études.
          </p>
        </section>

        {/* Section LPE */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold text-orange-600 mb-2 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Lettre de Politique Économique (LPE)
          </h3>
          <p className="text-gray-600">
            La LPE rend compte de l’essentiel des résultats des recherches et des recommandations de politiques économiques qui en découlent. Elle est aussi utilisée comme support pour les chroniques économiques. Elle ne comporte que quatre pages et reste spécialement destinée aux décideurs.
          </p>
        </section>


      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
              Type de publication
            </label>
            <select
              id="type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as PublicationType)}
              className="block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              
              <option>Politique Économique et Développement (PED)</option>
              <option>Bulletin de Politique Économique et Développement (BUPED)</option>
              <option>Lettre de Politique Économique (LPE)</option>
              <option>Publications dans les revues spécialisées (PRS)</option>
            </select>
          </div>
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
              Année
            </label>
            <select
              id="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="block w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Sélectionnez l’année</option>
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
          <Button
                  onClick={handleShowPublications}
                  className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300"
                >
                  Rechercher
                  <Search className="w-4 h-4 ml-2" />
                </Button>
          </div>
        </div>
      </div>

      {showPublications && (
          <section className="mt-6">
            {currentPublications.map((pub, index) => (
              <div key={index} className="rounded border py-3 px-4 mb-4">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-gray-800" />
                  <h5 className="text-lg font-semibold text-gray-800">{pub.title}</h5>
                </div>
                <h6 className="text-gray-600 mt-1">
                  Auteur : <a href={pub.authorLink} className="text-orange-500 hover:underline">{pub.author}</a>
                </h6>
                <div className="flex items-center mt-2">
                  < Image
                    src="/images/pdf.png"
                    width="30"
                    height="30"
                    className="shadow"
                    alt="PDF icon"
                  />
                  <a
                    href={pub.pdfLink}
                    target="_blank"
                    className="text-orange-500 hover:underline ml-4"
                  >
                    Télécharger le pdf
                  </a>
                </div>
              </div>
            ))}
          </section>
        )}


   </div>
    </main>
    <Footer />
  </div>

  );
}