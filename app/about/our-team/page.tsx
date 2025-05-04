"use client";

import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurTeamPage() {
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

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
        staggerChildren: 0.2,
      },
    },
  };

  const teamImages = [
    "/images/team1.png",
    "/images/team2.png",
    "/images/team3.png",
    "/images/team4.png",
  ];

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className={`mx-auto max-w-4xl ${isRtl ? "rtl" : ""}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            {t.about.team.title}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {t.about.team.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground">{t.about.team.description}</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {t.about.team.members.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center rounded-lg border bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 shadow-lg text-center transform transition-all duration-300"
            >
              <div className="h-32 w-32 rounded-full overflow-hidden mb-4 border-4 border-gradient-to-r from-blue-500 to-cyan-400">
                <Image
                  src={teamImages[index] || "/placeholder.svg"}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-primary mb-4">{member.position}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
