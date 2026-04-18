import { Github, Linkedin, ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)",
        }}
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-3xl">
          <div className="animate-fade-in-up [animation-delay:50ms] mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Disponível para Oportunidades!
          </div>

          <h1 className="animate-fade-in-up [animation-delay:150ms] text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            Olá, eu sou <span className="text-gradient">Samuel</span>.
          </h1>

          <p className="animate-fade-in-up [animation-delay:250ms] mt-4 font-mono text-base text-primary sm:text-lg">
            <span className="cursor-blink">Desenvolvedor Backend · Java &amp; Spring Boot</span>
          </p>

          <p className="animate-fade-in-up [animation-delay:350ms] mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Eu construo soluções escaláveis com foco em arquitetura limpa, princípios SOLID e APIs Rest.
          </p>

          <div className="animate-fade-in-up [animation-delay:450ms] mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Ver Meus Projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
            >
              <Mail className="h-4 w-4" />
              Me Contate
            </a>

            <div className="ml-1 flex items-center gap-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
