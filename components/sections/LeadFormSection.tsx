"use client";

import { FormEvent, useState } from "react";
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
      className="scroll-mt-20 bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <h2
              id="lead-form-heading"
              className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
            >
              {leadForm.title}
            </h2>
            <p className="mt-4 text-lg text-zinc-600">{leadForm.subtitle}</p>
          </div>

          {isSubmitted ? (
            <div
              role="status"
              className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-6 text-center text-green-800"
            >
              {leadForm.successMessage}
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8"
              noValidate
            >
              <div>
                <label
                  htmlFor="lead-name"
                  className="block text-sm font-medium text-zinc-900"
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
                  className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus-visible:border-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-600"
                />
              </div>

              <div>
                <label
                  htmlFor="lead-phone"
                  className="block text-sm font-medium text-zinc-900"
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
                  className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus-visible:border-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-600"
                />
              </div>

              <div>
                <label
                  htmlFor="lead-email"
                  className="block text-sm font-medium text-zinc-900"
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
                  className="mt-2 block w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus-visible:border-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-600"
                />
              </div>

              <p className="text-xs leading-5 text-zinc-500">
                {leadForm.privacyNote}
              </p>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                {leadForm.submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
