import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Arrivals } from "@/components/site/Arrivals";
import { Lookbook } from "@/components/site/Lookbook";
import { Accessories } from "@/components/site/Accessories";
import { AIStylist } from "@/components/site/AIStylist";
import { Members } from "@/components/site/Members";
import { Journal } from "@/components/site/Journal";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison — Redefining Modern Luxury" },
      {
        name: "description",
        content:
          "A modern luxury fashion house. Atelier-crafted ready-to-wear, accessories and the seasonal lookbook.",
      },
      { property: "og:title", content: "Maison — Redefining Modern Luxury" },
      {
        property: "og:description",
        content: "Atelier-crafted ready-to-wear, accessories and the seasonal lookbook.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Arrivals />
        <Lookbook />
        <Accessories />
        <AIStylist />
        <Members />
        <Journal />
      </main>
      <Footer />
    </div>
  );
}
