"use client";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Search, MessageCircle } from "lucide-react";
import { useState } from "react";

interface Etude {
  title: string;
  date: string;
  pdfLink: string;
}

export default function EtudePage() {
  const [selectedType, setSelectedType] = useState("Analyse d'impact économique");
  const [selectedYear, setSelectedYear] = useState("Sélectionnez l’année");
  const [showEtude, setShowEtude] = useState(false);
  const [currentEtude, setCurrentEtude] = useState<Etude[]>([]);

  // Définir les études par catégorie et par année
  const etudesByCategory: { [key: string]: { [key: string]: Etude[] } } = {
    "Analyse d'impact économique": {
      "2020": [
        {
          title: "CRIME, SELF PROTECTION AND BUSINESS GROWTH IN COTE D'IVOIRE",
          date: "2020",
          pdfLink: "https://capec-ci.org/docs/publications/PED_2013_KIMOU.pdf",
        },
      ],
      "2018": [
        {
          title: "ETUDE DE L'IMPACT DES INVESTISSEMENTS DANS LES SECTEURS DES HYDROCARBURES ET DE L'ENERGIE SUR L'ECONOMIE IVOIRIENNE",
          date: "2018",
          pdfLink: "https://capec-ci.org/docs/etudes/Ry_sumy_synthy_tique_etude_d_impact_des_investissements_dans_les_secteurs_des_hydrocarbures_et_de_l_energie_su_l_y_conomie_ivoirienne_MPEDER_1_.pdf",
        },
      ],
      "2017": [
        {
          title: "Impacts sanitaire et financier du financement de la lutte contre le SIDA en Côte d'Ivoire : Modélisation de Scénarii de financement.",
          date: "2017",
          pdfLink: "https://capec-ci.org/docs/etudes/Impacts_sanitaire_et_financier_du_financement_de_la_lutte_contre_le_SIDA_en_Cy_te_d_Ivoire_1_.pdf",
        },
      ],
      "2016": [
        {
          title: "Etude d'impact des radios de proximité en côte d'ivoire",
          date: "2016",
          pdfLink: "https://capec-ci.org/docs/etudes/Ry_sumy_Etude_d_Aoimpact_des_radios_de_proximity_en_cy_te_d_Aoivoire_HACA_2016_1_.pdf",
        },
      ],
      "2015": [
        {
          title: "ETUDE D'IMPACT SOCIO-ECONOMIQUE DU RETOUR DE LA BANQUE AFRICAINE DE DEVELOPPEMENT EN COTE D'IVOIRE",
          date: "2015",
          pdfLink: "https://capec-ci.org/docs/etudes/Ry_sumy_Etude_d_impact_socio_y_conomique_du_retour_de_la_banque_africaine_de_dy_veloppement_en_Cy_te_d_Ivoire_1_.pdf",
        },
      ],
    },
    "Institution et gouvernance": {
      "2017": [
        {
          title: "Rapport national d'auto évaluation Gouvernance d'entreprise",
          date: "2017",
          pdfLink: "https://capec-ci.org/docs/etudes/Gouvernance_des_entreprise_Rapport_national_d_Aoauto_y_valuation_1_.pdf",
        },
      ],
      "2016": [
        {
          title: "Emergence Gouvernance Et Planification",
          date: "2016",
          pdfLink: "https://capec-ci.org/docs/etudes/ETUDE_EMERGENCE_GOUVERNANCE_ET_PLANIFICATION_version_finale.pdf",
        },
      ],
      "2015": [
        {
          title: "INDICATEURS DE CAPACITéS EN AFRIQUE 2015",
          date: "2015",
          pdfLink: "https://capec-ci.org/docs/etudes/Conclusion_INDICATEURS_DES_CAPACITES_EN_AFRIQUE_RAPPORT_D_EVALUATION_DES_POLITIQUES_ET_INSTITUTIONS.pdf",
        },
      ],
      "2014": [
        {
          title: "GOUVERNANCE ET PLANIFICATION : QUEL ROLE DANS L'EMERGENCE DES PAYS",
          date: "2014",
          pdfLink: "https://capec-ci.org/docs/etudes/Ry_sumy_Gouvernance_et_planification_quel_ry_le_dans_l_y_mergence_des_pays_1_.pdf",
        },
      ],
      "2013": [
        {
          title: "STRATEGIES D'AMELIORATION DES INDICATEURS DE GOUVERNANCE EN COTE D'IVOIRE",
          date: "2013",
          pdfLink: "https://capec-ci.org/docs/etudes/Ry_sumy_Straty_gies_d_Amy_lioration_des_Indicateurs_de_Gouvernance_en_Cy_te_d_Ivoire.pdf",
        },
      ],
    },
    "Transformation structurelle, croissance, développement et financement de l'économie": {
      "2017": [
        {
          title: "STRATEGIE NATIONALE DE DIALOGUE PUBLIC-PRIVE (SNDPP) 2016-2020 EN COTE D'IVOIRE",
          date: "2017",
          pdfLink: "https://capec-ci.org/docs/etudes/Ry_sumy_Straty_gie_Nationale_de_Dialogue_Public_Privy_SNDPP_2016_2020_1_.pdf",
        },
      ],
      "2015": [
        {
          title: "PROFIL PAYS COTE D'IVOIRE",
          date: "2015",
          pdfLink: "https://capec-ci.org/docs/etudes/Ry_sumy_PROFIL_PAYS_COTE_D_IVOIRE_2015_CEA_1_.pdf",
        },
      ],
      "2014": [
        {
          title: "EMERGENCE ET DEVELOPPEMENT HUMAIN DURABLE",
          date: "2014",
          pdfLink: "https://capec-ci.org/docs/etudes/Emergence_et_Dy_veloppement_Humain_Durable_1_.pdf",
        },
      ],
    },
    "Finance publique et convergence économique": {
      "2017": [
        {
          title: "ELABORATION DE LA STRATEGIE NATIONALE DE DEVELOPPEMENT DES STATISTIQUES (SNDS) 2017-2021 DE LA COTE D'IVOIRE",
          date: "2017",
          pdfLink: "https://capec-ci.org/docs/etudes/Ry_sumy_ELABORATION_DE_LA_STRATEGIE_NATIONALE_DE_DEVELOPPEMENT_DES_STATISTIQUES.pdf",
        },
      ],
      "2016": [
        {
          title: "REVUE DES DEPENSES PUBLIQUES AGRICOLES (SOMMAIRE)",
          date: "2016",
          pdfLink: "https://capec-ci.org/docs/etudes/RESUME_REVUE_DES_DEPENSES_PUBLIQUES_AGRICOLES.pdf",
        },
      ],
      "2015": [
        {
          title: "ANALYSE DIAGNOSTIQUE DES LOYERS DE L'ETAT ET PROPOSITION D'UNE STRATEGIE DE POLITIQUE PUBLIQUE IMMOBILIERE COMPATIBLE AVEC LE CONTEXTE BUDGETAIRE",
          date: "2015",
          pdfLink: "https://capec-ci.org/docs/etudes/RESUME_ANALYSE_DIAGNOSTIC_DES_LOYERS_DE_L_ETAT_ET_PROPOSITION_D_UNE_STRATEGIE_DE_POLITIQUE_PUBLIQUE_IMMOBILIERE.pdf",
        },
      ],
      "2014": [
        {
          title: "Evaluation des régies financières en Côte d'Ivoire",
          date: "2014",
          pdfLink: "https://capec-ci.org/docs/etudes/Ry_sumy_Evaluation_des_Ry_gies_financiy_res_en_Cy_te_d_Ivoire.pdf",
        },
      ],
    },
    "Entreprenariat et modèles d'affaire inclusifs": {
      "2016": [
        {
          title: "Etude de faisabilité pour la mise en place du statut de l'entreprenant en Côte d'Ivoire",
          date: "2016",
          pdfLink: "https://capec-ci.org/docs/etudes/Ry_sumy_Etude_de_faisability_pour_la_mise_en_place_du_statut_de_l_Aoentreprenant_en_Cy_te_d_Ivoire.pdf",
        },
      ],
      "2015": [
        {
          title: "PARTENARIAT ETAT-SECTEUR PRIVE",
          date: "2015",
          pdfLink: "https://capec-ci.org/docs/etudes/Ry_sumy_Partenariat_ETAT_SECTEUR_PRIVE.pdf",
        },
      ],
    },
    "Pauvrété, inégalité et rédistribution": {
      "2016": [
        {
          title: "Etude de faisabilité pour la mise en place du statut de l'entreprenant en Côte d'Ivoire",
          date: "2016",
          pdfLink: "https://capec-ci.org/docs/etudes/Ry_sumy_Etude_de_faisability_pour_la_mise_en_place_du_statut_de_l_Aoentreprenant_en_Cy_te_d_Ivoire.pdf",
        },
      ],
      "2015": [
        {
          title: "PARTENARIAT ETAT-SECTEUR PRIVE",
          date: "2015",
          pdfLink: "https://capec-ci.org/docs/etudes/Ry_sumy_Partenariat_ETAT_SECTEUR_PRIVE.pdf",
        },
      ],
    },
    "Agriculture, Nutrition et Sécurité alimentaire, Changement Climatique et ressources Naturelles": {
      "2018": [
        {
          title: "Examen stratégique nationale FAIM ZERO Côte d'Ivoire",
          date: "2018",
          pdfLink: "https://capec-ci.org/docs/etudes/Ry_sumy_Examen_straty_gique_national_Faim_Zy_ro_Cy_te_d_Ivoire.pdf",
        },
      ],
      "2015": [
        {
          title: "Diagnostic du Secteur des Pêches : Efficacité Economique et Environnementale de l'Aménagement des Pêches et des Droits",
          date: "2015",
          pdfLink: "https://capec-ci.org/docs/etudes/Ry_sumy_Diagnostic_du_Secteur_des_Py_ches.pdf",
        },
      ],
      "2012": [
        {
          title: "L'accès à l'eau potable: bilan et perspectives",
          date: "2012",
          pdfLink: "https://capec-ci.org/docs/etudes/conclusion_et_recommandations_L_accy_s_yy_l_eau_potable_bilan_et_perspectives.pdf",
        },
      ],
    },
    "Suivi et évaluation de projet": {
      "2010": [
        {
          title: "Les problèmes énergétiques en CI: bilan et perspectives (1960-2060)",
          date: "2010",
          pdfLink: "https://capec-ci.org/docs/etudes/Conclus_et_Rec_Les_probly_mes_y_nergy_tiques_en_Cy_te_d_Ivoire_Bilan_et_perspectives_1960_2060_Cinquentenaire_2010.pdf",
        },
      ],
    },
  };

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
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto mt-24 mb-24 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Études commanditées Section */}
            <div className="lg:w-2/3 bg-white rounded-lg p-6 shadow-sm">
              <section className="mb-10">
                <h1 className="text-2xl font-bold text-gray-900 border-b border-orange-500 pb-2 mb-8">
                  Études commanditées
                </h1>
                <div className="h-1 w-12 bg-orange-500 mb-6"></div>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <select
                        value={selectedType}
                        onChange={(e) => {
                          setSelectedType(e.target.value);
                          setSelectedYear("Sélectionnez l’année");
                          setShowEtude(false);
                        }}
                        className="w-full sm:w-96 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 p-2"
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
                        className="w-full sm:w-96 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 p-2"
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
                        className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300"
                      >
                        Afficher
                        <Search className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
                            width={30}
                            height={30}
                            className="shadow-sm"
                            alt="PDF icon"
                          />
                          <a
                            href={etu.pdfLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:underline ml-4"
                          >
                            Télécharger le pdf
                          </a>
                        </div>
                      </div>
                    ))}
                  </section>
                )}
                {/* Comptes rendus d'activités Section */}
                <section className="mt-36">
                  <div className="text-center mb-6">
                    <h5 className="text-sm font-semibold text-gray-600 uppercase mb-3">Activités</h5>
                    <h2 className="text-xl font-bold text-gray-900">Comptes rendus d'activités</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    
                      <div className="p-4">
                        <h6 className="text-orange-500 font-semibold text-sm mb-2">21 Sept, 2020</h6>
                        <a
                          href="https://capec-ci.org/seminaires/seminaire_view-18.html"
                          className="text-gray-900 font-semibold text-base hover:underline mb-2 block"
                        >
                          METHODES ET TECHNIQUES MARKETING : DES CADRES DU BNETD A L'ECOLE DE LA CAPEC
                        </a>
                        <div className="flex items-center text-sm text-gray-600">
                          <MessageCircle className="w-4 h-4 mr-2 text-orange-500" />
                          <span>3 participants</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                   
                      <div className="p-4">
                        <h6 className="text-orange-500 font-semibold text-sm mb-2">09 Avr, 2019</h6>
                        <a
                          href="https://capec-ci.org/seminaires/seminaire_view-17.html"
                          className="text-gray-900 font-semibold text-base hover:underline mb-2 block"
                        >
                          Un atelier de méthodologie et d'écriture scientifique s'est tenu à Abidjan du 1er au 05 avril
                        </a>
                        <div className="flex items-center text-sm text-gray-600">
                          <MessageCircle className="w-4 h-4 mr-2 text-orange-500" />
                          <span>50 participants</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  
                      <div className="p-4">
                        <h6 className="text-orange-500 font-semibold text-sm mb-2">12 Juill, 2017</h6>
                        <a
                          href="https://capec-ci.org/seminaires/seminaire_view-15.html"
                          className="text-gray-900 font-semibold text-base hover:underline mb-2 block"
                        >
                          DEVELOPPEMENT INDUSTRIEL: Des cadres outillés à l'Analyse de filières et aux techniques d'élaboration et de mise en œuvre
                        </a>
                        <div className="flex items-center text-sm text-gray-600">
                          <MessageCircle className="w-4 h-4 mr-2 text-orange-500" />
                          <span>101 participants</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Études list (displayed when Afficher is clicked) */}
                
              </section>
            </div>

            {/* Actualités Récentes Section */}
            <div className="lg:w-1/3 h-full bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-12">Actualités Récentes</h4>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h6 className="text-base font-semibold mb-1">
                    <a
                      className="text-blue-600 hover:underline"
                      href="https://capec-ci.org/news/details_news-121.html"
                    >
                      CELEBRATION DES 30 ANS DE LA CAPEC
                    </a>
                  </h6>
                  <p className="text-sm text-gray-600">10 Août, 2024</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h6 className="text-base font-semibold mb-1">
                    <a
                      className="text-blue-600 hover:underline"
                      href="https://capec-ci.org/news/details_news-117.html"
                    >
                      CONFERENCE DE HAUT NIVEAU
                    </a>
                  </h6>
                  <p className="text-sm text-gray-600">06 Mai, 2022</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h6 className="text-base font-semibold mb-1">
                    <a
                      className="text-blue-600 hover:underline"
                      href="https://capec-ci.org/news/details_news-115.html"
                    >
                      RECRUTEMENT DE DEUX (2) CHERCHEURS JUNIORS...
                    </a>
                  </h6>
                  <p className="text-sm text-gray-600">22 Avr, 2022</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h6 className="text-base font-semibold mb-1">
                    <a
                      className="text-blue-600 hover:underline"
                      href="https://capec-ci.org/news/details_news-116.html"
                    >
                      RECRUTEMENT D'UN COMPTABLE
                    </a>
                  </h6>
                  <p className="text-sm text-gray-600">22 Avr, 2022</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h6 className="text-base font-semibold mb-1">
                    <a
                      className="text-blue-600 hover:underline"
                      href="https://capec-ci.org/news/details_news-114.html"
                    >
                      Journée Internationale des Droits de la Femme
                    </a>
                  </h6>
                  <p className="text-sm text-gray-600">08 Mars, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}