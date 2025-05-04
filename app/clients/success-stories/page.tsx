"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, TrendingUp, Shield, Search } from "lucide-react"

const translations = {
  en: {
    title: "Success Stories",
    subtitle: "How we've helped our clients achieve their financial goals",
    description:
      "At Keystone Financial Solutions, we measure our success by the success of our clients. Here are some of the ways we've helped businesses transform their financial operations and achieve remarkable results.",
    stories: [
      {
        title: "From Financial Uncertainty to Strategic Growth",
        client: "A mid-sized retail chain with 50+ locations",
        challenge:
          "Facing unpredictable cash flow and difficulty planning for expansion due to limited financial visibility.",
        solution: "Implemented comprehensive financial monitoring and forecasting using our Monitoring Plus service.",
        outcome:
          "Achieved 30% improvement in cash flow management, opened 12 new locations in 18 months, and increased overall profitability by 22%.",
        icon: TrendingUp,
      },
      {
        title: "Navigating Complex Regulatory Changes",
        client: "An international financial services provider",
        challenge:
          "Struggling to keep pace with evolving financial regulations across multiple jurisdictions, risking non-compliance penalties.",
        solution: "Deployed our Legal Risk Report service with customized monitoring for each market.",
        outcome:
          "Zero compliance violations over a 24-month period, saving an estimated $3.5 million in potential fines and legal costs.",
        icon: Shield,
      },
      {
        title: "Data-Driven Investment Strategy",
        client: "A venture capital firm specializing in tech startups",
        challenge:
          "Needed better market intelligence to identify promising investment opportunities in emerging technologies.",
        solution:
          "Utilized our Insight-X: Search platform to analyze market trends, competitive landscapes, and growth potential.",
        outcome:
          "Identified three high-growth investment opportunities that yielded a 45% average return, significantly outperforming market benchmarks.",
        icon: Search,
      },
    ],
    cta: "Start your success story",
  },
  ar: {
    title: "قصص النجاح",
    subtitle: "كيف ساعدنا عملائنا على تحقيق أهدافهم المالية",
    description:
      "في كيستون للحلول المالية، نقيس نجاحنا من خلال نجاح عملائنا. فيما يلي بعض الطرق التي ساعدنا بها الشركات على تحويل عملياتها المالية وتحقيق نتائج رائعة.",
    stories: [
      {
        title: "من عدم اليقين المالي إلى النمو الاستراتيجي",
        client: "سلسلة متاجر متوسطة الحجم تضم أكثر من 50 موقعًا",
        challenge: "مواجهة تدفق نقدي غير متوقع وصعوبة في التخطيط للتوسع بسبب محدودية الرؤية المالية.",
        solution: "تنفيذ مراقبة مالية شاملة والتنبؤ باستخدام خدمة المراقبة بلس لدينا.",
        outcome:
          "تحقيق تحسن بنسبة 30% في إدارة التدفق النقدي، وافتتاح 12 موقعًا جديدًا في 18 شهرًا، وزيادة الربحية الإجمالية بنسبة 22%.",
        icon: TrendingUp,
      },
      {
        title: "التنقل في التغييرات التنظيمية المعقدة",
        client: "مزود خدمات مالية دولي",
        challenge:
          "يكافح لمواكبة اللوائح المالية المتطورة عبر ولايات قضائية متعددة، مما يعرضه لخطر عقوبات عدم الامتثال.",
        solution: "نشر خدمة تقرير المخاطر القانونية لدينا مع مراقبة مخصصة لكل سوق.",
        outcome:
          "صفر انتهاكات للامتثال على مدى فترة 24 شهرًا، مما وفر ما يقدر بنحو 3.5 مليون دولار في الغرامات المحتملة والتكاليف القانونية.",
        icon: Shield,
      },
      {
        title: "استراتيجية استثمار قائمة على البيانات",
        client: "شركة رأس مال مغامر متخصصة في الشركات الناشئة في مجال التكنولوجيا",
        challenge: "الحاجة إلى استخبارات سوق أفضل لتحديد فرص الاستثمار الواعدة في التقنيات الناشئة.",
        solution: "استخدام منصة إنسايت-إكس: البحث لدينا لتحليل اتجاهات السوق والمشهد التنافسي وإمكانات النمو.",
        outcome:
          "تحديد ثلاث فرص استثمارية عالية النمو أسفرت عن عائد متوسط بنسبة 45%، متفوقة بشكل كبير على معايير السوق.",
        icon: Search,
      },
    ],
    cta: "ابدأ قصة نجاحك",
  },
}

export default function SuccessStoriesPage() {
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
          {t.stories.map((story, index) => {
            const Icon = story.icon
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
                    <h3 className="text-xl font-bold">{story.title}</h3>
                    <p className="text-sm text-primary">{story.client}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Challenge:</h4>
                    <p className="text-muted-foreground">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Solution:</h4>
                    <p className="text-muted-foreground">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Outcome:</h4>
                    <p className="text-muted-foreground">{story.outcome}</p>
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

