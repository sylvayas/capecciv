"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MainNav } from "@/components/main-nav";
import { Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export function Header() {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const pathname = usePathname();

 useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Affiche le header uniquement si on est VRAIMENT tout en haut (0 ou très proche)
    if (currentScrollY <= 5) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const isHomePage = pathname === "/";
  const barColor = isHomePage ? "bg-green-700" : "bg-orange-400";

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 transform ${
          showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="bg-white shadow-sm flex flex-col transition-all duration-500 ease-in-out">
          {/* InfoBar visible seulement si header visible */}
          {showHeader && (
            <div
              className={`${barColor} text-white flex items-center justify-end px-4 sm:px-6 lg:px-8 h-10 overflow-hidden transition-all duration-500 ease-in-out`}
            >
              <div className="flex items-center space-x-6 flex-wrap md:flex-nowrap">
                <div className="w-5" />
                <a
                  href="mailto:infos@capec-ci.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm whitespace-nowrap"
                >
                  infos@capec-ci.org
                </a>
                <p className="text-xs whitespace-nowrap mt-1">(+225) 27 22 44 41 24</p>
                <Link href="https://www.facebook.com/share/1EPYzPPHZ8/" target="_blank">
                  <Facebook className="bg-white text-green-700 rounded-lg w-8 h-8 p-[2px]" />
                </Link>
              </div>
            </div>
          )}
          <div className="border-b border-b-ci-green transition-all duration-500">
            <div className="container flex flex-col items-center py-2">
              <MainNav />
            </div>
          </div>
        </div>
      </header>

      {!isHomePage && (
        <section className="relative w-full bg-gray-900">
          <div className="px-4 relative h-[315px] p-4 max-w-[1400px]">
            <div className="relative z-[2] flex flex-col md:flex-row md:gap-x-8 justify-between h-[320px] py-6 px-4 sm:py-8 lg:px-8"></div>
            <Image
              src="/images/transport/camion_transport.jpg"
              alt="Vue d'un espace de travail moderne"
              fill
              className="absolute inset-0 object-cover w-full h-full"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
          </div>
        </section>
      )}
    </>
  );
}
