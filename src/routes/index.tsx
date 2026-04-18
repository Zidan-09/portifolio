import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { TechStack } from "@/components/portfolio/TechStack";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Loader } from "@/components/portfolio/Loader";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Samuel — Desenvolvedor Backend | Java & Spring Boot" },
      {
        name: "description",
        content:
          "Portfolio de Samuel, um desenvolvedor backend focado em Java, Spring Boot, clean architecture e sistemas escaláveis.",
      },
      {
        property: "og:title",
        content: "Samuel — Desenvolvedor Backend | Java & Spring Boot",
      },
      {
        property: "og:description",
        content:
          "Portfolio de Samuel, um desenvolvedor backend focado em Java, Spring Boot, clean architecture e sistemas escaláveis.",
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
