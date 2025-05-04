"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const translations = {
  en: {
    title: "Testimonials",
    subtitle: "What our clients say about us",
    description:
      "Don't just take our word for it. Here's what some of our valued clients have to say about their experience working with Keystone Financial Solutions.",
    testimonials: [
      {
        quote:
          "Keystone Financial Solutions transformed our approach to financial risk management. Their Legal Risk Report service identified several critical compliance issues that we were able to address before they became problems.",
        author: "James Wilson",
        position: "CFO, Global Banking Corporation",
        rating: 5,
      },
      {
        quote:
          "The insights we gained from Keystone's Insight-X platform were invaluable. We were able to make data-driven investment decisions that significantly outperformed our previous strategies.",
        author: "Elena Petrova",
        position: "Investment Director, Tech Innovations Inc.",
        rating: 5,
      },
      {
        quote:
          "Monitoring Plus has become an essential tool for our financial planning. The real-time alerts and comprehensive analytics have helped us stay ahead of market changes and optimize our financial operations.",
        author: "Ahmed Al-Farsi",
        position: "Financial Controller, Emirates Manufacturing",
        rating: 4,
      },
      {
        quote:
          "Working with Keystone has been a game-changer for our business. Their team's expertise and personalized approach ensured that we received solutions tailored to our specific needs.",
        author: "Sophia Chen",
        position: "CEO, Horizon Ventures",
        rating: 5,
      },
      {
        quote:
          "Monitoring Plus has become a vital part of our financial planning. The real-time alerts and dashboards give us full visibility over currency exposures and working capital, especially in volatile markets like Sudan and Ethiopia.",
        author: "Khaled Mahgoub",
        position: "Finance Manager, East Africa Trading Co.",
        rating: 5,
      },
      {
        quote:
          "Keystone’s team took the time to understand our unique challenges. Their tailored solutions helped us streamline our reporting systems and better manage cross-border transactions with West African suppliers.",
        author: "Lamia Hassan",
        position: "Chief Executive Officer, Cairo AgroTech Solutions",
        rating: 5,
      },
      {
        quote:
          "The insights we gained from Keystone’s Insight-X platform helped us restructure our investment strategy. With their analytics, we moved capital into better-performing assets across North Africa.",
        author: "Nomsa Dlamini",
        position: "Investment Director, Baobab Capital",
        rating: 5,
      },
      {
        quote:
          "Partnering with Keystone Financial Solutions helped us uncover compliance blind spots we hadn’t considered. Their Legal Risk Report gave us the clarity we needed to restructure internal controls ahead of our regulatory inspection.",
        author: "Femi Adetayo",
        position: "Chief Financial Officer, Westbridge Holdings",
        rating: 5,
      },
    ],
  },
  ar: {
    title: "الشهادات",
    subtitle: "ماذا يقول عملاؤنا عنا",
    description:
      "لا تأخذ كلمتنا فقط. إليك ما يقوله بعض عملائنا المقدرين عن تجربتهم في العمل مع كيستون للحلول المالية.",
    testimonials: [
      {
        quote:
          "غيرت كيستون للحلول المالية نهجنا في إدارة المخاطر المالية. حددت خدمة تقرير المخاطر القانونية الخاصة بهم العديد من مشكلات الامتثال الحرجة التي تمكنا من معالجتها قبل أن تصبح مشاكل.",
        author: "جيمس ويلسون",
        position: "المدير المالي، شركة الخدمات المصرفية العالمية",
        rating: 5,
      },
      {
        quote:
          "كانت الرؤى التي اكتسبناها من منصة إنسايت-إكس من كيستون لا تقدر بثمن. تمكنا من اتخاذ قرارات استثمارية قائمة على البيانات تفوقت بشكل كبير على استراتيجياتنا السابقة.",
        author: "إيلينا بتروفا",
        position: "مدير الاستثمار، شركة ابتكارات التكنولوجيا",
        rating: 5,
      },
      {
        quote:
          "أصبحت المراقبة بلس أداة أساسية للتخطيط المالي لدينا. ساعدتنا التنبيهات في الوقت الحقيقي والتحليلات الشاملة على البقاء في المقدمة من تغيرات السوق وتحسين عملياتنا المالية.",
        author: "أحمد الفارسي",
        position: "المراقب المالي، الإمارات للتصنيع",
        rating: 4,
      },
      {
        quote:
          "كان العمل مع كيستون بمثابة تغيير في قواعد اللعبة لأعمالنا. ضمنت خبرة فريقهم ونهجهم الشخصي حصولنا على حلول مصممة خصيصًا لاحتياجاتنا المحددة.",
        author: "صوفيا تشن",
        position: "الرئيس التنفيذي، هورايزون فينتشرز",
        rating: 5,
      },
      {
        quote:
          "أصبحت المراقبة بلس جزءًا حيويًا من تخطيطنا المالي. توفر لنا التنبيهات ولوحات المعلومات في الوقت الحقيقي رؤية كاملة لتعرضنا للعملات ورأس المال العامل، خاصة في الأسواق المتقلبة مثل السودان وإثيوبيا.",
        author: "خالد محجوب",
        position: "مدير مالي، شركة شرق أفريقيا للتجارة",
        rating: 5,
      },
      {
        quote:
          "خصص فريق كيستون الوقت لفهم التحديات الفريدة التي نواجهها. ساعدتنا حلولهم المصممة خصيصًا في تبسيط أنظمة التقارير وإدارة المعاملات العابرة للحدود مع الموردين في غرب أفريقيا بشكل أفضل.",
        author: "لاميا حسن",
        position: "الرئيس التنفيذي، حلول كايرو أجروتك",
        rating: 5,
      },
      {
        quote:
          "ساعدتنا الرؤى التي حصلنا عليها من منصة إنسايت-إكس من كيستون في إعادة هيكلة استراتيجيتنا الاستثمارية. من خلال تحليلاتهم، قمنا بتحويل رؤوس الأموال إلى أصول ذات أداء أفضل في شمال أفريقيا.",
        author: "نومسا دلاميني",
        position: "مديرة الاستثمار، شركة بوباب كابيتال",
        rating: 5,
      },
      {
        quote:
          "ساعدتنا الشراكة مع كيستون للحلول المالية في كشف ثغرات الامتثال التي لم نكن نأخذها في الحسبان. منحنا تقرير المخاطر القانونية الوضوح اللازم لإعادة هيكلة الرقابة الداخلية قبل التفتيش التنظيمي.",
        author: "فيمي أديتايو",
        position: "المدير المالي، شركة ويستبريدج القابضة",
        rating: 5,
      },
    ],
  },
};

export default function TestimonialsPage() {
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
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t.title}
          </h1>
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

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {t.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="rounded-lg border bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 shadow-sm"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <blockquote className="mb-4 italic text-muted-foreground">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
