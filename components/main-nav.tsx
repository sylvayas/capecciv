"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown, Facebook, Linkedin, Youtube, Search } from "lucide-react";
import { navItems } from "./navItems";

export type NavItem = {
  title: string;
  href: string;
  submenu?: NavItem[];
};

export function MainNav() {
  const pathname = usePathname();
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const [showHeader, setShowHeader] = useState<boolean>(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const isScrollingUp = currentScrollY < lastScrollY;
          setShowHeader(isScrollingUp || currentScrollY <= 5);
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  
      <div className=" shadow-sm w-full flex flex-col">
        {/* Ligne principale : logo, recherche, réseaux sociaux, bouton */}
        <div className=" text-center bg-green-700 w-full flex items-center  px-4 py-2 gap-4">
        <p className=" ml-auto text-white italic">la recherche au service du développement</p>

          {/* Réseaux sociaux */}
          <div className="ml-auto flex items-end gap-3">
            <Link href="https://www.facebook.com/share/1EPYzPPHZ8/" target="_blank">
              <Facebook className="h-6 w-6 text-white hover:text-ci-orange" />
            </Link>
            <Link href="https://www.linkedin.com/in/cellule-d-analyse-de-politiques-economiques-du-cires-3993b0238/" target="_blank">
              <Linkedin className="h-6 w-6 text-white hover:text-ci-orange" />
            </Link>
            <Link href="https://www.youtube.com/@capeccotedivoire8917" target="_blank">
              <Youtube className="h-6 w-6 text-white hover:text-ci-orange" />
            </Link>
          </div>

        
        </div>
        {/* Menu principal sur barre verte */}
        <nav className="w-full text-black flex items-center justify-center min-h-[180px] px-2 md:px-8">
        <Link href="/" className="flex items-center">
            <div className="absolute top-0 left-0 flex h-[180px] w-[220px] items-center justify-center overflow-visible">
              <Image
                src="/images/logocapec.png"
                alt="CAPEC Logo"
                width={170}
                height={170}
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <div className="flex flex-wrap items-center gap-2 md:gap-6 w-full max-w-screen-xl">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              if (item.submenu) {
                return (
                  <div
                    key={item.title}
                    className="group relative"
                    onMouseEnter={() => setHoverItem(item.title)}
                    onMouseLeave={() => setHoverItem(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-3 py-2 text-base font-medium transition-colors  hover:text-orange-300 rounded-md",
                        isActive ? " text-black" : ""
                      )}
                    >
                      {item.title}
                      <ChevronDown className="ml-1 h-5 w-5" />
                    </Link>
                    <div
                      className={cn(
                        "absolute left-0 top-full z-50 pt-2",
                        hoverItem === item.title ? "block" : "hidden group-hover:block"
                      )}
                    >
                      <div className="w-56 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu" aria-orientation="vertical">
                          {item.submenu.map((subItem) => {
                            const isSubActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className={cn(
                                  "relative block px-4 py-1.5 text-base transition-all duration-200 group/item",
                                  isSubActive ? " text-black" : "text-gray-700 hover:text-green-700"
                                )}
                                role="menuitem"
                              >
                                <span className="relative z-10">{subItem.title}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-base font-medium transition-colors  hover:text-orange-300 rounded-md",
                    isActive ? " text-black" : ""
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
 
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 text-base font-medium text-foreground"
      >
        <span>Menu</span>
        <div className="flex h-5 w-6 flex-col justify-between">
          <span
            className={`h-0.5 w-full transform bg-current transition duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-full bg-current transition duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-full transform bg-current transition duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {open && (
        <div className="absolute right-0 top-6 z-50 w-64 border-t border-gray-200 bg-white px-4 py-4 shadow-2xl rounded-md">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

              if (item.submenu) {
                return (
                  <div key={item.title} className="space-y-1">
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className={cn(
                        "flex w-full items-center justify-between text-base font-medium transition-colors hover:text-ci-orange py-1",
                        isActive ? "text-black" : "text-foreground"
                      )}
                    >
                      {item.title}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openSubmenu === item.title ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    {openSubmenu === item.title && (
                      <div className="space-y-1 border-l-2 border-gray-200 pl-4">
                        {item.submenu.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className={cn(
                                "relative block rounded px-3 py-1 text-base font-medium transition-colors group/mobile",
                                isSubActive
                                  ? " text-black"
                                  : "text-foreground  hover:text-white"
                              )}
                              onClick={() => setOpen(false)}
                            >
                              <span
                                className={cn(
                                  "absolute inset-0 bg-ci-green ease-out",
                                  isSubActive
                                    ? "scale-x-100"
                                    : "scale-x-0 group-hover/mobile:scale-x-100"
                                )}
                                aria-hidden="true"
                              />
                              <span className="relative z-10">{subItem.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "py-1 text-base font-medium transition-colors hover:text-ci-orange",
                    isActive ? "text-ci-orange" : "text-foreground"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}