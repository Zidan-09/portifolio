import { Section } from "./Section";
import { 
  Coffee, Leaf, Layers, Container, Boxes,
  GitBranch, Code2, Database, Server, Globe 
} from "lucide-react";

const backend = [
  { name: "Java", icon: Coffee, note: "Linguagem Principal" },
  { name: "Spring Boot", icon: Leaf, note: "APIs & Serviços" },
  { name: "Clean Architecture", icon: Layers, note: "Design dos Sistemas" },
  { name: "DDD", icon: Boxes, note: "Modelagem por Domínio" }
];

const tools = [
  { name: "Git", icon: GitBranch, note: "Versionamento" },
  { name: "Docker", icon: Container, note: "Conteinarização" },
  { name: "VS Code", icon: Code2, note: "IDE Geral" },
  { name: "IntelliJ IDEA", icon: Code2, note: "IDE Focada em Java" }
];

const experiences = [
  { name: "TypeScript", icon: Code2, note: "Javascript Tipado" },
  { name: "Node.js", icon: Server, note: "Backend com Express" },
  { name: "Next.js", icon: Globe, note: "Framework Fullstack React" }
];

const infrastructure = [
  { name: "PostgreSQL", icon: Database, note: "Banco de Dados Relacional" },
  { name: "MySQL", icon: Database, note: "Banco de Dados Relacional" },
  { name: "Vercel", icon: Globe, note: "Deploy e Hospedagem" }
];

export function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="02 — Habilidades Tecnicas"
      title="Ferramentas Que Uso No Dia-A-Dia"
      description="Ferramentas e práticas voltadas à construção de sistemas backend escaláveis, com foco em arquitetura e clareza."
    >
      <div className="grid grid-rows-2 gap-4 sm:grid-rows-3 lg:grid-rows-5">

        <div>
          <p className="text-lg">Backend e Arquitetura</p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {backend.map((t) => (
              <div
                key={t.name}
                className="reveal group relative overflow-hidden rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-elevated hover:shadow-card"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <t.icon className="h-7 w-7 text-primary" />
                <p className="mt-4 text-sm font-medium text-foreground">{t.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <p className="text-lg">Ferramentas</p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 justify-center">
            {tools.map((t) => (
              <div
                key={t.name}
                className="reveal group relative overflow-hidden rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-elevated hover:shadow-card"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <t.icon className="h-7 w-7 text-primary" />
                <p className="mt-4 text-sm font-medium text-foreground">{t.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-lg">Outras Experiências</p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {experiences.map((t) => (
              <div
                key={t.name}
                className="reveal group relative overflow-hidden rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-elevated hover:shadow-card"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <t.icon className="h-7 w-7 text-primary" />
                <p className="mt-4 text-sm font-medium text-foreground">{t.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-lg">Infraestrutura</p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {infrastructure.map((t) => (
              <div
                key={t.name}
                className="reveal group relative overflow-hidden rounded-xl border border-border bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-surface-elevated hover:shadow-card"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <t.icon className="h-7 w-7 text-primary" />
                <p className="mt-4 text-sm font-medium text-foreground">{t.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
