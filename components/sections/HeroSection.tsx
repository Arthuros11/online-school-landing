import Image from "next/image";
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
      className="relative overflow-x-hidden bg-gradient-to-b from-brand-50 via-white to-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-32 h-80 w-80 rounded-full bg-surface-cream/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-brand-50/80 blur-2xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Eyebrow className="order-1 text-center lg:text-left">{courseName}</Eyebrow>

        <DisplayHeading
          id="hero-heading"
          as="h1"
          className="order-2 mx-auto mt-5 max-w-3xl text-center text-[clamp(1.625rem,5vw,2.25rem)] leading-tight sm:mt-6 lg:order-4 lg:mt-8 lg:max-w-4xl lg:text-[2.75rem]"
        >
          {hero.headline}
        </DisplayHeading>

        <div className="order-3 mt-6 lg:order-2 lg:mt-8">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,560px)_minmax(0,1fr)] lg:gap-8">
            <Card className="hidden self-center lg:block lg:max-w-xs lg:justify-self-end">
              <p className="text-sm font-semibold text-brand-700">
                {heroHighlights[0].title}
              </p>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {heroHighlights[0].description}
              </p>
            </Card>

            <div className="relative mx-auto w-full max-w-[min(100%,560px)] lg:justify-self-center">
              <p
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-[4%] z-0 select-none text-center font-display text-[clamp(2.75rem,11vw,5.75rem)] font-black uppercase leading-[0.85] tracking-tighter text-brand-200/95 sm:bottom-[6%] lg:bottom-[2%] lg:text-[5.5rem]"
              >
                {heroDisplayWord}
              </p>

              <div className="relative z-10 mx-auto h-[clamp(300px,52vh,560px)] w-full max-w-[min(100%,480px)] sm:max-w-[520px] lg:max-w-none">
                <Image
                  src="/images/author/author.png"
                  alt="Ляйсан Латыпова — автор курса Sweet buket school"
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 60vw, 560px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            <Card className="hidden self-center lg:block lg:max-w-xs lg:justify-self-start">
              <p className="text-sm font-semibold text-brand-700">
                {heroHighlights[1].title}
              </p>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {heroHighlights[1].description}
              </p>
            </Card>
          </div>

          <div className="mt-6 hidden grid-cols-2 gap-4 md:grid lg:hidden">
            {heroHighlights.map((item) => (
              <Card key={item.title} className="p-5">
                <p className="text-sm font-semibold text-brand-700">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <p className="ui-body-lg order-5 mx-auto mt-8 max-w-2xl text-center lg:mt-6">
          {hero.subheadline}
        </p>

        <div className="order-6 mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:justify-center lg:mt-10">
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
