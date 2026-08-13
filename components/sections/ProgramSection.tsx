import { Card } from "@/components/ui/Card";
import { SectionDecor } from "@/components/ui/SectionDecor";
import { DisplayHeading } from "@/components/ui/SectionHeading";
import { programSection } from "@/data/program";

export function ProgramSection() {
  return (
    <section
      id="program"
      aria-labelledby="program-heading"
      className="relative scroll-mt-20 overflow-hidden bg-surface-muted py-20 sm:py-24 lg:py-28"
    >
      <SectionDecor variant="program" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <DisplayHeading id="program-heading" as="h2" className="ui-section-title">
            {programSection.title}
          </DisplayHeading>
          <p className="ui-body-lg mt-5 sm:mt-6">{programSection.subtitle}</p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          {programSection.modules.map((module, index) => (
            <li key={module.title} className="min-h-0">
              <Card className="group relative h-full overflow-hidden p-5 sm:p-6 lg:p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-200 via-brand-500 to-brand-200 opacity-80"
                />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 text-sm font-bold text-white shadow-button sm:h-14 sm:w-14 sm:text-base"
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold leading-snug text-foreground sm:text-xl">
                      {module.title}
                    </h3>
                    <ul className="mt-4 grid gap-2">
                      {module.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-3 rounded-xl bg-brand-50/60 px-3 py-2.5 text-sm leading-6 text-text-secondary"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-600"
                          />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
