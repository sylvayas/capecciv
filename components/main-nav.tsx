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
  const isRootPath = pathname === "/";
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="shadow-sm w-full flex flex-col">
      {/* Top bar: social icons and paragraph */}
      <div
        className={cn(
          "w-full flex flex-col sm:flex-row items-center px-2 sm:px-4 py-1 sm:py-2 gap-1 sm:gap-4",
          isRootPath ? "bg-green-700" : "bg-orange-500"
        )}
      >
        {/* Logo for mobile (centered) */}
        <div className="flex sm:hidden justify-center w-full">
          <Link href="/">
            <Image
              src="/images/logocapec.png"
              alt="CAPEC Logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Paragraph (root path only) and social icons */}
        <div className="flex w-full items-center justify-between sm:justify-end px-2 sm:px-0">
          {isRootPath && (
            <p className="text-white italic text-xs sm:text-sm md:text-base sm:ml-auto max-w-[50%] sm:max-w-none break-words">
              la recherche au service du développement
            </p>
          )}
          <div className={cn("flex items-center gap-2 sm:gap-3", isRootPath ? "ml-auto sm:ml-4" : "sm:ml-auto")}>
            <Link href="https://www.facebook.com/share/1EPYzPPHZ8/" target="_blank">
              <Facebook
                className={cn(
                  "h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6",
                  isRootPath ? "text-white hover:text-ci-orange" : "text-white hover:text-white"
                )}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/cellule-d-analyse-de-politiques-economiques-du-cires-3993b0238/"
              target="_blank"
            >
              <Linkedin
                className={cn(
                  "h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6",
                  isRootPath ? "text-white hover:text-ci-orange" : "text-white hover:text-white"
                )}
              />
            </Link>
            <Link href="https://www.youtube.com/@capeccotedivoire8917" target="_blank">
              <Youtube
                className={cn(
                  "h-4 w-4 sm:h-5 md:h-6 sm:w-5 md:w-6",
                  isRootPath ? "text-white hover:text-ci-orange" : "text-white hover:text-white"
                )}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={cn(
          "w-full text-black flex items-center min-h-[100px] sm:min-h-[120px] md:min-h-[150px] px-2 sm:px-4 md:px-8",
          isRootPath ? "" : "justify-center"
        )}
      >
        {/* Logo for desktop */}
        <div className="hidden sm:flex absolute top-0 left-2 sm:left-4 h-[150px] sm:h-[180px] w-[180px] sm:w-[220px] items-center justify-center overflow-visible">
          <Link href="/">
            <Image
              src="/images/logocapec.png"
              alt="CAPEC Logo"
              width={140}
              height={140}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="sm:hidden flex justify-end w-full pr-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center space-x-1 text-sm sm:text-base font-medium text-black"
          >
            <span>Menu</span>
            <div className="flex h-4 w-5 sm:h-5 sm:w-6 flex-col justify-between">
              <span
                className={cn(
                  "h-0.5 w-full transform bg-black transition duration-300",
                  mobileMenuOpen ? "translate-y-1.5 sm:translate-y-2 rotate-45" : ""
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-black transition duration-300",
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full transform bg-black transition duration-300",
                  mobileMenuOpen ? "-translate-y-1.5 sm:-translate-y-2 -rotate-45" : ""
                )}
              />
            </div>
          </button>
        </div>

        {/* Desktop menu */}
        <div
          className={cn(
            "hidden sm:flex flex-wrap items-center justify-center gap-1 sm:gap-2 md:gap-6 w-full max-w-screen-xl px-4",
            isRootPath ? "ml-[220px] mr-4" : ""
          )}
        >
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
                      "flex items-center px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base font-medium transition-colors hover:text-orange-300 rounded-md",
                      isActive ? "text-black" : ""
                    )}
                  >
                    {item.title}
                    <ChevronDown className="ml-0.5 sm:ml-1 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                  <div
                    className={cn(
                      "absolute left-0 top-full z-50 pt-1 sm:pt-2",
                      hoverItem === item.title ? "block" : "hidden group-hover:block"
                    )}
                  >
                    <div className="w-48 sm:w-56 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {item.submenu.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className={cn(
                                "relative block px-3 sm:px-4 py-1 sm:py-1.5 text-sm sm:text-base transition-all duration-200 group/item",
                                isSubActive ? "text-black" : "text-gray-700 hover:text-green-700"
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
                  "px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base font-medium transition-colors hover:text-orange-300 rounded-md",
                  isActive ? "text-black" : ""
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-[100px] right-0 z-50 w-64 sm:w-64 border-t border-gray-200 bg-white px-2 sm:px-4 py-2 sm:py-4 shadow-2xl rounded-md">
          <nav className="flex flex-col space-y-1 sm:space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              if (item.submenu) {
                return (
                  <div key={item.title} className="space-y-0.5 sm:space-y-1">
                    <button
                      onClick={() => setOpenMobileSubmenu(openMobileSubmenu === item.title ? null : item.title)}
                      className={cn(
                        "flex w-full items-center justify-between text-sm sm:text-base font-medium transition-colors hover:text-ci-orange py-0.5 sm:py-1",
                        isActive ? "text-black" : "text-foreground"
                      )}
                    >
                      {item.title}
                      <ChevronDown
                        className={cn(
                          "h-3 w-3 sm:h-4 sm:w-4 transition-transform",
                          openMobileSubmenu === item.title ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    {openMobileSubmenu === item.title && (
                      <div className="space-y-0.5 sm:space-y-1 border-l-2 border-gray-200 pl-2 sm:pl-4">
                        {item.submenu.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className={cn(
                                "relative block rounded px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-base font-medium transition-colors group/mobile",
                                isSubActive
                                  ? "text-black"
                                  : "text-foreground hover:text-white"
                              )}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenMobileSubmenu(null);
                              }}
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
                    "py-0.5 sm:py-1 text-sm sm:text-base font-medium transition-colors hover:text-ci-orange",
                    isActive ? "text-ci-orange" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
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