"use client";

import { FormEvent, useState } from "react";
import { Card } from "@/components/ui/Card";
import { DisplayHeading } from "@/components/ui/SectionHeading";
import { leadForm } from "@/data/site";

type FormFields = {
  name: string;
  phone: string;
  email: string;
};

const initialFields: FormFields = {
  name: "",
  phone: "",
  email: "",
};

export function LeadFormSection() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Mock-отправка: данные не уходят на сервер
    setIsSubmitted(true);
    setFields(initialFields);
  }

  return (
    <section
      id="lead-form"
      aria-labelledby="lead-form-heading"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-brand-50 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-20 h-64 w-64 rounded-full bg-brand-100/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 bottom-10 h-56 w-56 rounded-full bg-surface-cream/80 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <DisplayHeading
              id="lead-form-heading"
              as="h2"
              className="ui-section-title"
            >
              {leadForm.title}
            </DisplayHeading>
            <p className="ui-body-lg mt-5 sm:mt-6">{leadForm.subtitle}</p>
          </div>

          {isSubmitted ? (
            <Card
              role="status"
              className="mx-auto mt-12 max-w-xl border-brand-200 bg-brand-50 p-8 text-center sm:mt-14 sm:p-10"
            >
              <span
                aria-hidden="true"
                className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-brand-700"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <p className="text-base font-medium leading-7 text-brand-800 sm:text-lg">
                {leadForm.successMessage}
              </p>
            </Card>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="ui-card relative mx-auto mt-12 max-w-xl overflow-hidden p-6 sm:mt-14 sm:p-8 lg:p-10"
              noValidate
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-200 via-brand-500 to-brand-200"
              />

              <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                <div className="md:col-span-1">
                  <label
                    htmlFor="lead-name"
                    className="block text-sm font-medium text-foreground"
                  >
                    Имя
                  </label>
                  <input
                    id="lead-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Иван"
                    value={fields.name}
                    onChange={(event) =>
                      setFields((current) => ({
                        ...current,
                        name: event.target.value,
                      }))
                    }
                    className="ui-input"
                  />
                </div>

                <div className="md:col-span-1">
                  <label
                    htmlFor="lead-phone"
                    className="block text-sm font-medium text-foreground"
                  >
                    Телефон
                  </label>
                  <input
                    id="lead-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+7 (900) 000-00-00"
                    value={fields.phone}
                    onChange={(event) =>
                      setFields((current) => ({
                        ...current,
                        phone: event.target.value,
                      }))
                    }
                    className="ui-input"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="lead-email"
                    className="block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="lead-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="example@mail.com"
                    value={fields.email}
                    onChange={(event) =>
                      setFields((current) => ({
                        ...current,
                        email: event.target.value,
                      }))
                    }
                    className="ui-input"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-5 sm:mt-8">
                <p className="text-center text-xs leading-5 text-text-secondary sm:text-left">
                  {leadForm.privacyNote}
                </p>

                <button
                  type="submit"
                  className="ui-btn-primary w-full sm:text-base"
                >
                  {leadForm.submitLabel}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
