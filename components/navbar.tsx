"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useLanguage } from "./language-provider"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { language, toggleLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()
  const isRtl = language === "ar"

  const isActive = (path: string) => {
    return pathname === path
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
          <Image
            src={theme === "dark" ? "/images/logo2bg1.png" : "/images/logo2.png"}
            alt="Keystone Financial Solutions"
            width={150}
            height={40}
            className="h-8 w-auto"
          />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <ul className={`flex ${isRtl ? "space-x-reverse space-x-6 mr-4" : "space-x-6"}`}>
            <li>
              <Link
                href="/"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/") ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.nav.home}
              </Link>
            </li>
            <li className="relative group">
              <span className="text-sm font-medium transition-colors hover:text-primary cursor-pointer">
                {t.nav.services}
              </span>
              <div
                className={`absolute ${isRtl ? "right-0" : "left-0"} mt-2 w-60 rounded-md shadow-lg bg-background border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}
              >
                <div className="py-1">
                  <Link href="/services/legal-risk-report" className="block px-4 py-2 text-sm hover:bg-muted">
                    {t.nav.legalRiskReport}
                  </Link>
                  <Link href="/services/insight-x-search" className="block px-4 py-2 text-sm hover:bg-muted">
                    {t.nav.insightXSearch}
                  </Link>
                  <Link href="/services/monitoring-plus" className="block px-4 py-2 text-sm hover:bg-muted">
                    {t.nav.monitoringPlus}
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/faq"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/faq") ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.nav.faq}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/contact") ? "text-primary" : "text-muted-foreground",
                )}
              >
                {t.nav.contact}
              </Link>
            </li>
          </ul>
          <div className={`flex items-center ${isRtl ? "space-x-reverse space-x-4" : "space-x-4"}`}>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="bg-gradient-to-r from-gray-200 to-gray-100 hover:from-gray-300 hover:to-gray-200 dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600 relative overflow-hidden"
            >
              <Image
                src={language === "en" ? "https://flagcdn.com/w40/gb.png" : "https://flagcdn.com/w40/ae.png"}
                alt={language === "en" ? "English" : "Arabic"}
                width={24}
                height={24}
                className="rounded-sm"
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="bg-gradient-to-r from-gray-200 to-gray-100 hover:from-gray-300 hover:to-gray-200 dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div
          className={`flex flex-1 items-center justify-end md:hidden ${isRtl ? "space-x-reverse space-x-2" : "space-x-2"}`}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            aria-label="Toggle language"
            className="bg-gradient-to-r from-gray-200 to-gray-100 hover:from-gray-300 hover:to-gray-200 dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600"
          >
            <Image
              src={language === "en" ?"https://flagcdn.com/w40/gb.png" : "https://flagcdn.com/w40/ae.png"}
              alt={language === "en" ? "English" : "Arabic"}
              width={24}
              height={24}
              className="rounded-sm"
            />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="bg-gradient-to-r from-gray-200 to-gray-100 hover:from-gray-300 hover:to-gray-200 dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="bg-gradient-to-r from-gray-200 to-gray-100 hover:from-gray-300 hover:to-gray-200 dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/") ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {t.nav.home}
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="justify-start px-0 bg-gradient-to-r from-gray-200 to-gray-100 hover:from-gray-300 hover:to-gray-200 dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600"
                  >
                    {t.nav.services}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/services/legal-risk-report" onClick={() => setIsOpen(false)}>
                      {t.nav.legalRiskReport}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/insight-x-search" onClick={() => setIsOpen(false)}>
                      {t.nav.insightXSearch}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/monitoring-plus" onClick={() => setIsOpen(false)}>
                      {t.nav.monitoringPlus}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/faq"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/faq") ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {t.nav.faq}
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/contact") ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setIsOpen(false)}
              >
                {t.nav.contact}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

