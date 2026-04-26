import { CustomCursor } from "@/components/custom-cursor";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <CustomCursor />
      <Nav />
      <Hero />
    </div>
  );
}
