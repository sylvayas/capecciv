"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Facebook, Linkedin, Youtube } from "lucide-react";

// Types pour les partenaires 
interface Partner {
  name: string;
  logo: string;
  url: string;
}

// Données des partenaires
const partners: Partner[] = [
  { name: "BNETD", logo: "/images/logobnet.jpg", url: "https://www.bnetd.ci" },
  { name: "Université Félix Houphouët-Boigny", logo: "/images/logouni.jpg", url: "https://www.univ-fhb.edu.ci" },
  { name: "CIRES", logo: "/images/partenaire_de_la_CAPEC/LOGO CIRES.jpg", url: "https://www.cires.info" },
  { name: "ACBF", logo: "/images/partenaire_de_la_CAPEC/acbflogo.jpg", url: "https://www.acbf-pact.org" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormStatus("success");
      setEmail("");
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Partenaires */}
        <section className="mb-12">
          <h3 className="text-sm font-bold uppercase mb-6 text-center md:text-left text-ci-orange">
            Nos partenaires institutionnels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {partners.map((partner, index) => (
              <div key={index} className="group flex justify-center">
                <Link
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                  aria-label={`Visiter le site de ${partner.name}`}
                >
                  <div className="relative h-20 w-20 mb-3 transform group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      fill
                      loading="lazy"
                      className="object-contain group-hover:opacity-90 transition-opacity duration-300"
                      sizes="(max-width: 768px) 50vw, 160px"
                    />
                  </div>
                  <span className="text-sm text-gray-300 text-center font-medium group-hover:text-ci-orange transition-colors duration-300">
                    {partner.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Contenu principal */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-20">
          {/* Bloc logo et description */}
          <div className="flex flex-col gap-4 md:w-1/3 mb-8">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logocapec.png"
                alt="Logo du CAPEC"
                width={100}
                height={100}
                priority
                loading="eager"
              />
              <span className="text-xl font-semibold text-ci-orange">CAPEC</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              La Cellule d'Analyse de Politiques Économiques du CIRES (CAPEC) produit des analyses pour appuyer la prise de décision en matière de développement en Côte d'Ivoire.
            </p>
          </div>

          {/* Bloc newsletter */}
          <div className="md:w-1/3">
            <h3 className="text-sm font-bold uppercase mb-2">Abonnez-vous à notre infolettre</h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
              aria-describedby="newsletter-description"
            >
              <input
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-ci-orange w-full"
                required
                aria-label="Adresse email pour l'infolettre"
              />
              <button
                type="submit"
                className="bg-ci-orange text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
                disabled={formStatus !== "idle"}
              >
                S'abonner
              </button>
            </form>
            <p
              id="newsletter-description"
              className={`text-xs mt-2 transition-opacity duration-300 ${
                formStatus === "success"
                  ? "text-green-400"
                  : formStatus === "error"
                  ? "text-red-400"
                  : "text-gray-500"
              }`}
            >
              {formStatus === "success"
                ? "Inscription réussie !"
                : formStatus === "error"
                ? "Erreur lors de l'inscription. Réessayez."
                : "Recevez nos dernières mises à jour et publications."}
            </p>
          </div>

          {/* Bloc navigation */}
          <nav aria-label="Navigation secondaire" className="md:w-1/3">
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link href="/activites/rapport" className="hover:text-white transition-colors duration-300">
                Nos réalisations
              </Link>
              <Link href="/ressources/recherches" className="hover:text-white transition-colors duration-300">
                Recherche
              </Link>
              <Link href="/medias/videotheque" className="hover:text-white transition-colors duration-300">
                Nos vidéos
              </Link>
              
            </div>
          </nav>
        
        </div>
         <div className="flex gap-3">
          <Link href="https://www.facebook.com/share/16AVcaiiqa/" target="_blank">
            <Facebook
              className="h-8 w-8 rounded-xl bg-white  p-[4px] text-orange-500 transform hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/cellule-d-analyse-de-politiques-economiques-du-cires-3993b0238/">
            <Linkedin
              className="h-8 w-8 rounded-xl bg-white  p-[4px] text-orange-500 transform hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <Link href="https://www.youtube.com/@capeccotedivoire8917">
            <Youtube
              className="h-8 w-8 rounded-xl bg-white p-[4px] text-orange-500 transform hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500">
          © {year} CAPEC - CIRES. Tous droits réservés.
          <Link href={"https://www.aitech-ci.com/"} target="_blank"> 
           <p className="font-bold text-gray-300 underline">By AITECH-CI</p>
          </Link>
        </div>
       
      </div>
        
    </footer>
  );
}