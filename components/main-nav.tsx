"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronDown } from 'lucide-react'
import { title } from "process"
import { navItems } from "./navItems"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export type NavItem = {
  title: string
  href: string
  submenu?: NavItem[]
}

export function MainNav() {
  const pathname = usePathname()
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const [hoverItem, setHoverItem] = useState<string | null>(null)

  return (
  <>
    
     <div className="flex items-center mt-36 mb-20 ml-10">
      <Link href="/" className="flex items-center space-x-2 ">
        <div className="relative w-24 h-20 mb-3  rounded-sm flex items-center justify-center overflow-hidden">
          <Image
            src={"/images/logocapec.png"}
           // src="/placeholder.svg?text=CAPEC&height=32&width=32&fontsize=10&bgcolor=FFFFFF"
            alt="CAPEC Logo"
            width={98}
            height={98}
            className="object-contain"
          />
        </div>
   
      </Link>
      <nav className="hidden md:flex items-center space-x-6 ml-20">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

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
                    "flex items-center text-sm font-medium transition-colors hover:text-ci-orange",
                    isActive ? "" : "text-foreground",
                  )}
                >
                  {item.title}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>

                {/* Sous-menu avec un padding pour éviter les espaces vides entre le menu et le sous-menu */}
                <div
                  className={cn(
                    "absolute left-0 top-full pt-2 z-50",
                    hoverItem === item.title ? "block" : "hidden group-hover:block",
                  )}
                >
                  <div className="w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {item.submenu.map((subItem) => {
                        const isSubActive = pathname === subItem.href
                        return (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className={cn(
                              "block px-4 py-2 text-sm relative group/item transition-all duration-200",
                              isSubActive ? "bg-ci-green text-white" : "text-gray-700 hover:text-white",
                            )}
                            role="menuitem"
                          >
                            {/* Overlay d'animation pour l'effet de survol */}
                            <span
                              className={cn(
                                "absolute mt-2 inset-0 bg-ci-green transform origin-left transition-transform duration-300 ease-out",
                                isSubActive ? "scale-x-100" : "scale-x-0 group-hover/item:scale-x-100",
                              )}
                              aria-hidden="true"
                            ></span>
                            <span className="relative z-10">{subItem.title}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          }

          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-ci-orange",
                isActive ? "text-ci-orange" : "text-foreground",
              )}
            >
              {item.title}
            </Link>
          )
        })}
      </nav>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden ml-auto">
        <MobileNav />
      </div>
    </div>


  </>
      

    
  )
}

function MobileNav() {
  const [open, setOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  const toggleSubmenu = (title: string) => {
    if (openSubmenu === title) {
      setOpenSubmenu(null)
    } else {
      setOpenSubmenu(title)
    }
  }

  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex items-center space-x-2 text-sm font-medium">
        <span>Menu</span>
        <div className="w-6 h-5 flex flex-col justify-between">
          <span
            className={`h-0.5 w-full bg-current transform transition duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`h-0.5 w-full bg-current transition duration-300 ${open ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`h-0.5 w-full bg-current transform transition duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </div>
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 p-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

              if (item.submenu) {
                return (
                  <div key={item.title} className="space-y-2">
                    <button
                      onClick={() => toggleSubmenu(item.title)}
                      className={cn(
                        "flex items-center justify-between w-full text-sm font-medium transition-colors hover:text-ci-orange",
                        isActive ? "text-ci-orange" : "text-foreground",
                      )}
                    >
                      {item.title}
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", openSubmenu === item.title ? "rotate-180" : "")}
                      />
                    </button>
                    {openSubmenu === item.title && (
                      <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                        {item.submenu.map((subItem) => {
                          const isSubActive = pathname === subItem.href
                          return (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className={cn(
                                "block text-sm py-1 px-2 rounded relative overflow-hidden group/mobile",
                                isSubActive ? "bg-ci-green text-white" : "text-gray-700 hover:text-white",
                              )}
                              onClick={() => setOpen(false)}
                            >
                              {/* Overlay d'animation pour l'effet de survol */}
                              <span
                                className={cn(
                                  "absolute inset-0 bg-ci-green transform origin-left transition-transform duration-300 ease-out",
                                  isSubActive ? "scale-x-100" : "scale-x-0 group-hover/mobile:scale-x-100",
                                )}
                                aria-hidden="true"
                              ></span>
                              <span className="relative z-10">{subItem.title}</span>
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-ci-orange",
                    isActive ? "text-ci-orange" : "text-foreground",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </div>
  )
}

