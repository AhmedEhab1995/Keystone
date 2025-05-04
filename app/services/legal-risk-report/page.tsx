"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, CheckCircle, AlertTriangle, FileText } from "lucide-react";

const translations = {
  en: {
    title: "Legal Risk Report",
    subtitle:
      "Comprehensive analysis of potential legal risks in your financial operations",
    description:
      "Our Legal Risk Report service provides a detailed assessment of legal risks associated with your financial operations. We identify potential compliance issues, regulatory gaps, and legal vulnerabilities to help you mitigate risks before they become problems.",
    features: {
      title: "Key Features",
      items: [
        "Comprehensive legal risk assessment",
        "Regulatory compliance analysis",
        "Contract review and risk identification",
        "Litigation risk evaluation",
        "Customized risk mitigation strategies",
        "Regular updates on regulatory changes",
      ],
    },
    benefits: {
      title: "Benefits",
      items: [
        {
          title: "Proactive Risk Management",
          description:
            "Identify and address legal risks before they impact your business operations.",
          icon: Shield,
        },
        {
          title: "Compliance Assurance",
          description:
            "Ensure your operations comply with relevant laws and regulations.",
          icon: CheckCircle,
        },
        {
          title: "Risk Mitigation",
          description:
            "Develop strategies to minimize legal exposure and potential liabilities.",
          icon: AlertTriangle,
        },
        {
          title: "Documentation",
          description:
            "Receive detailed reports with actionable recommendations.",
          icon: FileText,
        },
      ],
    },
    cta: "Request a Consultation",
  },
  ar: {
    title: "تقرير المخاطر القانونية",
    subtitle: "تحليل شامل للمخاطر القانونية المحتملة في عملياتك المالية",
    description:
      "توفر خدمة تقرير المخاطر القانونية لدينا تقييمًا مفصلاً للمخاطر القانونية المرتبطة بعملياتك المالية. نحدد مشكلات الامتثال المحتملة، والثغرات التنظيمية، ونقاط الضعف القانونية لمساعدتك على تخفيف المخاطر قبل أن تصبح مشاكل.",
    features: {
      title: "الميزات الرئيسية",
      items: [
        "تقييم شامل للمخاطر القانونية",
        "تحليل الامتثال التنظيمي",
        "مراجعة العقود وتحديد المخاطر",
        "تقييم مخاطر التقاضي",
        "استراتيجيات مخصصة للتخفيف من المخاطر",
        "تحديثات منتظمة حول التغييرات التنظيمية",
      ],
    },
    benefits: {
      title: "الفوائد",
      items: [
        {
          title: "إدارة المخاطر الاستباقية",
          description:
            "تحديد ومعالجة المخاطر القانونية قبل أن تؤثر على عمليات عملك.",
          icon: Shield,
        },
        {
          title: "ضمان الامتثال",
          description: "ضمان امتثال عملياتك للقوانين واللوائح ذات الصلة.",
          icon: CheckCircle,
        },
        {
          title: "تخفيف المخاطر",
          description:
            "تطوير استراتيجيات لتقليل التعرض القانوني والمسؤوليات المحتملة.",
          icon: AlertTriangle,
        },
        {
          title: "التوثيق",
          description: "الحصول على تقارير مفصلة مع توصيات قابلة للتنفيذ.",
          icon: FileText,
        },
      ],
    },
    cta: "طلب استشارة",
  },
};

export default function LegalRiskReportPage() {
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
            <Shield className="h-8 w-8 text-primary" />
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
