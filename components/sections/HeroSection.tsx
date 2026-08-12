import { courseName, hero } from "@/data/site";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-gradient-to-b from-brand-50 to-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-700">
            {courseName}
          </p>
          <h1
            id="hero-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl"
          >
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:w-auto"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex w-full items-center justify-center rounded-full border border-zinc-300 bg-white px-8 py-3.5 text-base font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:w-auto"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
