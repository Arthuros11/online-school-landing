import { footer, navigation, schoolName } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-brand-800/30 bg-secondary-900 text-brand-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold text-white">
              {schoolName}
            </p>
            <p className="mt-3 text-sm leading-6 text-brand-100/80">
              {footer.copyright}
            </p>
          </div>

          <nav aria-label="Навигация в подвале">
            <p className="text-sm font-semibold uppercase tracking-widest text-white">
              Разделы
            </p>
            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-brand-100/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white">
              Контакты
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${footer.email}`}
                  className="text-brand-100/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {footer.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footer.phone.replace(/\s|[()]/g, "")}`}
                  className="text-brand-100/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {footer.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
