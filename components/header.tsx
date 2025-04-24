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
        className={`bg-green-700 w-full h-10 text-white flex items-center transition-all duration-300 ${
          isAtTop ? "opacity-100 h-10" : "opacity-0 h-0"
        } overflow-hidden`}
      >
        <div className="w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 lg:px-16">
          {/* Text content */}
          <p className="text-sm sm:text-base text-center sm:text-left">
            Éclairer la politique économique et renforcer les capacités
          </p>

          {/* Contact and Social Media */}
          <div className="flex flex-row items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
            <p className="text-xs sm:text-sm whitespace-nowrap">(+225) 27 22 44 41 24</p>
            <Link href="https://www.facebook.com/share/1EPYzPPHZ8/" target="_blank">
              <Facebook
                className="bg-orange-400 text-green-700 rounded-lg w-6 h-6 sm:w-8 sm:h-8 p-1"
              />
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