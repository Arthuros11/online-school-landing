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
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-24 h-96 w-96 rounded-full bg-surface-cream/80 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-56 w-[min(120%,900px)] -translate-x-1/2 rounded-full bg-white/90 blur-2xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <Eyebrow className="order-1 text-center lg:text-left">{courseName}</Eyebrow>

        <DisplayHeading
          id="hero-heading"
          as="h1"
          className="order-2 mx-auto mt-4 max-w-3xl text-center text-[clamp(1.625rem,5vw,2.25rem)] leading-tight sm:mt-5 lg:order-4 lg:mt-8 lg:max-w-4xl lg:text-[2.75rem]"
        >
          {hero.headline}
        </DisplayHeading>

        <div className="order-3 mt-4 sm:mt-6 lg:order-2 lg:mt-6">
          <div className="grid items-end gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(320px,760px)_minmax(0,1fr)] lg:gap-6 xl:gap-10">
            <Card className="hidden self-end lg:mb-[18%] lg:block lg:max-w-[240px] lg:justify-self-end xl:max-w-xs">
              <p className="text-sm font-semibold text-brand-700">
                {heroHighlights[0].title}
              </p>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {heroHighlights[0].description}
              </p>
            </Card>

            <div className="relative mx-auto flex w-full min-h-[360px] items-end justify-center sm:min-h-[440px] lg:min-h-[min(78vh,760px)] lg:justify-self-center">
              <p
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-[0%] z-0 select-none px-1 text-center font-display text-[clamp(3rem,13vw,7.5rem)] font-black uppercase leading-[0.82] tracking-tighter text-brand-200 sm:bottom-[-1%] lg:bottom-[-4%] lg:text-[7.25rem] xl:text-[8.5rem]"
              >
                {heroDisplayWord}
              </p>

              <div className="relative z-10 flex w-full justify-center overflow-visible [mask-image:linear-gradient(to_bottom,#000_0%,#000_84%,transparent_100%)]">
                <Image
                  src="/images/author/author.png"
                  alt="Ляйсан Латыпова — автор курса Sweet buket school"
                  width={960}
                  height={1200}
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 820px"
                  className="block h-[clamp(360px,62vh,820px)] w-auto max-w-[min(118vw,820px)] object-contain object-bottom sm:h-[clamp(420px,66vh,860px)] lg:h-[min(76vh,860px)] lg:max-w-none lg:origin-bottom lg:scale-[1.06]"
                />
              </div>
            </div>

            <Card className="hidden self-end lg:mb-[18%] lg:block lg:max-w-[240px] lg:justify-self-start xl:max-w-xs">
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

        <p className="ui-body-lg order-5 mx-auto mt-6 max-w-2xl text-center sm:mt-8 lg:mt-4">
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
