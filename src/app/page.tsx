import { AboutMuseum } from "@/components/about-museum";
import { BecomeMember } from "@/components/become-member";
import { CustomCursor } from "@/components/custom-cursor";
import { ExploreModes } from "@/components/explore-modes";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { NewsSection } from "@/components/news-section";
import { SiteFooter } from "@/components/site-footer";
import { UtilityBar } from "@/components/utility-bar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <CustomCursor />
      <UtilityBar />
      <Nav />
      <Hero />
      <ExploreModes />
      <BecomeMember />
      <AboutMuseum />
      <NewsSection />
      <SiteFooter />
    </div>
  );
}
