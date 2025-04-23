"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Importer usePathname
import { MainNav } from "@/components/main-nav";
import { Facebook } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const pathname = usePathname(); // Obtenir le chemin actuel

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY: number = window.scrollY;
      setIsAtTop(currentScrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Vérifier si on est sur la page d'accueil
  const isHomePage = pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full h-[132px] border-b border-b-ci-green bg-white shadow-sm">
      {/* Afficher la div verte uniquement sur la page d'accueil */}
      {isHomePage && (
        <div
          className={`bg-green-700 w-full h-10 text-white flex items-center px-32 transition-all duration-300 ${
            isAtTop ? "opacity-100 h-10" : "opacity-0 h-0"
          }`}
        >
          Eclairer la politique économique et renforcer les capacités
          <div className="ml-auto flex flex-row space-x-4">
            <p>(+225) 27 22 44 41 24</p>
            <div>
              <Link href={"https://www.facebook.com/share/1EPYzPPHZ8/"} target="_blank">
                <Facebook className="bg-orange-400 text-green-700 rounded-lg" />
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* Menu/logo, toujours visible */}
      <div className="container flex h-12 items-center transition-all duration-300">
        <div className="flex flex-col">
          <MainNav />
        </div>
      </div>
    </header>
  );
}