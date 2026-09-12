import { ChefHat, QrCode, UtensilsCrossed } from "lucide-react";
import { features } from "../content";
import { PngSlot } from "./PngSlot";
import { Reveal } from "./Reveal";

const icons = [QrCode, ChefHat, UtensilsCrossed];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#f9fafb] px-4 py-5 md:px-6 md:py-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="overflow-hidden rounded-[48px] border border-slate-200/50 bg-white p-6 shadow-[0_40px_100px_-20px_rgba(232,119,34,0.08)] sm:p-8 lg:p-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-xs">
              1
            </span>
            <span className="rounded-full border border-slate-200/60 px-3 py-1 text-xs font-medium text-ink sm:px-4 sm:py-1.5 sm:text-[13px]">
              Introducing PlateUp
            </span>
          </div>

          <h2 className="mb-8 font-display text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink sm:mb-10">
            Table-side ordering that keeps
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            visits separate
          </h2>

          <div className="lg:hidden">
            <p className="text-[15px] font-medium leading-[1.6] text-ink sm:text-[17px]">
              PlateUp is a QR ordering system for sit-down restaurants, cafés, and
              bistros. Guests scan, browse, and order from their table — the kitchen
              sees the ticket instantly.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-5">
              <PngSlot
                src="/aboutus.png"
                alt="Restaurant using PlateUp"
                label="About photo"
                className="aspect-[438/346] w-full sm:w-[45%]"
                rounded="rounded-2xl"
              />
              <PngSlot
                src="/hero.png"
                alt="PlateUp guest ordering"
                label="Hero image"
                className="aspect-[900/600] w-full sm:w-[55%]"
                rounded="rounded-2xl"
              />
            </div>
          </div>

          <div className="hidden items-end gap-6 lg:grid lg:grid-cols-[26%_1fr_48%] xl:gap-8">
            <PngSlot
              src="/aboutus.png"
              alt="Restaurant using PlateUp"
              label="About photo"
              className="aspect-[438/346] w-full self-end"
              rounded="rounded-2xl"
            />

            <div className="flex flex-col items-end self-start">
              <p className="text-left text-base font-medium leading-[1.65] text-ink xl:text-lg">
                PlateUp is a QR ordering system for sit-down
                <br />
                restaurants, cafés, and bistros. Guests scan,
                <br />
                browse, and order from their table.
              </p>
              <a
                href="#demo"
                className="mt-8 inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
              >
                About our product
              </a>
            </div>

            <PngSlot
              src="/hero.png"
              alt="PlateUp guest ordering"
              label="Hero image"
              className="aspect-[3/2] w-full self-end"
              rounded="rounded-2xl"
            />
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-10">
            {features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={feature.title} delay={i * 90}>
                  <article className="tilt-card h-full rounded-2xl border border-slate-200/60 bg-[#f9fafb] p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/12 text-brand-deep">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {feature.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
