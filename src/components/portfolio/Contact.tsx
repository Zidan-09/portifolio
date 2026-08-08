import { useState, type FormEvent } from "react";
import { Section } from "./Section";
import { Mail, Github, Linkedin, Send, Check } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <Section
      id="contact"
      eyebrow="04 — Contato"
      title="Vamos Construir algo Juntos."
      description="Aberto para trabalho Backend, serviço freela, ou apenas uma boa conversa."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
        <div className="reveal space-y-3">
          <a
            href="mailto:samuelpnascimentodev@gmail.com"
            className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary">
              <Mail className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </p>
              <p className="truncate text-sm font-medium text-foreground group-hover:text-primary">
                samuelpnascimentodev@gmail.com
              </p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-backend-se/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary">
              <Linkedin className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                LinkedIn
              </p>
              <p className="truncate text-sm font-medium text-foreground group-hover:text-primary">
                /in/samuel-backend-se
              </p>
            </div>
          </a>
          <a
            href="https://github.com/Zidan-09"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-primary/40"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary">
              <Github className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                GitHub
              </p>
              <p className="truncate text-sm font-medium text-foreground group-hover:text-primary">
                @Zidan-09
              </p>
            </div>
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal space-y-4 rounded-2xl border border-border bg-surface p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Nome
              </label>
              <input
                id="name"
                required
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-ring"
                placeholder="Seu Nome"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-ring"
                placeholder="seu@email.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="w-full resize-none rounded-md border border-border bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-ring"
              placeholder="Me diga sobre seu projeto, trabalho ou ideia..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {sent ? (
              <>
                <Check className="h-4 w-4" /> Enviado
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Enviar Mensagem
              </>
            )}
          </button>
        </form>
      </div>
    </Section>
  );
}
