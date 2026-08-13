import { Card } from "@/components/ui/Card";
import { SectionDecor } from "@/components/ui/SectionDecor";
import { DisplayHeading } from "@/components/ui/SectionHeading";
import { benefitsSection } from "@/data/site";

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      aria-labelledby="benefits-heading"
      className="relative scroll-mt-20 overflow-hidden bg-brand-50 py-20 sm:py-24 lg:py-28"
    >
      <SectionDecor variant="benefits" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <DisplayHeading id="benefits-heading" as="h2" className="ui-section-title">
            {benefitsSection.title}
          </DisplayHeading>
          <p className="ui-body-lg mt-5 sm:mt-6">{benefitsSection.subtitle}</p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {benefitsSection.items.map((item, index) => (
            <li key={item.title} className="min-h-0">
              <Card className="group relative h-full overflow-hidden p-5 transition-shadow hover:shadow-card-hover sm:p-6 lg:p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="relative flex items-start gap-4 sm:gap-5">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 text-sm font-bold text-brand-800 shadow-sm sm:h-12 sm:w-12"
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-6 text-text-secondary sm:mt-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
