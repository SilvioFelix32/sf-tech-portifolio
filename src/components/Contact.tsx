import React from "react";
import { Linkedin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext/LanguageContext";

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">{t("contact_heading")}</h2>
        <div className="mt-14 text-center">
          <h3 className="text-3xl font-semibold mb-5">{t("contact_title")}</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact_description")}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:silvio.felix32@hotmail.com"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-card border border-border/50 text-sm hover:border-primary/40 transition-colors"
            >
              <Mail size={16} className="text-primary" />
              silvio.felix32@hotmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/silviofelix32/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-card border border-border/50 text-sm hover:border-primary/40 transition-colors"
            >
              <Linkedin size={16} className="text-primary" />
              LinkedIn
            </a>
            <a
              href="https://wa.me/5532999852418"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-card border border-border/50 text-sm hover:border-primary/40 transition-colors"
            >
              <Phone size={16} className="text-primary" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
