import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ProgramsSection from "@/components/ProgramsSection";
import ProgramHistory from "@/components/ProgramHistory";
import StartupsSection from "@/components/StartupsSection";
import TeamSection from "@/components/TeamSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import ProgramHighlightsSection from "@/components/ProgramBenefitsSection";
import ProgramBenefitsSection from "@/components/ProgramBenefitsSection";
import Cronograma from "@/components/Cronograma";

//Templates
import HeroSectionPreIncubacao from "@/components/templates/HeroSectionPreIncubacao";
import ProgramBenefitsSectionPreIncubacao from "@/components/templates/ProgramBenefitsSectionPreIncubacao";
import ProcessSectionPreIncubacao from "@/components/templates/ProcessSectionPreIncubacao";
import FAQPreIncubacao from "@/components/templates/FAQPreIncubacao";




const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSectionPreIncubacao /> {/* Pré Icubação*/}
      <ProgramBenefitsSectionPreIncubacao /> {/* Pré Icubação*/}
      <Cronograma />
      {/*<ProgramBenefitsSection />*/}
      <AboutSection />
      <ProcessSectionPreIncubacao/> {/*Pré incubação*/}
      {/*<ProcessSection />}
      <ProgramsSection />
      <StartupsSection />
      {/*<ProgramHistory />*/}
      {/*<TeamSection />*/}
      <FAQPreIncubacao/>
      <FAQ />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
