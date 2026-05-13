export const dynamic = "force-dynamic";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import PipelineStepper from "@/components/PipelineStepper";
import FrameworksGrid from "@/components/FrameworksGrid";
import LiveTerminal from "@/components/LiveTerminal";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f1a] text-slate-200">
      <NavBar />

      <HeroSection />

      {/* Section divider */}
      <div className="section-divider" />

      <PipelineStepper />

      {/* Section divider */}
      <div className="section-divider" />

      <FrameworksGrid />

      {/* Section divider */}
      <div className="section-divider" />

      <LiveTerminal />

      {/* Section divider */}
      <div className="section-divider" />

      <CaseStudies />

      {/* Section divider */}
      <div className="section-divider" />

      <Footer />
    </main>
  );
}
