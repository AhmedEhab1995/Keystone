"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";

const translations = {
  en: {
    title: "About Keystone Financial Solutions",
    subtitle: "Your trusted partner in financial intelligence",
    description: [
      "Keystone Financial Solutions was founded in 2022 with a clear mission: to provide businesses with the financial intelligence they need to thrive in an increasingly complex global economy.",
      "Our team of financial experts, data scientists, and industry specialists work together to deliver innovative solutions that help our clients navigate financial challenges, identify opportunities, and make informed decisions.",
      "At Keystone, we believe that financial intelligence should be accessible, actionable, and aligned with your business goals. That's why we've developed a suite of services that combine cutting-edge technology with human expertise to deliver insights that drive success.",
    ],
    values: {
      title: "Our Values",
      items: [
        {
          title: "Integrity",
          description:
            "We uphold the highest ethical standards in all our interactions and operations.",
        },
        {
          title: "Innovation",
          description:
            "We continuously explore new technologies and methodologies to improve our services.",
        },
        {
          title: "Excellence",
          description:
            "We strive for excellence in everything we do, from data analysis to client service.",
        },
        {
          title: "Partnership",
          description:
            "We build long-term relationships with our clients based on trust and mutual success.",
        },
      ],
    },
  },
  ar: {
    title: "عن كيستون للحلول المالية",
    subtitle: "شريكك الموثوق في الذكاء المالي",
    description: [
      "تأسست كيستون للحلول المالية في عام 2010 بمهمة واضحة: تزويد الشركات بالذكاء المالي الذي تحتاجه للازدهار في اقتصاد عالمي متزايد التعقيد.",
      "يعمل فريقنا من الخبراء الماليين وعلماء البيانات والمتخصصين في الصناعة معًا لتقديم حلول مبتكرة تساعد عملائنا على التنقل في التحديات المالية وتحديد الفرص واتخاذ قرارات مستنيرة.",
      "في كيستون، نؤمن بأن الذكاء المالي يجب أن يكون في متناول الجميع وقابلاً للتنفيذ ومتوافقًا مع أهداف عملك. لهذا السبب طورنا مجموعة من الخدمات التي تجمع بين التكنولوجيا المتطورة والخبرة البشرية لتقديم رؤى تدفع النجاح.",
    ],
    values: {
      title: "قيمنا",
      items: [
        {
          title: "النزاهة",
          description:
            "نحن نلتزم بأعلى المعايير الأخلاقية في جميع تفاعلاتنا وعملياتنا.",
        },
        {
          title: "الابتكار",
          description:
            "نحن نستكشف باستمرار تقنيات ومنهجيات جديدة لتحسين خدماتنا.",
        },
        {
          title: "التميز",
          description:
            "نحن نسعى جاهدين للتميز في كل ما نقوم به، من تحليل البيانات إلى خدمة العملاء.",
        },
        {
          title: "الشراكة",
          description:
            "نحن نبني علاقات طويلة الأمد مع عملائنا على أساس الثقة والنجاح المتبادل.",
        },
      ],
    },
  },
};

export default function KeystoneFinancialPage() {
  const { language } = useLanguage();
  const { theme, setTheme } = useTheme();
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
          <Image
            src={
              theme === "dark" ? "/images/logo2bg1.png" : "/images/logo2.png"
            }
            alt="Keystone Financial Solutions"
            width={240}
            height={120}
            className="mx-auto mb-6"
          />
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
          {t.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            {t.values.title}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {t.values.items.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="rounded-lg border bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
