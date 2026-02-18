"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const phoneNumber = "+201008900076"
  const displayNumber = "0100 8900 076"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#origami", label: "أوريجامي" },
    { href: "#sarai", label: "سراي" },
    { href: "#kavana-lake", label: "كافانا ليك" },
    { href: "#the-butterfly", label: "ذا باترفلاي" },
    { href: "#eilan", label: "إيلان" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="مدينة مصر" width={120} height={40} className="h-10 w-auto" />
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={`tel:${phoneNumber}`} className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              <Phone className="h-4 w-4" />
              {displayNumber}
            </a>
            <Button asChild size="sm" className="hidden lg:flex">
              <a href="#contact">احجز استشارة</a>
            </Button>
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border py-4">
            <nav className="flex flex-col gap-3 px-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium py-2 border-b border-border/50 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 text-sm font-semibold text-primary py-2">
                <Phone className="h-4 w-4" />
                {displayNumber}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}