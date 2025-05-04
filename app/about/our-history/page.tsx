"use client";

import { useLanguage } from "@/components/language-provider";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OurHistoryPage() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className={`mx-auto max-w-4xl ${isRtl ? "rtl" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="inline-block text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 pb-1">
            {t.about.history.title}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {t.about.history.subtitle}
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          style={{ opacity, scale }}
          className="mt-16 relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-400"></div>

          {/* Timeline events */}
          <div className="relative">
            {t.about.history.timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1 * index }}
                className={`mb-16 flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-lg shadow-lg border transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <span className="text-sm font-bold text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold mt-1">{event.title}</h3>
                    <p className="mt-2 text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 border-4 border-background z-10"
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
