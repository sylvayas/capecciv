"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
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

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Logo centered at the top */}
      <Link href="/" className="flex items-center mb-2 mt-0">
        <div className="relative w-[136px] h-[136px] -mt-2 rounded-sm flex items-center justify-center overflow-hidden">
          <Image
            src="/images/logocapec.png"
            alt="CAPEC Logo"
            width={136}
            height={136}
            className="object-contain"
          />
        </div>
      </Link>

      {/* Menu centered below */}
      <nav className="hidden md:flex items-center space-x-8">
  {navItems.map((item) => {
    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

    if (item.submenu) {
      return (
        <div
          key={item.title}
          className="relative group"
          onMouseEnter={() => setHoverItem(item.title)}
          onMouseLeave={() => setHoverItem(null)}
        >
          <Link
            href={item.href}
            className={cn(
              "flex items-center text-base font-medium transition-colors hover:text-ci-orange py-1.5",
              isActive ? "" : "text-foreground"
            )}
          >
            {item.title}
            <ChevronDown className="ml-1 h-5 w-5" />
          </Link>

          <div
            className={cn(
              "absolute left-0 top-full pt-2 z-50",
              hoverItem === item.title ? "block" : "hidden group-hover:block"
            )}
          >
            <div className="w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="py-1" role="menu" aria-orientation="vertical">
                {item.submenu.map((subItem) => {
                  const isSubActive = pathname === subItem.href;
                  return (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className={cn(
                        "block px-4 py-2 text-base relative group/item transition-all duration-200",
                        isSubActive ? "bg-ci-green text-white" : "text-gray-700 hover:text-white"
                      )}
                      role="menuitem"
                    >
                      <span
                        className={cn(
                          "absolute inset-0 bg-ci-green transform origin-left transition-transform duration-300 ease-out",
                          isSubActive ? "scale-x-100" : "scale-x-0 group-hover/item:scale-x-100"
                        )}
                        aria-hidden="true"
                      ></span>
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
          "text-base font-medium transition-colors hover:text-ci-orange py-1.5",
          isActive ? "" : "text-foreground"
        )}
      >
        {item.title}
      </Link>
    );
  })}
</nav>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden absolute right-4">
        <MobileNav />
      </div>
    </div>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleSubmenu = (title: string) => {
    if (openSubmenu === title) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(title);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 text-base font-medium text-foreground"
      >
        <span>Menu</span>
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`h-0.5 w-full bg-current transform transition duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-full bg-current transition duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`h-0.5 w-full bg-current transform transition duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>
      </button>

      {open && (
        <div className="fixed top-[184px] left-0 right-0 bg-white shadow-2xl z-50 px-4 py-6 border-t border-gray-200">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

              if (item.submenu) {
                return (
                  <div key={item.title} className="space-y-2">
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className={cn(
                        "flex items-center justify-between w-full text-base font-medium transition-colors hover:text-ci-orange",
                        isActive ? "" : "text-foreground"
                      )}
                    >
                      {item.title}
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          openSubmenu === item.title ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    {openSubmenu === item.title && (
                      <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                        {item.submenu.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className={cn(
                                "block text-base font-medium py-1.5 px-3 rounded relative overflow-hidden group/mobile",
                                isSubActive ? "bg-ci-green text-white" : "text-foreground hover:text-white hover:bg-ci-green"
                              )}
                              onClick={() => setOpen(false)}
                            >
                              <span
                                className={cn(
                                  "absolute inset-0 bg-ci-green transform origin-left transition-transform duration-300 ease-out",
                                  isSubActive ? "scale-x-100" : "scale-x-0 group-hover/mobile:scale-x-100"
                                )}
                                aria-hidden="true"
                              ></span>
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
                    "text-base font-medium transition-colors hover:text-ci-orange py-1.5",
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