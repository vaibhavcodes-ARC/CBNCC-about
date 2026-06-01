import { Footer } from "../components/UI/Footer";
import { NoiseOverlay } from "../components/UI";
import { AboutSection } from "../components/About/AboutSection";
import { ASCIISection } from "../components/ASCII/ASCIISection";
import { QuoteSection } from "../components/Quote/QuoteSection";
import { useGlowCursor } from "../hooks/useParallax";
import { aboutData } from "../data/aboutData";
import { quotesData } from "../data/quotesData";

export const Home = () => {
  useGlowCursor();

  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden selection:bg-primary selection:text-surface">
      {/* Glow cursor */}
      <div
        id="glow-cursor"
        className="glow-cursor"
      />

      <main className="relative pt-0 md:pt-0">
        <NoiseOverlay />
        <AboutSection data={aboutData} />
        <ASCIISection />
        <QuoteSection quotes={quotesData} />
      </main>

      <Footer />
    </div>
  );
};
