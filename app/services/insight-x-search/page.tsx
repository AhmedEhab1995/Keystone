"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, Zap, Database, BarChart2 } from "lucide-react";

const translations = {
  en: {
    title: "Insight-X: Search",
    subtitle:
      "Advanced search tools to find critical financial information quickly",
    description:
      "Insight-X: Search is our cutting-edge financial search platform that helps you find critical information quickly and efficiently. Powered by advanced algorithms and machine learning, our search tools analyze vast amounts of financial data to deliver accurate, relevant results in seconds.",
    features: {
      title: "Key Features",
      items: [
        "Intelligent financial data search",
        "Real-time market information",
        "Customizable search parameters",
        "Historical data analysis",
        "Trend identification",
        "Export and reporting capabilities",
      ],
    },
    benefits: {
      title: "Benefits",
      items: [
        {
          title: "Speed & Efficiency",
          description: "Find the information you need in seconds, not hours.",
          icon: Zap,
        },
        {
          title: "Comprehensive Coverage",
          description: "Access data from multiple sources in a single search.",
          icon: Database,
        },
        {
          title: "Actionable Insights",
          description:
            "Discover patterns and trends that inform better decisions.",
          icon: BarChart2,
        },
        {
          title: "Precision Search",
          description: "Refine searches with advanced filters and parameters.",
          icon: Search,
        },
      ],
    },
    cta: "Request a Demo",
  },
  ar: {
    title: "إنسايت-إكس: البحث",
    subtitle: "أدوات بحث متقدمة للعثور على المعلومات المالية الحاسمة بسرعة",
    description:
      "إنسايت-إكس: البحث هي منصة البحث المالي المتطورة التي تساعدك على العثور على المعلومات الحاسمة بسرعة وكفاءة. مدعومة بخوارزميات متقدمة وتعلم آلي، تحلل أدوات البحث لدينا كميات هائلة من البيانات المالية لتقديم نتائج دقيقة وذات صلة في ثوانٍ.",
    features: {
      title: "الميزات الرئيسية",
      items: [
        "بحث ذكي في البيانات المالية",
        "معلومات السوق في الوقت الحقيقي",
        "معلمات بحث قابلة للتخصيص",
        "تحليل البيانات التاريخية",
        "تحديد الاتجاهات",
        "قدرات التصدير وإعداد التقارير",
      ],
    },
    benefits: {
      title: "الفوائد",
      items: [
        {
          title: "السرعة والكفاءة",
          description: "ابحث عن المعلومات التي تحتاجها في ثوانٍ، وليس ساعات.",
          icon: Zap,
        },
        {
          title: "تغطية شاملة",
          description: "الوصول إلى البيانات من مصادر متعددة في بحث واحد.",
          icon: Database,
        },
        {
          title: "رؤى قابلة للتنفيذ",
          description:
            "اكتشف الأنماط والاتجاهات التي تساعد في اتخاذ قرارات أفضل.",
          icon: BarChart2,
        },
        {
          title: "بحث دقيق",
          description: "تحسين عمليات البحث باستخدام مرشحات ومعلمات متقدمة.",
          icon: Search,
        },
      ],
    },
    cta: "طلب عرض توضيحي",
  },
};

export default function InsightXSearchPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const isRtl = language === "ar";

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className={`mx-auto max-w-4xl ${isRtl ? "rtl" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Search className="h-8 w-8 text-primary" />
          </div>
          <h1 className="inline-block text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 pb-1">
            {t.title}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">{t.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 prose prose-lg dark:prose-invert max-w-none"
        >
          <p>{t.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            {t.features.title}
          </h2>
          <ul className="mt-6 grid gap-3">
            {t.features.items.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-center gap-3"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg
                    className="h-3 w-3 text-primary-foreground"
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
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            {t.benefits.title}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {t.benefits.items.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="rounded-lg border bg-card p-6 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{benefit.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              {t.cta}
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
