import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DisplayHeading, Eyebrow } from "@/components/ui/SectionHeading";
import { benefitsSection, courseName, hero } from "@/data/site";

const heroHighlights = [
  benefitsSection.items[0],
  benefitsSection.items[2],
];

const heroDisplayWord = hero.headline.split(":")[0]?.trim() ?? hero.headline;

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-surface-muted/40 to-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-brand-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <Eyebrow className="text-center lg:text-left">{courseName}</Eyebrow>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-6">
          <Card className="hidden lg:block lg:max-w-xs lg:justify-self-end">
            <p className="text-sm font-semibold text-brand-700">
              {heroHighlights[0].title}
            </p>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {heroHighlights[0].description}
            </p>
          </Card>

          <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
            <p
              aria-hidden="true"
              className="font-display absolute left-1/2 top-6 z-0 w-max max-w-none -translate-x-1/2 select-none text-5xl font-black uppercase leading-none tracking-tighter text-brand-200/90 sm:text-6xl lg:text-7xl"
            >
              {heroDisplayWord}
            </p>

            <div
              className="relative z-10 mb-6 aspect-[3/4] w-44 overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-100 via-surface-cream to-brand-200 shadow-card sm:w-52"
              role="img"
              aria-label="TODO: добавить фото автора курса"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(255_255_255_/_0.8),transparent_55%)]" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/80 px-3 py-2 text-center text-xs font-medium text-brand-800 backdrop-blur-sm">
                Автор курса
              </div>
            </div>

            <DisplayHeading
              id="hero-heading"
              as="h1"
              className="relative z-20 text-center text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              {hero.headline}
            </DisplayHeading>
          </div>

          <Card className="hidden lg:block lg:max-w-xs lg:justify-self-start">
            <p className="text-sm font-semibold text-brand-700">
              {heroHighlights[1].title}
            </p>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {heroHighlights[1].description}
            </p>
          </Card>
        </div>

        <p className="ui-body-lg mx-auto mt-8 max-w-2xl text-center">
          {hero.subheadline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="primary"
            href={hero.primaryCta.href}
            className="w-full sm:w-auto"
          >
            {hero.primaryCta.label}
          </Button>
          <Button
            variant="secondary"
            href={hero.secondaryCta.href}
            className="w-full sm:w-auto"
          >
            {hero.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
