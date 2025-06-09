"use client";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, FileText, Users, BarChart, Search, MessageCircle } from "lucide-react";
import { useState } from "react";
import { MainNav } from "@/components/main-nav";

interface Etude {
  title: string;
  date: string;
  pdfLink: string;
}

interface Activity {
  date: string;
  title: string;
  link: string;
  participants: string;
}

interface News {
  title: string;
  date: string;
  link: string;
}

export default function RecherchesPage() {
  const [selectedType, setSelectedType] = useState<string>("Analyse d'impact économique");
  const [selectedYear, setSelectedYear] = useState<string>("Sélectionnez l’année");
  const [showEtude, setShowEtude] = useState<boolean>(false);
  const [currentEtude, setCurrentEtude] = useState<Etude[]>([]);

  // Données des études par catégorie et année (de EtudePage)
  const etudesByCategory: { [key: string]: { [key: string]: Etude[] } } = {
    "Analyse d'impact économique": {
      "2020": [
        {
          title: "CRIME, SELF PROTECTION AND BUSINESS GROWTH IN COTE D'IVOIRE",
          date: "2020",
          pdfLink: "/images/ETUDE PDF/Analyse d'impact/2020/crime self.pdf",
        },
      ],
      "2018": [
        {
          title: "ETUDE DE L'IMPACT DES INVESTISSEMENTS DANS LES SECTEURS DES HYDROCARBURES ET DE L'ENERGIE SUR L'ECONOMIE IVOIRIENNE",
          date: "2018",
          pdfLink: "/images/ETUDE PDF/Analyse d'impact/2018/etude impact des investissements.pdf",
        },
      ],
      "2017": [
        {
          title: "Impacts sanitaire et financier du financement de la lutte contre le SIDA en Côte d'Ivoire : Modélisation de Scénarii de financement.",
          date: "2017",
          pdfLink: "/images/ETUDE PDF/Analyse d'impact/2017/impact sanitaire.pdf",
        },
      ],
      "2016": [
        {
          title: "Etude d'impact des radios de proximité en côte d'ivoire",
          date: "2016",
          pdfLink: "/images/ETUDE PDF/Analyse d'impact/2016/etude impact des radios.pdf",
        },
      ],
      "2015": [
        {
          title: "ETUDE D'IMPACT SOCIO-ECONOMIQUE DU RETOUR DE LA BANQUE AFRICAINE DE DEVELOPPEMENT EN COTE D'IVOIRE",
          date: "2015",
          pdfLink: "/images/ETUDE PDF/Analyse d'impact/2015/etude impact.pdf",
        },
      ],
    },
    "Institution et gouvernance": {
      "2017": [
        {
          title: "Rapport national d'auto évaluation Gouvernance d'entreprise",
          date: "2017",
          pdfLink: "/images/ETUDE PDF/Institution et gouvernance/2017/rapport.pdf",
        },
      ],
      "2016": [
        {
          title: "Emergence Gouvernance Et Planification",
          date: "2016",
          pdfLink: "/images/ETUDE PDF/Institution et gouvernance/2016/EMERGENCE.pdf",
        },
      ],
      "2015": [
        {
          title: "INDICATEURS DE CAPACITéS EN AFRIQUE 2015",
          date: "2015",
          pdfLink: "/images/ETUDE PDF/Institution et gouvernance/2015/INDICATEUR.pdf",
        },
      ],
      "2014": [
        {
          title: "GOUVERNANCE ET PLANIFICATION : QUEL ROLE DANS L'EMERGENCE DES PAYS",
          date: "2014",
          pdfLink: "/images/ETUDE PDF/Institution et gouvernance/2014/GOUVERNANCE.pdf",
        },
      ],
      "2013": [
        {
          title: "STRATEGIES D'AMELIORATION DES INDICATEURS DE GOUVERNANCE EN COTE D'IVOIRE",
          date: "2013",
          pdfLink: "/images/ETUDE PDF/Institution et gouvernance/2013/STRACTEGIE AMELIORATION.pdf",
        },
      ],
    },
    "Transformation structurelle, croissance, développement et financement de l'économie": {
      "2017": [
        {
          title: "STRATEGIE NATIONALE DE DIALOGUE PUBLIC-PRIVE (SNDPP) 2016-2020 EN COTE D'IVOIRE",
          date: "2017",
          pdfLink: "/images/ETUDE PDF/Transformation structurelle/2017/stractegie nationale.pdf",
        },
      ],
      "2015": [
        {
          title: "PROFIL PAYS COTE D'IVOIRE",
          date: "2015",
          pdfLink: "/images/ETUDE PDF/Transformation structurelle/2015/profil pays.pdf",
        },
      ],
      "2014": [
        {
          title: "EMERGENCE ET DEVELOPPEMENT HUMAIN DURABLE",
          date: "2014",
          pdfLink: "/images/ETUDE PDF/Transformation structurelle/2014/emergence et developpemnt.pdf",
        },
      ],
    },
    "Finance publique et convergence économique": {
      "2017": [
        {
          title: "ELABORATION DE LA STRATEGIE NATIONALE DE DEVELOPPEMENT DES STATISTIQUES (SNDS) 2017-2021 DE LA COTE D'IVOIRE",
          date: "2017",
          pdfLink: "/images/ETUDE PDF/finance publique/2017/elaboration.pdf",
        },
      ],
      "2016": [
        {
          title: "REVUE DES DEPENSES PUBLIQUES AGRICOLES (SOMMAIRE)",
          date: "2016",
          pdfLink: "/images/ETUDE PDF/finance publique/2016/revue des depenses.pdf",
        },
      ],
      "2015": [
        {
          title: "ANALYSE DIAGNOSTIQUE DES LOYERS DE L'ETAT ET PROPOSITION D'UNE STRATEGIE DE POLITIQUE PUBLIQUE IMMOBILIERE COMPATIBLE AVEC LE CONTEXTE BUDGETAIRE",
          date: "2015",
          pdfLink: "/images/ETUDE PDF/finance publique/2015/analyse diagnostique.pdf",
        },
      ],
      "2014": [
        {
          title: "Evaluation des régies financières en Côte d'Ivoire",
          date: "2014",
          pdfLink: "/images/ETUDE PDF/finance publique/2014/evaluation.pdf",
        },
      ],
    },
    "Entreprenariat et modèles d'affaire inclusifs": {
      "2016": [
        {
          title: "Etude de faisabilité pour la mise en place du statut de l'entreprenant en Côte d'Ivoire",
          date: "2016",
          pdfLink: "/images/ETUDE PDF/entrepreneuriat/2016/etude de faisabilité.pdf",
        },
      ],
      "2015": [
        {
          title: "PARTENARIAT ETAT-SECTEUR PRIVE",
          date: "2015",
          pdfLink: "/images/ETUDE PDF/entrepreneuriat/2015/partenariat.pdf",
        },
      ],
    },
    "Pauvrété, inégalité et rédistribution": {
      "2015": [
        {
          title: "PARTENARIAT ETAT-SECTEUR PRIVE",
          date: "2015",
          pdfLink: "/images/ETUDE PDF/pauvrete/partenariat.pdf",
        },
      ],
    },
    "Agriculture, Nutrition et Sécurité alimentaire, Changement Climatique et ressources Naturelles": {
      "2018": [
        {
          title: "Examen stratégique nationale FAIM ZERO Côte d'Ivoire",
          date: "2018",
          pdfLink: "/images/agriculture et nutrition/2018/examen stractegique.pdf",
        },
      ],
      "2015": [
        {
          title: "Diagnostic du Secteur des Pêches : Efficacité Economique et Environnementale de l'Aménagement des Pêches et des Droits",
          date: "2015",
          pdfLink: "/images/agriculture et nutrition/2015/diagnostic du secteur peche.pdf",
        },
      ],
      "2012": [
        {
          title: "L'accès à l'eau potable: bilan et perspectives",
          date: "2012",
          pdfLink: "/images/agriculture et nutrition/2012/eau potable.pdf",
        },
      ],
    },
    "Suivi et évaluation de projet": {
      "2010": [
        {
          title: "Les problèmes énergétiques en CI: bilan et perspectives (1960-2060)",
          date: "2010",
          pdfLink: "/images/ETUDE PDF/suivi/cinquantenaire.pdf",
        },
      ],
    },
    "Modélisation économique": {
      "2019": [
        {
          title: "Projet de modélisation GEMMES pour la Côte d'Ivoire",
          date: "2019",
          pdfLink: "/images/ETUDE PDF/modélisation economique/2019/modelisation.pdf",
        },
      ],
    },
    "Commerce international": {
      "2013": [
        {
          title: "Politique Commerciale et Enjeux pour l'éligibilité de La Côte d'Ivoire au Programme Millenium Challenge Corporation",
          date: "2013",
          pdfLink: "/images/ETUDE PDF/commerce international/2013/politique commerciale.pdf",
        },
        {
          title: "PROJET RéGIONAL DE RECHERCHE-ACTION SUR LA TAXATION DES PRODUITS DE TABAC EN AFRIQUE DE L'OUEST",
          date: "2013",
          pdfLink: "/images/ETUDE PDF/commerce international/2013/projet regional.pdf",
        },
      ],
      "2014": [
        {
          title: "ETUDE SUR LES MECANISMES INNOVANTS POUR LE FINANCEMENT DU DEVELOPPEMENT REGIONAL DE LA CEDEAO",
          date: "2014",
          pdfLink: "/images/ETUDE PDF/commerce international/2014/dynamique de la dette.pdf",
        },
        {
          title: "REVUE DES DEPENSES PUBLIQUES AGRICOLES (SOMMAIRE)",
          date: "2014",
          pdfLink: "/images/ETUDE PDF/commerce international/2014/etude sur le mecanisme.pdf",
        },
      ],
      "2015": [
        {
          title: "ANALYSE DIAGNOSTIQUE DES LOYERS DE L'ETAT ET PROPOSITION D'UNE STRATEGIE DE POLITIQUE PUBLIQUE IMMOBILIERE COMPATIBLE AVEC LE CONTEXTE BUDGETAIRE",
          date: "2015",
          pdfLink: "/images/ETUDE PDF/commerce international/2015/determinants.pdf",
        },
      ],
      "2016": [
        {
          title: "Evaluation des régies financières en Côte d'Ivoire",
          date: "2016",
          pdfLink: "/images/ETUDE PDF/commerce international/2016/etude des consequences.pdf",
        },
      ],
      "2017": [
        {
          title: "LES MOTEURS DE LA CROISSANCE ET L'OUVERTURE COMMERCIALE EN COTE D'IVOIRE",
          date: "2017",
          pdfLink: "/images/ETUDE PDF/commerce international/2017/les moteurs de la croissnaces.pdf",
        },
      ],
    },
  };

  // Données des comptes rendus d'activités
  const activities: Activity[] = [
    {
      date: "21 Sept, 2020",
      title: "METHODES ET TECHNIQUES MARKETING : DES CADRES DU BNETD A L'ECOLE DE LA CAPEC",
      link: "/activites/compte-rendu/conf1",
      participants: "3 participants",
    },
    {
      date: "09 Avr, 2019",
      title: "Un atelier de méthodologie et d'écriture scientifique s'est tenu à Abidjan du 1er au 05 avril",
      link: "/activites/compte-rendu/conf2",
      participants: "50 participants",
    },
    {
      date: "12 Juill, 2017",
      title: "DEVELOPPEMENT INDUSTRIEL: Des cadres outillés à l'Analyse de filières et aux techniques d'élaboration et de mise en œuvre",
      link: "/activites/compte-rendu/conf3",
      participants: "101 participants",
    },
  ];

  // Données des actualités récentes
  const newsItems: News[] = [
    {
      title: "CELEBRATION DES 30 ANS DE LA CAPEC",
      date: "8 et 9 octobre, 2024",
      link: "/activites/actualites",
    },
    {
      title: "CONFERENCE DE HAUT NIVEAU",
      date: "06 Mai, 2022",
      link: "/activites/actualites",
    },
    {
      title: "RECRUTEMENT DE DEUX (2) CHERCHEURS JUNIORS...",
      date: "22 Avr, 2022",
      link: "/activites/actualites",
    },
    {
      title: "La CAPEC se félicite pour la validation de la vision prospectrice 2050 de la CEDEAO.",
      date:"21 Dec, 2021",
      link:"/activites/actualites",
    }
  ];

  // Gérer l'affichage des études
  const handleShowEtude = () => {
    if (selectedYear === "Sélectionnez l’année") {
      setShowEtude(false);
      setCurrentEtude([]);
      return;
    }

    const etudesForType = etudesByCategory[selectedType]?.[selectedYear] || [];
    setCurrentEtude(etudesForType);
    setShowEtude(etudesForType.length > 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <MainNav />

      {/* Main Content */}
      <main className="p-6 max-w-7xl mx-auto mt-16 mb-64 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3">
            {/* Title */}
            <h1 className="text-2xl font-bold text-black border-b-1 border-orange-500 pb-2 mb-6">
                Recherches individuelles
            </h1>
            <div className="h-1 w-12 bg-orange-500 mb-6"></div>

            {/* Search and Filters */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
              <h5 className="text-lg font-semibold mb-4">Recherche</h5>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <select
                  value={selectedType}
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                    setSelectedYear("Sélectionnez l’année");
                    setShowEtude(false);
                  }}
                  className="w-full md:w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  {Object.keys(etudesByCategory).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full md:w-1/4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option>Sélectionnez l’année</option>
                  {[...new Set(Object.keys(etudesByCategory[selectedType] || {}))].map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <Button
                  onClick={handleShowEtude}
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
                >
                  Afficher
                </Button>
              </div>
            </div>

            {/* Category Links */}
            {/* <div className="mb-6">
              {Object.keys(etudesByCategory).map((cat, index) => (
                <div
                  key={index}
                  className="flex items-center border rounded-lg p-3 mb-2 hover:bg-gray-50 transition"
                >
                  <Search className="w-5 h-5 text-gray-600 mr-2" />
                  <Link
                    href={`/recherches/category/${index + 1}`}
                    className="text-blue-600 hover:underline"
                  >
                    {cat}
                  </Link>
                </div>
              ))}
            </div> */}

            {/* Studies Section */}
            {showEtude && (
              <section className="mt-8">
                {currentEtude.map((etu, index) => (
                  <div key={index} className="rounded border border-gray-200 py-3 px-4 mb-4">
                    <div className="flex items-center">
                      <h5 className="text-lg font-semibold text-orange-500 mr-2">{etu.date}</h5>
                      <FileText className="w-5 h-5 mr-2 text-gray-800" />
                      <h5 className="text-lg font-semibold text-gray-800">{etu.title}</h5>
                    </div>
                    <div className="flex items-center mt-2">
                      <Image
                        src="/images/pdf.png"
                        width={32}
                        height={40}
                        className="shadow-sm"
                        alt="PDF icon"
                      />
                      <a
                        href={etu.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-4"
                      >
                        Télécharger le pdf
                      </a>
                    </div>
                  </div>
                ))}
              </section>
            )}

        
         
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Actualités Infos</h4>
              {newsItems.map((news, index) => (
                <div key={index} className="flex py-3 border-b last:border-b-0">
                  <div>
                    <h6 className="mb-2">
                      <a href={news.link} className="text-blue-600 hover:underline">
                        {news.title}
                      </a>
                    </h6>
                    <p className="text-gray-600 text-sm">{news.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}