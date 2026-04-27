import { AboutMuseum } from "@/components/about-museum";
import { CustomCursor } from "@/components/custom-cursor";
import { ExploreModes } from "@/components/explore-modes";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { NewsSection } from "@/components/news-section";
import { VisitSection } from "@/components/visit-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <CustomCursor />
      <Nav />
      <Hero />
      <ExploreModes />
      <AboutMuseum />
      <NewsSection />
      <VisitSection />
      <Footer />
    </div>
  );
}
