"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown, Facebook, Linkedin, Youtube } from "lucide-react";
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

  const isHomePage = pathname === "/";
  const barColor = isHomePage ? "bg-green-700" : "bg-orange-400";

  // Determine the current page title
  const getCurrentPageTitle = () => {
    for (const item of navItems) {
      if (item.href === pathname) return `Accueil / ${item.title}`;
      if (item.submenu) {
        for (const subItem of item.submenu) {
          if (subItem.href === pathname) return `Accueil / ${subItem.title}`;
        }
      }
    }
    return ""; // Fallback title
  };

  const currentPageTitle = getCurrentPageTitle();

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {/* Colored Info Bar - Shown on all pages */}
      <div
        className={`${barColor} text-white flex h-10 w-full items-center justify-end overflow-hidden px-4 transition-all duration-500 ease-in-out sm:px-6 lg:px-8`}
      >
        <div className="flex items-center space-x-6 flex-wrap md:flex-nowrap">
          <div className="w-5" />
          <a
            href="mailto:infos@capec-ci.org"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-sm"
          >
            infos@capec-ci.org
          </a>
          <p className="mt-1 whitespace-nowrap text-xs">(+225) 27 22 44 41 24</p>
         <div className="flex gap-2">
           <Link href="https://www.facebook.com/share/1EPYzPPHZ8/" target="_blank">
            <Facebook className="h-7 w-7 rounded-xl bg-white p-[2px] text-green-700" />
          </Link>
           <Link href="https://www.linkedin.com/in/cellule-d-analyse-de-politiques-economiques-du-cires-3993b0238/">
            <Linkedin
              className="h-7 w-7 rounded-xl  bg-white  p-[4px] text-green-700 transform hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <Link href="https://www.youtube.com/@capeccotedivoire8917">
            <Youtube
              className="h-7 w-7 rounded-xl bg-white p-[4px] text-green-700 transform hover:scale-105 transition-transform duration-300"
            />
          </Link>
         </div>
        </div>
      </div>

      {/* Logo and Mobile Menu Button Container */}
      <div className="w-full flex flex-col items-center px-4 py-2">
        <Link href="/" className="flex items-center">
          <div className="relative flex h-[140px] w-[136px] items-center justify-center overflow-hidden rounded-sm">
            <Image
              src="/images/logocapec.png"
              alt="CAPEC Logo"
              width={136}
              height={136}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden self-end">
          <MobileNav />
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden items-center space-x-8 rounded-md bg-white/90 px-4 py-2 md:flex">
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
                    "flex items-center py-1.5 text-base font-medium transition-colors hover:text-ci-orange",
                    isActive ? "" : "text-foreground"
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
                              isSubActive ? "bg-ci-green text-white" : "text-gray-700 hover:text-white"
                            )}
                            role="menuitem"
                          >
                            <span
                              className={cn(
                                "absolute inset-0 bg-ci-green ease-out",
                                isSubActive
                                  ? "scale-x-100"
                                  : "scale-x-0 group-hover/item:scale-x-100"
                              )}
                              aria-hidden="true"
                            />
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
                "py-1.5 text-base font-medium transition-colors hover:text-ci-orange",
                isActive ? "" : "text-foreground"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>

      <hr className="w-full border-solid border-green-700" />

      {/* Section with background image - Hidden on homepage */}
      {!isHomePage && (
        <section className="relative w-full ">
          <div className="relative mx-auto h-[320px] max-w-[1800px] px-4 py-4">
            <Image
              src="/images/salles confe.png"
              alt="Vue d'un espace de travail moderne"
              fill
              className="absolute inset-0 h-full w-full object-cover"
              quality={100}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 to-black/50" />
            <div className="absolute bottom-36 left-1/2 -translate-x-1/2 text-white text-center">
              <h2 className="text-2xl font-bold">{currentPageTitle}</h2>
            </div>
          </div>
        </section>
      )}
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
                        isActive ? "text-ci-orange" : "text-foreground"
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
                                  ? "bg-ci-green text-white"
                                  : "text-foreground hover:bg-ci-green hover:text-white"
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