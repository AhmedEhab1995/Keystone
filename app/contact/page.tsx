"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { z } from "zod";

const translations = {
  en: {
    title: "Contact Us",
    subtitle:
      "We'd love to hear from you. Fill out the form below to get in touch.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your.email@example.com",
      messagePlaceholder: "Enter your message here...",
      success: "Your message has been sent successfully!",
      error: "There was an error sending your message. Please try again.",
    },
    contact: {
      address: "Address",
      addressValue:
        "Office No. 24, Al Masar Building, off Kasr El Nil Street, Downtown Cairo, Egypt",
      phone: "Phone",
      phoneValue: "+971 4 123 4567",
      email: "Email",
      emailValue: "info@keystonediligence.com",
      hours: "Business Hours",
      hoursValue: "Monday to Friday, 9AM to 5PM",
    },
  },
  ar: {
    title: "اتصل بنا",
    subtitle: "نحن نحب أن نسمع منك. املأ النموذج أدناه للتواصل معنا.",
    form: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      submit: "إرسال الرسالة",
      namePlaceholder: "اسمك",
      emailPlaceholder: "بريدك@مثال.كوم",
      messagePlaceholder: "أدخل رسالتك هنا...",
      success: "تم إرسال رسالتك بنجاح!",
      error: "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.",
    },
    contact: {
      address: "العنوان",
      addressValue:
        "المكتب رقم ٢٤، مبنى المسار، متفرع من شارع قصر النيل، وسط البلد، القاهرة، مصر",
      phone: "الهاتف",
      phoneValue: "+٩٧١ ٤ ١٢٣ ٤٥٦٧",
      email: "البريد الإلكتروني",
      emailValue: "info@keystonediligence.com",
      hours: "ساعات العمل",
      hoursValue: "من الاثنين إلى الجمعة، ٩ صباحًا إلى ٥ مساءً",
    },
  },
};

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const isRtl = language === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate form data
      formSchema.parse(formData);

      // Send the email
      setStatus("loading");

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("Error response:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");

      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`mx-auto max-w-3xl text-center ${isRtl ? "rtl" : ""}`}
      >
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {t.title}
        </h1>
        <p className="mt-4 text-muted-foreground">{t.subtitle}</p>
      </motion.div>

      <div className="mt-12 md:mt-16 grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={isRtl ? "rtl" : ""}
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{t.contact.address}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.contact.addressValue}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{t.contact.email}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.contact.emailValue}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">{t.contact.hours}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.contact.hoursValue}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={isRtl ? "rtl" : ""}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className={isRtl ? "text-right block" : ""}>
                {t.form.name}
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.form.namePlaceholder}
                className={errors.name ? "border-destructive" : ""}
                dir={isRtl ? "rtl" : "ltr"}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className={isRtl ? "text-right block" : ""}
              >
                {t.form.email}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.form.emailPlaceholder}
                className={errors.email ? "border-destructive" : ""}
                dir="ltr"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="message"
                className={isRtl ? "text-right block" : ""}
              >
                {t.form.message}
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.form.messagePlaceholder}
                className={`min-h-[120px] ${
                  errors.message ? "border-destructive" : ""
                }`}
                dir={isRtl ? "rtl" : "ltr"}
              />
              {errors.message && (
                <p className="text-sm text-destructive">{errors.message}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {isRtl ? "جاري الإرسال..." : "Sending..."}
                </span>
              ) : (
                t.form.submit
              )}
            </Button>
            {status === "success" && (
              <p className="text-sm text-green-600 mt-2">{t.form.success}</p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive mt-2">{t.form.error}</p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
