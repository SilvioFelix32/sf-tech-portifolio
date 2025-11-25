import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-title">{t("Contato")}</h2>

        <div className="max-w-2xl mx-auto text-center mt-12 animate-fade-in">
          <h3 className="text-3xl font-semibold mb-6">{t("Vamos conversar!")}</h3>
          <p className="text-lg mb-10 text-muted-foreground">
            {t("contact_description")}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="mailto:silvio.felix32@hotmail.com"
              className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card hover:bg-accent/10 transition-colors border border-border/50"
            >
              <Mail className="text-accent" size={24} />
              <span>silvio.felix32@hotmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/silviofelix32/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card hover:bg-accent/10 transition-colors border border-border/50"
            >
              <Linkedin className="text-accent" size={24} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://wa.me/5528999002593"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card hover:bg-accent/10 transition-colors border border-border/50"
            >
              <Phone className="text-accent" size={24} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
