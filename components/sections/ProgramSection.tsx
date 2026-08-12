import { programSection } from "@/data/program";

export function ProgramSection() {
  return (
    <section
      id="program"
      aria-labelledby="program-heading"
      className="scroll-mt-20 bg-zinc-50 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="program-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
          >
            {programSection.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-600">{programSection.subtitle}</p>
        </div>

        <ol className="mt-12 space-y-6">
          {programSection.modules.map((module, index) => (
            <li
              key={module.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <span
                  aria-hidden="true"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700"
                >
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold text-zinc-900">
                    {module.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {module.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2 text-sm leading-6 text-zinc-600"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600"
                        />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
