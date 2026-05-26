import { Header } from "../components/UI/Header";
import { Footer } from "../components/UI/Footer";
import { NoiseOverlay } from "../components/UI";
import { AboutSection } from "../components/About/AboutSection";
import { ASCIISection } from "../components/ASCII/ASCIISection";
import { VisionSection } from "../components/Vision/VisionSection";
import { QuoteSection } from "../components/Quote/QuoteSection";
import { useGlowCursor } from "../hooks/useParallax";
import { aboutData } from "../data/aboutData";
import { visionData } from "../data/visionData";
import { quotesData } from "../data/quotesData";

export const Home = () => {
  useGlowCursor();

  return (
    <div className="dark min-h-screen bg-background text-on-surface overflow-x-hidden selection:bg-primary selection:text-surface">
      {/* Glow cursor */}
      <div
        id="glow-cursor"
        className="glow-cursor"
      />

      <Header />

      <main className="relative hairline-grid pt-[80px] md:pt-[120px]">
        <NoiseOverlay />
        <AboutSection data={aboutData} />
        <ASCIISection />
        <VisionSection data={visionData} />
        <QuoteSection quotes={quotesData} />
      </main>

      <Footer />
    </div>
  );
};
