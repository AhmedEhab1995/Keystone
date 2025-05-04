"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "./language-provider"
import { useTheme } from "next-themes"


export default function Footer() {
  const { t, language } = useLanguage()
  const isRtl = language === "ar"
  const { theme, setTheme } = useTheme()


  return (
    <footer className="border-t bg-gradient-to-b from-background to-gray-100 dark:from-background dark:to-gray-900">
      <div className="container py-8 md:py-12">
        <div className="flex justify-center mb-8">
          <Image
            src={theme === "dark" ? "/images/logo2bg1.png" : "/images/logo2.png"}
            alt="Keystone Financial Solutions"
            width={180}
            height={50}
            className="h-10 w-auto"
          />
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className={isRtl ? "text-right" : "text-left"}>
            <h3 className="text-lg font-semibold">{t.footer.about}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about/keystone-financial" className="text-sm text-muted-foreground hover:text-primary">
                  Keystone Financial
                </Link>
              </li>
              <li>
                <Link href="/about/our-team" className="text-sm text-muted-foreground hover:text-primary">
                  {t.footer.ourTeam}
                </Link>
              </li>
              <li>
                <Link href="/about/our-history" className="text-sm text-muted-foreground hover:text-primary">
                  {t.footer.ourHistory}
                </Link>
              </li>
            </ul>
          </div>
          <div className={isRtl ? "text-right" : "text-left"}>
            <h3 className="text-lg font-semibold">{t.footer.services}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services/legal-risk-report" className="text-sm text-muted-foreground hover:text-primary">
                  {t.nav.legalRiskReport}
                </Link>
              </li>
              <li>
                <Link href="/services/insight-x-search" className="text-sm text-muted-foreground hover:text-primary">
                  {t.nav.insightXSearch}
                </Link>
              </li>
              <li>
                <Link href="/services/monitoring-plus" className="text-sm text-muted-foreground hover:text-primary">
                  {t.nav.monitoringPlus}
                </Link>
              </li>
            </ul>
          </div>
          <div className={isRtl ? "text-right" : "text-left"}>
            <h3 className="text-lg font-semibold">{t.footer.clients}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/clients/case-studies" className="text-sm text-muted-foreground hover:text-primary">
                  {t.footer.caseStudies}
                </Link>
              </li>
              <li>
                <Link href="/clients/testimonials" className="text-sm text-muted-foreground hover:text-primary">
                  {t.footer.testimonials}
                </Link>
              </li>
              <li>
                <Link href="/clients/success-stories" className="text-sm text-muted-foreground hover:text-primary">
                  {t.footer.successStories}
                </Link>
              </li>
            </ul>
          </div>
          <div className={isRtl ? "text-right" : "text-left"}>
            <h3 className="text-lg font-semibold">{t.footer.supportHours}</h3>
            <p className="mt-4 text-sm text-muted-foreground">{t.footer.supportTime}</p>
            <div className="mt-4">
              <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary">
                {t.common.contactUs}
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Software SAVVY Labs. {t.common.rights}.
          </p>
        </div>
      </div>
    </footer>
  )
}

