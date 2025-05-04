"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BarChart2, Bell, TrendingUp, Clock } from "lucide-react";

const translations = {
  en: {
    title: "Monitoring Plus",
    subtitle:
      "Continuous monitoring of financial metrics and market conditions",
    description:
      "Monitoring Plus provides real-time tracking and analysis of your financial metrics and market conditions. Our advanced monitoring system alerts you to significant changes, potential risks, and emerging opportunities, allowing you to respond quickly and make informed decisions.",
    features: {
      title: "Key Features",
      items: [
        "Real-time financial metric tracking",
        "Customizable alert thresholds",
        "Market condition monitoring",
        "Competitor analysis",
        "Trend identification and forecasting",
        "Regular performance reports",
      ],
    },
    benefits: {
      title: "Benefits",
      items: [
        {
          title: "Proactive Management",
          description:
            "Stay ahead of market changes and respond quickly to emerging trends.",
          icon: TrendingUp,
        },
        {
          title: "Instant Alerts",
          description:
            "Receive notifications when key metrics cross predefined thresholds.",
          icon: Bell,
        },
        {
          title: "Comprehensive Analytics",
          description:
            "Gain insights from detailed analysis of your financial performance.",
          icon: BarChart2,
        },
        {
          title: "24/7 Monitoring",
          description:
            "Continuous tracking ensures you never miss important developments.",
          icon: Clock,
        },
      ],
    },
    cta: "Start Monitoring Today",
  },
  ar: {
    title: "المراقبة بلس",
    subtitle: "مراقبة مستمرة للمقاييس المالية وظروف السوق",
    description:
      "توفر المراقبة بلس تتبعًا وتحليلًا في الوقت الحقيقي لمقاييسك المالية وظروف السوق. ينبهك نظام المراقبة المتقدم لدينا إلى التغييرات المهمة والمخاطر المحتملة والفرص الناشئة، مما يتيح لك الاستجابة بسرعة واتخاذ قرارات مستنيرة.",
    features: {
      title: "الميزات الرئيسية",
      items: [
        "تتبع المقاييس المالية في الوقت الحقيقي",
        "عتبات تنبيه قابلة للتخصيص",
        "مراقبة ظروف السوق",
        "تحليل المنافسين",
        "تحديد الاتجاهات والتنبؤ",
        "تقارير أداء منتظمة",
      ],
    },
    benefits: {
      title: "الفوائد",
      items: [
        {
          title: "إدارة استباقية",
          description:
            "ابق متقدمًا على تغيرات السوق واستجب بسرعة للاتجاهات الناشئة.",
          icon: TrendingUp,
        },
        {
          title: "تنبيهات فورية",
          description:
            "تلقي إشعارات عندما تتجاوز المقاييس الرئيسية العتبات المحددة مسبقًا.",
          icon: Bell,
        },
        {
          title: "تحليلات شاملة",
          description: "اكتسب رؤى من التحليل المفصل لأدائك المالي.",
          icon: BarChart2,
        },
        {
          title: "مراقبة على مدار الساعة",
          description: "يضمن التتبع المستمر عدم تفويت التطورات المهمة أبدًا.",
          icon: Clock,
        },
      ],
    },
    cta: "ابدأ المراقبة اليوم",
  },
};

export default function MonitoringPlusPage() {
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
            <BarChart2 className="h-8 w-8 text-primary" />
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
