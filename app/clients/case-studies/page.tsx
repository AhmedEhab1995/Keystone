"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Building, Globe, Briefcase } from "lucide-react"

const translations = {
  en: {
    title: "Case Studies",
    subtitle: "Real-world success stories from our clients",
    description:
      "Discover how Keystone Financial Solutions has helped businesses across various industries overcome financial challenges and achieve their goals.",
    caseStudies: [
      {
        title: "Global Bank Reduces Regulatory Risk by 40%",
        industry: "Banking",
        challenge:
          "A leading international bank was struggling to keep up with rapidly changing financial regulations across multiple jurisdictions.",
        solution:
          "Implemented our Legal Risk Report service with custom monitoring parameters for each region of operation.",
        results: "40% reduction in regulatory compliance issues, saving an estimated $2.3 million in potential fines.",
        icon: Building,
      },
      {
        title: "Tech Startup Optimizes Investment Strategy",
        industry: "Technology",
        challenge:
          "A fast-growing tech startup needed to make strategic investment decisions with limited financial resources.",
        solution:
          "Deployed our Insight-X: Search platform to analyze market trends and identify optimal investment opportunities.",
        results: "Achieved 28% higher ROI on strategic investments compared to industry benchmarks.",
        icon: Globe,
      },
      {
        title: "Manufacturing Firm Improves Financial Forecasting",
        industry: "Manufacturing",
        challenge:
          "A mid-sized manufacturing company was struggling with inaccurate financial forecasts affecting production planning.",
        solution: "Implemented our Monitoring Plus service with custom KPIs and real-time market condition tracking.",
        results: "Improved forecast accuracy by 35%, leading to optimized inventory management and 18% cost reduction.",
        icon: Briefcase,
      },
    ],
    cta: "Contact us to learn more",
  },
  ar: {
    title: "دراسات الحالة",
    subtitle: "قصص نجاح واقعية من عملائنا",
    description:
      "اكتشف كيف ساعدت كيستون للحلول المالية الشركات عبر مختلف الصناعات على التغلب على التحديات المالية وتحقيق أهدافها.",
    caseStudies: [
      {
        title: "بنك عالمي يقلل المخاطر التنظيمية بنسبة 40%",
        industry: "الخدمات المصرفية",
        challenge:
          "كان أحد البنوك الدولية الرائدة يكافح للبقاء على اطلاع بالتنظيمات المالية سريعة التغير عبر ولايات قضائية متعددة.",
        solution: "تنفيذ خدمة تقرير المخاطر القانونية لدينا مع معلمات مراقبة مخصصة لكل منطقة من مناطق العمليات.",
        results:
          "انخفاض بنسبة 40% في مشكلات الامتثال التنظيمي، مما وفر ما يقدر بنحو 2.3 مليون دولار في الغرامات المحتملة.",
        icon: Building,
      },
      {
        title: "شركة تكنولوجيا ناشئة تحسن استراتيجية الاستثمار",
        industry: "التكنولوجيا",
        challenge:
          "كانت شركة تكنولوجيا ناشئة سريعة النمو بحاجة إلى اتخاذ قرارات استثمارية استراتيجية مع موارد مالية محدودة.",
        solution: "نشر منصة إنسايت-إكس: البحث لدينا لتحليل اتجاهات السوق وتحديد فرص الاستثمار المثلى.",
        results: "حققت عائد استثمار أعلى بنسبة 28% على الاستثمارات الاستراتيجية مقارنة بمعايير الصناعة.",
        icon: Globe,
      },
      {
        title: "شركة تصنيع تحسن التنبؤات المالية",
        industry: "التصنيع",
        challenge: "كانت شركة تصنيع متوسطة الحجم تكافح مع توقعات مالية غير دقيقة تؤثر على تخطيط الإنتاج.",
        solution: "تنفيذ خدمة المراقبة بلس لدينا مع مؤشرات أداء رئيسية مخصصة وتتبع ظروف السوق في الوقت الحقيقي.",
        results: "تحسين دقة التنبؤ بنسبة 35%، مما أدى إلى تحسين إدارة المخزون وخفض التكاليف بنسبة 18%.",
        icon: Briefcase,
      },
    ],
    cta: "اتصل بنا لمعرفة المزيد",
  },
}

export default function CaseStudiesPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const isRtl = language === "ar"

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className={`mx-auto max-w-4xl ${isRtl ? "rtl" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t.title}</h1>
          <p className="mt-4 text-xl text-muted-foreground">{t.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground">{t.description}</p>
        </motion.div>

        <div className="mt-16 space-y-12">
          {t.caseStudies.map((caseStudy, index) => {
            const Icon = caseStudy.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                className="rounded-lg border bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{caseStudy.title}</h3>
                    <p className="text-sm text-primary">{caseStudy.industry}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Challenge:</h4>
                    <p className="text-muted-foreground">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Solution:</h4>
                    <p className="text-muted-foreground">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Results:</h4>
                    <p className="text-muted-foreground">{caseStudy.results}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 border-0"
            >
              {t.cta}
              {isRtl ? <ArrowRight className="h-4 w-4 rotate-180" /> : <ArrowRight className="h-4 w-4" />}
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

