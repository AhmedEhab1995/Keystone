"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const translations = {
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions about our services",
    categories: {
      mission: "Our Mission",
      vision: "Our Vision",
      pricing: "Pricing",
      strategies: "Strategies",
      technical: "Technical",
    },
    faqs: {
      mission: [
        {
          question: "What is Keystone Financial Solutions' mission?",
          answer:
            "Our mission is to provide innovative financial solutions that help businesses navigate complex financial landscapes with confidence and clarity.",
        },
        {
          question: "How does Keystone approach client relationships?",
          answer:
            "We believe in building long-term partnerships with our clients, focusing on understanding their unique needs and delivering personalized solutions that drive success.",
        },
      ],
      vision: [
        {
          question: "What is Keystone's vision for the future?",
          answer:
            "Our vision is to become the leading provider of financial intelligence solutions globally, empowering businesses to make informed decisions in an increasingly complex financial world.",
        },
        {
          question: "How does Keystone innovate in the financial sector?",
          answer:
            "We continuously invest in cutting-edge technology and research to develop new tools and methodologies that address emerging financial challenges and opportunities.",
        },
      ],
      pricing: [
        {
          question: "How is pricing structured for Keystone's services?",
          answer:
            "Our pricing is tailored to each client's specific needs and the scope of services required. We offer flexible subscription models as well as project-based pricing.",
        },
        {
          question: "Are there any hidden fees in Keystone's services?",
          answer:
            "No, we believe in complete transparency. All fees are clearly outlined in our service agreements, with no hidden costs or surprise charges.",
        },
        {
          question: "Do you offer discounts for long-term contracts?",
          answer:
            "Yes, we provide preferential rates for clients who commit to longer-term partnerships, reflecting the value we place on sustained collaboration.",
        },
      ],
      strategies: [
        {
          question: "What financial strategies does Keystone specialize in?",
          answer:
            "We specialize in risk management, compliance optimization, investment analysis, and financial forecasting strategies tailored to various industry sectors.",
        },
        {
          question: "How does Keystone adapt strategies to different markets?",
          answer:
            "Our team of experts continuously monitors global financial trends and regulatory changes to ensure our strategies remain effective across different market conditions and jurisdictions.",
        },
      ],
      technical: [
        {
          question: "What technologies does Keystone use in its solutions?",
          answer:
            "We leverage advanced analytics, machine learning, natural language processing, and secure cloud infrastructure to deliver our financial intelligence solutions.",
        },
        {
          question: "How secure are Keystone's digital platforms?",
          answer:
            "Security is paramount in our operations. We implement bank-grade encryption, multi-factor authentication, regular security audits, and comply with international data protection standards.",
        },
      ],
    },
  },
  ar: {
    title: "الأسئلة الشائعة",
    subtitle: "ابحث عن إجابات للأسئلة الشائعة حول خدماتنا",
    categories: {
      mission: "مهمتنا",
      vision: "رؤيتنا",
      pricing: "التسعير",
      strategies: "الاستراتيجيات",
      technical: "التقنية",
    },
    faqs: {
      mission: [
        {
          question: "ما هي مهمة كيستون للحلول المالية؟",
          answer: "مهمتنا هي تقديم حلول مالية مبتكرة تساعد الشركات على التنقل في المشهد المالي المعقد بثقة ووضوح.",
        },
        {
          question: "كيف تتعامل كيستون مع علاقات العملاء؟",
          answer:
            "نؤمن ببناء شراكات طويلة الأمد مع عملائنا، مع التركيز على فهم احتياجاتهم الفريدة وتقديم حلول مخصصة تدفع النجاح.",
        },
      ],
      vision: [
        {
          question: "ما هي رؤية كيستون للمستقبل؟",
          answer:
            "رؤيتنا هي أن نصبح المزود الرائد لحلول الذكاء المالي عالميًا، وتمكين الشركات من اتخاذ قرارات مستنيرة في عالم مالي متزايد التعقيد.",
        },
        {
          question: "كيف تبتكر كيستون في القطاع المالي؟",
          answer:
            "نستثمر باستمرار في التكنولوجيا المتطورة والبحث لتطوير أدوات ومنهجيات جديدة تعالج التحديات والفرص المالية الناشئة.",
        },
      ],
      pricing: [
        {
          question: "كيف يتم هيكلة التسعير لخدمات كيستون؟",
          answer:
            "يتم تصميم أسعارنا وفقًا لاحتياجات كل عميل ونطاق الخدمات المطلوبة. نقدم نماذج اشتراك مرنة بالإضافة إلى التسعير على أساس المشروع.",
        },
        {
          question: "هل هناك أي رسوم خفية في خدمات كيستون؟",
          answer:
            "لا، نحن نؤمن بالشفافية الكاملة. يتم توضيح جميع الرسوم بوضوح في اتفاقيات الخدمة الخاصة بنا، بدون تكاليف خفية أو رسوم مفاجئة.",
        },
        {
          question: "هل تقدمون خصومات للعقود طويلة الأجل؟",
          answer:
            "نعم، نقدم أسعارًا تفضيلية للعملاء الذين يلتزمون بشراكات طويلة الأمد، مما يعكس القيمة التي نضعها على التعاون المستدام.",
        },
      ],
      strategies: [
        {
          question: "ما هي الاستراتيجيات المالية التي تتخصص فيها كيستون؟",
          answer:
            "نحن متخصصون في إدارة المخاطر، وتحسين الامتثال، وتحليل الاستثمار، واستراتيجيات التنبؤ المالي المصممة لمختلف قطاعات الصناعة.",
        },
        {
          question: "كيف تكيف كيستون الاستراتيجيات مع الأسواق المختلفة؟",
          answer:
            "يراقب فريق الخبراء لدينا باستمرار الاتجاهات المالية العالمية والتغييرات التنظيمية لضمان بقاء استراتيجياتنا فعالة عبر ظروف السوق والولايات القضائية المختلفة.",
        },
      ],
      technical: [
        {
          question: "ما هي التقنيات التي تستخدمها كيستون في حلولها؟",
          answer:
            "نحن نستفيد من التحليلات المتقدمة والتعلم الآلي ومعالجة اللغة الطبيعية والبنية التحتية السحابية الآمنة لتقديم حلول الذكاء المالي الخاصة بنا.",
        },
        {
          question: "ما مدى أمان المنصات الرقمية لكيستون؟",
          answer:
            "الأمان هو الأولوية القصوى في عملياتنا. نقوم بتنفيذ تشفير بمستوى البنوك، والمصادقة متعددة العوامل، وعمليات تدقيق أمنية منتظمة، ونمتثل لمعايير حماية البيانات الدولية.",
        },
      ],
    },
  },
}

export default function FAQPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const isRtl = language === "ar"
  const [activeCategory, setActiveCategory] = useState("mission")

  const categories = [
    { id: "mission", label: t.categories.mission },
    { id: "vision", label: t.categories.vision },
    { id: "pricing", label: t.categories.pricing },
    { id: "strategies", label: t.categories.strategies },
    { id: "technical", label: t.categories.technical },
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`mx-auto max-w-3xl text-center ${isRtl ? "rtl" : ""}`}
      >
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{t.title}</h1>
        <p className="mt-4 text-muted-foreground">{t.subtitle}</p>
      </motion.div>

      <div className="mt-12 md:mt-16">
        <div className={`flex flex-wrap justify-center gap-2 mb-8 ${isRtl ? "rtl" : ""}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`mx-auto max-w-3xl ${isRtl ? "rtl" : ""}`}
        >
          <Accordion type="single" collapsible className="w-full">
            {t.faqs[activeCategory].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className={`text-left ${isRtl ? "text-right" : ""}`}>{faq.question}</AccordionTrigger>
                <AccordionContent className={isRtl ? "text-right" : ""}>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  )
}

