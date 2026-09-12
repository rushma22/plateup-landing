import { ArrowRight } from "lucide-react";
import { featuredWork } from "../content";
import { PngSlot } from "./PngSlot";

function LinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-20 bg-[#f9fafb] px-4 py-5 md:px-6 md:py-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="overflow-hidden rounded-[28px] border border-slate-200/50 bg-white p-6 shadow-[0_40px_100px_-20px_rgba(232,119,34,0.08)] sm:p-8 md:rounded-[48px] lg:p-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-xs">
              2
            </span>
            <span className="rounded-full border border-slate-200/60 px-3 py-1 text-xs font-medium text-ink sm:px-4 sm:py-1.5 sm:text-[13px]">
              See it in action
            </span>
          </div>

          <h2 className="mb-8 font-display text-[clamp(1.75rem,5vw,3.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-ink sm:mb-10">
            How PlateUp works
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-7">
            {featuredWork.map((item, index) => (
              <article key={item.title}>
                <a
                  href={item.href}
                  className={`group relative block cursor-pointer overflow-hidden rounded-2xl ${
                    index === 0 ? "aspect-[329/246] bg-brand/10" : "aspect-square bg-brand/5"
                  }`}
                >
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <PngSlot
                      src={item.image}
                      alt={item.title}
                      label={item.title}
                      className="h-full w-full"
                      rounded="rounded-2xl"
                    />
                  )}

                  <span
                    className={`absolute bottom-4 left-4 flex h-9 items-center justify-center overflow-hidden rounded-full transition-all duration-300 ease-in-out group-hover:justify-between group-hover:px-3 ${
                      index === 0
                        ? "w-9 bg-white group-hover:w-[148px]"
                        : "w-9 bg-brand group-hover:w-[168px]"
                    }`}
                  >
                    <span
                      className={`hidden text-[13px] font-medium transition-opacity delay-100 duration-300 group-hover:inline ${
                        index === 0 ? "text-ink" : "text-white"
                      }`}
                    >
                      {item.cta}
                    </span>
                    {index === 0 ? (
                      <LinkIcon className="shrink-0 transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
                    ) : (
                      <ArrowRight
                        size={14}
                        className="shrink-0 text-white transition-transform duration-300 -rotate-45 group-hover:rotate-0"
                      />
                    )}
                  </span>
                </a>

                <p className="mt-4 text-[13px] leading-relaxed text-muted sm:text-sm">
                  {item.description}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-ink sm:text-[15px]">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
