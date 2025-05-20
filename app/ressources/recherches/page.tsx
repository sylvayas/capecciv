"use client";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, FileText, Users, BarChart, Search } from "lucide-react";
import { useState } from "react";
import { MainNav } from "@/components/main-nav";

interface Study {
  year: number;
  title: string;
  author: string;
  pdf: string;
  category: string;
}

interface News {
  id: number;
  title: string;
  date: string;
  image: string;
  link: string;
}

export default function RecherchesPage() {
  const [category, setCategory] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [filteredStudies, setFilteredStudies] = useState<Study[]>([]);

  const studies: Study[] = [
    {
      year: 2013,
      title: "Remittances impact on labor supply in Côte d'Ivoire",
      author: "CAPEC",
      pdf: "#",
      category: "Analyse d'impact économique",
    },
    {
      year: 2009,
      title:
        "Analyse de l'impact de la crise sur le secteur de l'éducation dans les zones Centre, Nord, Ouest.",
      author: "",
      pdf: "#",
      category: "Analyse d'impact économique",
    },
  ];

  const categories = [
    "Analyse d'impact économique",
    "Institution et gouvernance",
    "Transformation structurelle, croissance, développement et financement de l'économie",
    "Finance publique et convergence économique",
    "Commerce international, intégration régionale et compétitivité",
    "Economie du crime et de la violence",
    "Entreprenariat et modèles d'affaire inclusifs",
    "Pauvrété, inégalité et rédistribution",
    "Agriculture, Nutrition et Sécurité alimentaire, Changement Climatique et ressources Naturelles",
    "Suivi et évaluation de projet",
    "Modèlisation économique",
  ];

  const newsItems: News[] = [
    {
      id: 121,
      title: "CELEBRATION DES 30 ANS DE LA CAPEC",
      date: "10 Août, 2024",
      image: "https://capec-ci.org/images/news/thumbs/30_ans_de_la_CAPEC.jpeg",
      link: "/activites/actualites",
    },
    {
      id: 117,
      title: "CONFERENCE DE HAUT NIVEAU",
      date: "06 Mai, 2022",
      image: "https://capec-ci.org/images/news/thumbs/crea_conference_UFR-SEG_(2)_(2).jpg",
      link: "/activites/actualites",
    },
    {
      id: 115,
      title: "RECRUTEMENT DE DEUX (2) CHERCHEURS JUNIORS...",
      date: "22 Avr, 2022",
      image: "https://capec-ci.org/images/news/thumbs/recrute.jpg",
      link: "/activites/actualites",
    },
   
  ];

  const handleFilter = () => {
    const filtered = studies.filter((study) => {
      const matchesCategory = category ? study.category === category : true;
      const matchesYear = year ? study.year.toString() === year : true;
      return matchesCategory && matchesYear;
    });
    setFilteredStudies(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <MainNav />

      {/* Main Content */}
      <main className="p-6 max-w-7xl mx-auto mt-16 mb-24 flex-grow">
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
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full md:w-1/2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Sélectionner une catégorie</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full md:w-1/4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Sélectionner l'année</option>
                  {Array.from({ length: 31 }, (_, i) => 2025 - i).map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
                <Button
                  onClick={handleFilter}
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
                >
                  Afficher
                </Button>
              </div>
            </div>

            {/* Category Links */}
            <div className="mb-6">
              {categories.map((cat, index) => (
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
            </div>

            {/* Studies Section */}
            <h2 className="text-xl font-semibold text-orange-500 mb-4">
              Analyse d'impacts économiques et sociaux
            </h2>

            <div className="space-y-4">
              {(filteredStudies.length > 0 ? filteredStudies : studies).map(
                (study, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md border-l-8 border-blue-600 flex justify-between items-center"
                  >
                    <div className="flex-1">
                      <p className="text-orange-500 font-semibold">
                        {study.year}
                      </p>
                      <p className="text-gray-800 font-medium">{study.title}</p>
                      {study.author && (
                        <p className="text-gray-600">
                          <span className="font-semibold">Auteur :</span>{" "}
                          {study.author}
                        </p>
                      )}
                    </div>
                    <a
                      href={study.pdf}
                      className="text-red-500 font-semibold hover:underline whitespace-nowrap"
                    >
                      Télécharger le pdf
                    </a>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Actualités Récentes</h4>
              {newsItems.map((news) => (
                <div
                  key={news.id}
                  className="flex py-3 border-b last:border-b-0"
                >
                  
                  <div>
                    <h6 className="mb-2">
                      <a
                        href={news.link}
                        className="text-blue-600 hover:underline"
                      >
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