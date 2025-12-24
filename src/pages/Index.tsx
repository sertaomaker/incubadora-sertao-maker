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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProgramBenefitsSection />
      <AboutSection />
      <ProcessSection />
      <ProgramsSection />
      <StartupsSection />
      {/*<ProgramHistory />*/}
      {/*<TeamSection />*/}
      <FAQ />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
