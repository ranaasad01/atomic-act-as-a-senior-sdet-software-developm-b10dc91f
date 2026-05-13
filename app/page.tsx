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

      {/* Hero — first impression, headline & call-to-action */}
      <HeroSection />

      <div className="section-divider" />

      {/* How it works — step-by-step pipeline overview */}
      <section aria-labelledby="pipeline-heading">
        <h2 id="pipeline-heading" className="sr-only">How It Works</h2>
        <PipelineStepper />
      </section>

      <div className="section-divider" />

      {/* Supported frameworks & integrations */}
      <section aria-labelledby="frameworks-heading">
        <h2 id="frameworks-heading" className="sr-only">Supported Frameworks</h2>
        <FrameworksGrid />
      </section>

      <div className="section-divider" />

      {/* Live demo — see it in action right in the browser */}
      <section aria-labelledby="terminal-heading">
        <h2 id="terminal-heading" className="sr-only">Live Terminal Demo</h2>
        <LiveTerminal />
      </section>

      <div className="section-divider" />

      {/* Real-world case studies & success stories */}
      <section aria-labelledby="cases-heading">
        <h2 id="cases-heading" className="sr-only">Case Studies</h2>
        <CaseStudies />
      </section>

      <div className="section-divider" />

      <Footer />
    </main>
  );
}