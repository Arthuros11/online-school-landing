type SectionDecorProps = {
  variant: "benefits" | "program";
};

export function SectionDecor({ variant }: SectionDecorProps) {
  if (variant === "benefits") {
    return (
      <>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-surface-cream/80 blur-3xl"
        />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-8 top-16 hidden h-24 w-24 text-brand-200/60 sm:block lg:right-16 lg:top-20 lg:h-32 lg:w-32"
          viewBox="0 0 120 120"
          fill="none"
        >
          <circle cx="60" cy="60" r="52" stroke="currentColor" strokeWidth="2" />
          <circle cx="36" cy="44" r="6" fill="currentColor" />
          <circle cx="72" cy="38" r="5" fill="currentColor" />
          <circle cx="82" cy="68" r="6" fill="currentColor" />
          <circle cx="48" cy="78" r="5" fill="currentColor" />
        </svg>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute bottom-12 left-6 hidden h-20 w-20 text-brand-100 sm:block lg:left-12 lg:h-28 lg:w-28"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50 8c18 14 28 30 28 48 0 22-18 38-28 38S22 78 22 56c0-18 10-34 28-48z" opacity="0.55" />
        </svg>
      </>
    );
  }

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-12 bottom-8 h-56 w-56 rounded-full bg-surface-cream/90 blur-3xl"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-8 top-20 hidden h-28 w-28 text-brand-200/50 sm:block lg:left-16 lg:h-36 lg:w-36"
        viewBox="0 0 140 140"
        fill="none"
      >
        <rect
          x="20"
          y="20"
          width="100"
          height="100"
          rx="24"
          stroke="currentColor"
          strokeWidth="2"
          transform="rotate(12 70 70)"
        />
        <rect
          x="32"
          y="32"
          width="76"
          height="76"
          rx="16"
          stroke="currentColor"
          strokeWidth="1.5"
          transform="rotate(-8 70 70)"
          opacity="0.7"
        />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 right-10 hidden h-16 w-16 text-brand-200/40 lg:block"
        viewBox="0 0 64 64"
        fill="currentColor"
      >
        <circle cx="32" cy="32" r="28" opacity="0.5" />
        <circle cx="32" cy="32" r="16" opacity="0.35" />
      </svg>
    </>
  );
}
