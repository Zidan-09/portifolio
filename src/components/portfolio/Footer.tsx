export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground sm:flex-row">
        <p className="font-mono">
          <span className="text-primary">{"</>"}</span> built by zidan (samuel) · {new Date().getFullYear()}
        </p>
        <p>Desenhado &amp; desenvolvido com amor.</p>
      </div>
    </footer>
  );
}
