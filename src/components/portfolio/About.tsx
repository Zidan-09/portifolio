import { Section } from "./Section";
import Avatar from "@/assets/avatar.jpg";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 — Sobre Mim"
      title="Minha Jornada Como Desenvolvedor"
    >
      <div className="grid gap-12 md:grid-cols-[auto,1fr] md:items-start">
        <div className="reveal flex justify-center md:justify-start">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-primary/20 blur-2xl" />

            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-border sm:h-40 sm:w-40">
              <img
                src={Avatar}
                alt="Foto de Samuel"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="reveal space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Minha jornada na programação começou com{" "}
            <span className="text-foreground">lógica de programação em Python</span>,
            onde desenvolvi a base do pensamento computacional e resolução de problemas.
            Em seguida, aprofundei meus conhecimentos em{" "}
            <span className="text-foreground">programação orientada a objetos com TypeScript</span>,
            o que me permitiu evoluir para o desenvolvimento backend utilizando{" "}
            <span className="text-foreground">Node.js e Express</span>.
          </p>

          <p>
            Com o tempo, explorei o desenvolvimento frontend com{" "}
            <span className="text-foreground">HTML, CSS e JavaScript</span>, evoluindo para aplicações mais estruturadas com{" "}
            <span className="text-foreground">React e TypeScript</span>, além de experiências fullstack com{" "}
            <span className="text-foreground">Next.js</span>.
          </p>

          <p>
            Atualmente, meu foco está em{" "}
            <span className="text-foreground">backend com Java e Spring Boot</span>,
            aplicando princípios como{" "}
            <span className="text-foreground">Clean Architecture, SOLID e DDD</span>{" "}
            para construir sistemas escaláveis, bem estruturados e de fácil manutenção.
          </p>

          <p>
            Busco escrever código claro, com boas abstrações e responsabilidades bem definidas,
            pensando sempre na evolução do sistema e na experiência de quem dará manutenção no futuro.
          </p>
        </div>
      </div>
    </Section>
  );
}