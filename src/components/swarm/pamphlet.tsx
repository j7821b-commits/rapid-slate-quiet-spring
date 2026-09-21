import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { hasReadBrief, markBriefRead } from "@/lib/swarm/brief-gate";
import { PAMPHLET } from "@/lib/swarm/pamphlet";
import { cn } from "@/lib/utils";

export function Pamphlet() {
  const navigate = useNavigate();
  const [i, setI] = useState(0);
  const [farthest, setFarthest] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const last = PAMPHLET.length - 1;
  const slide = PAMPHLET[i];
  const onLast = i === last;

  useEffect(() => {
    setUnlocked(hasReadBrief());
  }, []);

  const openDesk = useCallback(() => {
    markBriefRead();
    setUnlocked(true);
    void navigate({ to: "/desk" });
  }, [navigate]);

  const go = useCallback(
    (dir: -1 | 1) => {
      if (dir === 1 && i === last) {
        openDesk();
        return;
      }
      setI((n) => {
        const next = Math.min(last, Math.max(0, n + dir));
        setFarthest((f) => Math.max(f, next));
        return next;
      });
    },
    [i, last, openDesk],
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const [touchX, setTouchX] = useState<number | null>(null);

  return (
    <div className="mx-auto flex min-h-dvh max-w-xl flex-col px-4 py-6 sm:px-6">
      <header className="mb-6 flex items-center justify-between gap-3">
        <p className="text-xs tracking-[0.18em] text-primary uppercase">
          ALMA · a brief
        </p>
        {unlocked ? (
          <Button variant="ghost" size="sm" asChild>
            <Link to="/desk">Open the desk</Link>
          </Button>
        ) : (
          <p className="text-xs text-subtle">Read through to open the desk</p>
        )}
      </header>

      <article
        className="sheet relative flex flex-1 flex-col overflow-hidden p-6 sm:p-8"
        onTouchStart={(e) => setTouchX(e.changedTouches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          const end = e.changedTouches[0]?.clientX;
          if (touchX == null || end == null) return;
          const d = end - touchX;
          if (d < -40) go(1);
          if (d > 40) go(-1);
          setTouchX(null);
        }}
      >
        <p className="text-xs tracking-[0.16em] text-primary uppercase">
          {slide.kicker}
        </p>
        <h1 className="mt-3 text-3xl leading-tight text-fg sm:text-4xl">
          {slide.title}
        </h1>

        {"body" in slide && slide.body ? (
          <p className="mt-5 text-base leading-relaxed text-muted">{slide.body}</p>
        ) : null}

        {"points" in slide && slide.points ? (
          <ol className="mt-5 space-y-3">
            {slide.points.map((p) => (
              <li
                key={p}
                className="border-l-2 border-primary/30 pl-3 text-base leading-relaxed text-muted"
              >
                {p}
              </li>
            ))}
          </ol>
        ) : null}

        <p className="mt-auto pt-8 text-xs text-subtle">
          The building stands and the household stays. Same side.
        </p>
      </article>

      <nav className="mt-5 flex items-center justify-between gap-3">
        <Button
          variant="secondary"
          size="sm"
          disabled={i === 0}
          onClick={() => go(-1)}
          aria-label="Previous page"
        >
          <ChevronLeft className="size-4" />
          Back
        </Button>
        <ol className="flex gap-1.5" aria-label="Pages">
          {PAMPHLET.map((s, n) => (
            <li key={s.title}>
              <button
                type="button"
                aria-label={`Page ${n + 1}: ${s.kicker}`}
                aria-current={n === i ? "page" : undefined}
                disabled={n > farthest}
                onClick={() => setI(n)}
                className={cn(
                  "block size-2.5 rounded-full",
                  n === i ? "bg-primary" : "bg-border",
                  n > farthest && "opacity-40",
                )}
              />
            </li>
          ))}
        </ol>
        {onLast ? (
          <Button variant="default" size="sm" onClick={openDesk}>
            Open the desk
            <ChevronRight className="size-4" />
          </Button>
        ) : (
          <Button
            variant="default"
            size="sm"
            onClick={() => go(1)}
            aria-label="Next page"
          >
            Next
            <ChevronRight className="size-4" />
          </Button>
        )}
      </nav>

      <p className="mt-4 text-center text-xs text-subtle">
        {i + 1} / {PAMPHLET.length}
        {onLast ? " · then the desk" : " · swipe or next"}
      </p>
    </div>
  );
}
