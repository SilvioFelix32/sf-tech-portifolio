import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedBackground from "./AnimatedBackground";

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  const handleDownloadCV = () => {
    const cvFileName = language === 'en' ? 'Silvio_Felix_CV_English.pdf' : 'Curriculo_Silvio_Felix.pdf';
    const link = document.createElement('a');
    link.href = `/${cvFileName}`;
    link.download = cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 section relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="stagger-animation">
            <p className="text-accent font-medium mb-2">{t("Olá, meu nome é")}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Silvio Félix
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6">
              {t("Desenvolvedor Full-Stack")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              {t("hero_description")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90"
                onClick={() => window.open('https://github.com/SilvioFelix32?tab=repositories', '_blank')}
              >
                {t("Ver Projetos")} <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadCV}
              >
                {t("Baixar CV")}
              </Button>
            </div>
          </div>

          <div className="hidden md:flex justify-center relative animate-fade-in">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-accent to-blue-500 shadow-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-60 h-60 lg:w-76 lg:h-76 rounded-full bg-background flex items-center justify-center overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                  <img src="/silvio.jpg" alt="Silvio Félix" width={300} height={300} className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
