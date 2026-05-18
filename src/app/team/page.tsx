import type { Metadata } from "next";
import { CustomCursor } from "@/components/custom-cursor";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { DesignArchitecture } from "@/components/team/design-architecture";
import { FieldResearchPartners } from "@/components/team/field-research-partners";
import { InstitutionalAcknowledgement } from "@/components/team/institutional-acknowledgement";
import { SpecialThanks } from "@/components/team/special-thanks";
import { TeamGrid } from "@/components/team/team-grid";
import { TeamHero } from "@/components/team/team-hero";
import { UtilityBar } from "@/components/utility-bar";

export const metadata: Metadata = {
  title: "Meet the Team · Archaeological Museum of the Pafos District",
  description:
    "The academic and creative team behind this digital experience, and the institutional, field-research, and design partners who made it possible.",
};

export default function TeamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <CustomCursor />
      <UtilityBar />
      <Nav />
      <TeamHero />
      <TeamGrid />
      <InstitutionalAcknowledgement />
      <FieldResearchPartners />
      <DesignArchitecture />
      <SpecialThanks />
      <SiteFooter />
    </div>
  );
}
