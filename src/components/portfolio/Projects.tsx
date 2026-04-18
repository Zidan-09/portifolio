import { Section } from "./Section";
import { Github, ExternalLink, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import LaLlogo from "@/assets/letraaletralogo.png";
import SimoneLogo from "@/assets/simonelogo.png";

interface Project {
  name: string;
  description: string;
  image?: string;
  stack: string[];
  github: string;
  demo?: string;
  featured?: boolean;
  highlight?: string;
}

const projects: Project[] = [
  {
    name: "Letra a Letra",
    description:
      "Jogo multiplayer em tempo real baseado em turnos, com gerenciamento de salas, sincronização de estado e pontuação ao vivo. Backend desenvolvido com foco em arquitetura limpa, comunicação via WebSocket e controle consistente de estado entre múltiplos jogadores.",
    stack: ["Java", "Spring Boot", "WebSocket", "PostgreSQL"],
    image: LaLlogo,
    github: "https://github.com/Zidan-09/Letra-a-Letra-API",
    demo: "https://letra-a-letra.vercel.app/",
    featured: true,
    highlight:
      "Multiplayer em tempo real · WebSocket · Gerenciamento de estado · Arquitetura limpa",
  },
  {
    name: "Simone Festas",
    description:
      "Aplicação fullstack para aluguel de artigos para festas, com autenticação JWT e controle de acesso por papéis. Estruturada com separação clara de responsabilidades e integração com banco de dados relacional, com deploy em ambiente cloud.",
    image: SimoneLogo,
    stack: ["TypeScript", "Next.js", "PostgreSQL", "Vercel"],
    github: "https://github.com/Zidan-09/simone-festas-application",
    demo: "https://simonefestas.vercel.app/home",
    featured: true,
    highlight: "Fullstack · JWT · Banco relacional · Deploy",
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        "reveal group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card",
        project.featured && "lg:col-span-2",
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
      </div>

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              className="h-30 w-30 object-contain opacity-90 rounded-lg"
            />
          )}

          <div>
            {project.featured && (
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                <Star className="h-3 w-3" /> Destaque
              </div>
            )}

            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {project.name}
            </h3>

            {project.highlight && (
              <p className="mt-1 font-mono text-xs text-primary">
                {project.highlight}
              </p>
            )}
          </div>
        </div>
      </div>

      <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-border bg-background/50 px-2 py-1 font-mono text-[11px] text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="relative mt-6 flex items-center gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-3 py-2 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
        >
          <Github className="h-3.5 w-3.5" /> GitHub
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary/15 px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/25"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Demo
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 — Projetos"
      title="Projetos Desenvolvidos"
      description="Projetos que demonstram minha forma de construir aplicações reais, com foco em arquitetura, clareza e consistência."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </Section>
  );
}