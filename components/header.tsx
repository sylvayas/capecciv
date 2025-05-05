"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MainNav } from "@/components/main-nav";
import { Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY: number = window.scrollY;
      setIsAtTop(currentScrollY <= 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  const barColor = isHomePage ? "bg-green-700" : "bg-orange-400";

  const InfoBar = (
    
    <div
      className={`${barColor} w-full h-10 text-white flex items-center justify-end px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isAtTop ? "opacity-100 h-10" : "opacity-0 h-0"
      } overflow-hidden`}
    >
     <div className="flex items-center space-x-6 flex-wrap md:flex-nowrap">
  <div className="w-5"></div>

  {/* Adresse email */}
  <a
    href="mailto:infos@capec-ci.org"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm whitespace-nowrap"
  >
    infos@capec-ci.org
  </a>

  {/* Numéro de téléphone */}
  <p className="text-xs whitespace-nowrap mt-1">
    (+225) 27 22 44 41 24
  </p>

  {/* Lien Facebook */}
  <Link href="https://www.facebook.com/share/1EPYzPPHZ8/" target="_blank">
    <Facebook className="bg-white text-green-700 rounded-lg w-8 h-8 p-[2px]" />
  </Link>
</div>


    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm flex flex-col">
      {/* InfoBar always at the top */}
      {InfoBar}

      {/* Logo and Menu below */}
      <div className="bg-white border-b border-b-ci-green">
        <div className="container flex flex-col items-center py-2">
          <MainNav />
        </div>
      </div>
    </header>
  );
}