import { Check } from "lucide-react";
import { contactEmail, plans } from "../content";
import { Reveal } from "./Reveal";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-[#f9fafb] px-4 py-5 md:px-6 md:py-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="overflow-hidden rounded-[48px] border border-slate-200/50 bg-white p-6 shadow-[0_40px_100px_-20px_rgba(232,119,34,0.08)] sm:p-8 lg:p-12">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
              Pricing
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Simple plans for the room you run
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              PlateUp handles ordering and the kitchen board — guests still pay at
              the table. Subscribe monthly, or save with yearly billing. All prices
              in LKR.
            </p>
          </Reveal>

          <div className="mx-auto mt-8 grid max-w-4xl gap-5 md:grid-cols-2">
            {plans.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 90}>
                <article
                  className={`tilt-card flex h-full flex-col rounded-2xl border p-6 sm:p-7 ${
                    plan.featured
                      ? "border-brand/30 bg-brand text-white shadow-xl shadow-brand/15 md:-translate-y-2"
                      : "border-slate-200/60 bg-[#f9fafb]"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
                    {plan.featured && plan.badge && (
                      <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-brand">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-2 text-sm ${plan.featured ? "text-white/75" : "text-muted"}`}
                  >
                    {plan.blurb}
                  </p>
                  <p className="mt-6 font-display text-4xl font-semibold tracking-tight">
                    <span
                      className={`mr-1 text-lg font-medium ${
                        plan.featured ? "text-white/80" : "text-muted"
                      }`}
                    >
                      Rs.
                    </span>
                    {plan.priceDisplay}
                    <span
                      className={`text-base font-medium ${
                        plan.featured ? "text-white/65" : "text-muted"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </p>
                  <p
                    className={`mt-1 text-xs font-medium ${
                      plan.featured ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {plan.billed}
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {plan.features.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            plan.featured ? "text-white" : "text-brand-deep"
                          }`}
                        />
                        <span className={plan.featured ? "text-white/90" : "text-ink/80"}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${contactEmail}?subject=PlateUp%20${encodeURIComponent(plan.name)}%20plan`}
                    className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform duration-300 hover:scale-[1.02] ${
                      plan.featured ? "bg-white text-brand" : "bg-brand text-white hover:bg-brand-deep"
                    }`}
                  >
                    Get started
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted">
            Prices in Sri Lankan Rupees (LKR / Rs.). We’ll be in touch at{" "}
            {contactEmail}.
          </p>
        </div>
      </div>
    </section>
  );
}
