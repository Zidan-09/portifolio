import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Loader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 600);
    const t2 = setTimeout(() => setHidden(true), 1100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500",
        done && "pointer-events-none opacity-0",
      )}
    >
      <div className="flex items-center gap-3 font-mono text-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
        </span>
        <span className="text-muted-foreground">
          <span className="text-primary">{"</>"}</span> carregando...
        </span>
      </div>
    </div>
  );
}
