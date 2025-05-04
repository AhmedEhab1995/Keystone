"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { ArrowRight, BarChart2, Shield, Search } from "lucide-react";
import { useTheme } from "next-themes";

export default function Home() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  const { theme, setTheme } = useTheme();

  const statsRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  const statsInView = useInView(statsRef, { once: false, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: false, amount: 0.3 });
  const aboutInView = useInView(aboutRef, { once: false, amount: 0.3 });

  const statsControls = useAnimation();
  const servicesControls = useAnimation();
  const aboutControls = useAnimation();

  useEffect(() => {
    if (statsInView) {
      statsControls.start("visible");
    } else {
      statsControls.start("hidden");
    }
  }, [statsInView, statsControls]);

  useEffect(() => {
    if (servicesInView) {
      servicesControls.start("visible");
    } else {
      servicesControls.start("hidden");
    }
  }, [servicesInView, servicesControls]);

  useEffect(() => {
    if (aboutInView) {
      aboutControls.start("visible");
    } else {
      aboutControls.start("hidden");
    }
  }, [aboutInView, aboutControls]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const backgroundImages = [
    'url("/images/banner6.jpg")',
    'url("/images/banner2.jpg")',
    'url("/images/banner8.jpg")',
  ];

  const englishTextVariations = [
    {
      title: "Financial Solutions for the Modern World",
      subtitle:
        "Keystone Financial Solutions provides cutting-edge financial services to help your business thrive in today's complex market.",
    },
    {
      title: "Innovative Solutions for Your Financial Success",
      subtitle:
        "Discover our unique financial solutions designed to propel your business forward in the digital age.",
    },
    {
      title: "Empowering Businesses with Advanced Tools",
      subtitle:
        "Keystone offers state-of-the-art financial tools to help your business navigate and grow in today’s economy.",
    },
  ];

  const arabicTextVariations = [
    {
      title: "الحلول المالية لعالم اليوم الحديث",
      subtitle:
        "تقدم Keystone Financial Solutions خدمات مالية متطورة لمساعدة عملك على الازدهار في سوق اليوم المعقد.",
    },
    {
      title: "حلول مبتكرة لنجاحك المالي",
      subtitle:
        "اكتشف حلولنا المالية الفريدة التي تهدف إلى دفع عملك إلى الأمام في العصر الرقمي.",
    },
    {
      title: "تمكين الأعمال التجارية من خلال أدوات مالية متقدمة",
      subtitle:
        "تقدم Keystone أدوات مالية متطورة لمساعدة عملك على التنقل والنمو في اقتصاد اليوم.",
    },
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  // Cycle through text variations every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) =>
          (prevIndex + 1) %
          (language === "ar"
            ? arabicTextVariations.length
            : englishTextVariations.length)
      );
      setCurrentBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [language]); // Re-run when language changes

  const textVariations =
    language === "ar" ? arabicTextVariations : englishTextVariations;

  return (
    <div className="flex flex-col">
      {/* Hero Section with Background Image */}
      <section
        className="relative py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: backgroundImages[currentBackgroundIndex],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container relative px-4 md:px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`max-w-3xl ${isRtl ? "mr-auto text-right" : "ml-0"}`}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white"
            >
              {textVariations[currentTextIndex].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-lg text-gray-200"
            >
              {textVariations[currentTextIndex].subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8"
            >
              <Link href="/services/legal-risk-report">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 border-0 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg"
                  >
                    {t.home.hero.cta}
                    {isRtl ? (
                      <ArrowRight className="h-5 w-5 rotate-180" />
                    ) : (
                      <ArrowRight className="h-5 w-5" />
                    )}
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/statistics.jpg"
            alt="Statistics background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={statsControls}
            className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
          >
            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-lg border border-gray-700 transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl font-bold md:text-4xl text-white">
                500+
              </div>
              <p className="text-sm text-gray-300 md:text-base">
                {t.home.stats.clients}
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-lg border border-gray-700 transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl font-bold md:text-4xl text-white">
                10,000+
              </div>
              <p className="text-sm text-gray-300 md:text-base">
                {t.home.stats.reports}
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-lg border border-gray-700 transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl font-bold md:text-4xl text-white">
                25+
              </div>
              <p className="text-sm text-gray-300 md:text-base">
                {t.home.stats.countries}
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-lg border border-gray-700 transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl font-bold md:text-4xl text-white">
                98%
              </div>
              <p className="text-sm text-gray-300 md:text-base">
                {t.home.stats.satisfaction}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className={`text-center mb-12 ${isRtl ? "rtl" : ""}`}>
            <motion.h2
              variants={fadeIn}
              initial="hidden"
              animate={servicesControls}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
            >
              {t.home.services.title}
            </motion.h2>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate={servicesControls}
              transition={{ delay: 0.1 }}
              className="mt-4 text-xl text-muted-foreground"
            >
              {t.home.services.subtitle}
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={servicesControls}
            className="grid gap-6 md:grid-cols-3 md:gap-8"
          >
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`flex flex-col rounded-xl border bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${
                isRtl ? "rtl text-right" : ""
              }`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-md shadow-blue-500/20">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                {t.home.services.legalRisk.title}
              </h3>
              <p className="mb-4 flex-1 text-muted-foreground">
                {t.home.services.legalRisk.description}
              </p>
              <Link href="/services/legal-risk-report">
                <Button
                  variant="outline"
                  className="w-full bg-gradient-to-r from-blue-500/10 to-cyan-400/10 hover:from-blue-500/20 hover:to-cyan-400/20 dark:from-blue-500/20 dark:to-cyan-400/20 dark:hover:from-blue-500/30 dark:hover:to-cyan-400/30 border-0 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 font-medium">
                    {t.common.learnMore}
                  </span>
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`flex flex-col rounded-xl border bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${
                isRtl ? "rtl text-right" : ""
              }`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-400 shadow-md shadow-purple-500/20">
                <Search className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                {t.home.services.insightX.title}
              </h3>
              <p className="mb-4 flex-1 text-muted-foreground">
                {t.home.services.insightX.description}
              </p>
              <Link href="/services/insight-x-search">
                <Button
                  variant="outline"
                  className="w-full bg-gradient-to-r from-purple-500/10 to-pink-400/10 hover:from-purple-500/20 hover:to-pink-400/20 dark:from-purple-500/20 dark:to-pink-400/20 dark:hover:from-purple-500/30 dark:hover:to-pink-400/30 border-0 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 font-medium">
                    {t.common.learnMore}
                  </span>
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`flex flex-col rounded-xl border bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 shadow-lg transition-all duration-300 hover:shadow-xl ${
                isRtl ? "rtl text-right" : ""
              }`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-md shadow-emerald-500/20">
                <BarChart2 className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">
                {t.home.services.monitoring.title}
              </h3>
              <p className="mb-4 flex-1 text-muted-foreground">
                {t.home.services.monitoring.description}
              </p>
              <Link href="/services/monitoring-plus">
                <Button
                  variant="outline"
                  className="w-full bg-gradient-to-r from-emerald-500/10 to-teal-400/10 hover:from-emerald-500/20 hover:to-teal-400/20 dark:from-emerald-500/20 dark:to-teal-400/20 dark:hover:from-emerald-500/30 dark:hover:to-teal-400/30 border-0 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 font-medium">
                    {t.common.learnMore}
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries that support us*/}

      <section className="py-16 px-4 bg-white dark:bg-gray-950 flex flex-col md:flex-row items-start md:items-center justify-between max-w-7xl mx-auto">
        <div className="md:w-1/2">
          <p className="text-cyan-500 text-sm font-semibold mb-2">
            {t.home.industries.title}
          </p>
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white">
            {t.home.industries.subTitle}
          </h2>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          <p>{t.home.industries.para}</p>
        </div>
      </section>

      {/* Industries we support */}
      <section className="bg-gray-50 dark:bg-black py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <img
              src="https://www.advisor-gcc.com/Assets/images/team-1.jpg"
              alt={t.home.industriess.banks}
              className="w-full h-64 object-cover rounded"
            />
            <p className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-200">
              {t.home.industriess.banks}
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://www.advisor-gcc.com/Assets/images/team-2.jpg"
              alt={t.home.industriess.financial}
              className="w-full h-64 object-cover rounded"
            />
            <p className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-200">
              {t.home.industriess.financial}
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://www.advisor-gcc.com/Assets/images/team-3.jpg"
              alt={t.home.industriess.insurance}
              className="w-full h-64 object-cover rounded"
            />
            <p className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-200">
              {t.home.industriess.insurance}
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://www.advisor-gcc.com/Assets/images/team-4.jpg"
              alt={t.home.industriess.construction}
              className="w-full h-64 object-cover rounded"
            />
            <p className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-200">
              {t.home.industriess.construction}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-16 md:py-24 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container px-4 md:px-6">
          <div
            className={`grid gap-6 md:grid-cols-2 md:gap-12 ${
              isRtl ? "rtl" : ""
            }`}
          >
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate={aboutControls}
              className={isRtl ? "text-right" : ""}
            >
              <div className="overflow-visible">
                <h2 className="inline-block text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 pb-1">
                  {t.home.about.title}
                </h2>
              </div>
              <p className="mt-4 text-xl text-muted-foreground">
                {t.home.about.subtitle}
              </p>
              <ul className="mt-6 space-y-4">
                {t.home.about.points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                    animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    className="flex items-center gap-2"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={aboutInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/10 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Image
                      src={
                        theme === "dark"
                          ? "/images/logo2bg1.png"
                          : "/images/logo2.png"
                      }
                      alt="Keystone Financial Solutions"
                      width={240}
                      height={120}
                      className="mx-auto mb-4"
                    />
                    <p className="mt-2 text-muted-foreground">
                      {isRtl ? t.home.about.expertise : t.home.about.expertise}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
