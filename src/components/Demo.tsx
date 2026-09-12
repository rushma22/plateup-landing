import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const slides = [
  {
    id: "browse",
    label: "Step 1",
    title: "Browse",
    hint: "Guests open the menu from their seat — photos, prices, and categories, no app download.",
    image: "/demo-menu.png",
    alt: "PlateUp guest menu — Demo Bistro mains with cart summary",
  },
  {
    id: "cart",
    label: "Step 2",
    title: "Cart",
    hint: "Review quantities and prep time, then continue when the table is ready to order.",
    image: "/demo-cart.png",
    alt: "PlateUp cart screen with Classic Burger and Margherita Pizza",
  },
  {
    id: "confirm",
    label: "Step 3",
    title: "Confirm",
    hint: "Add guest details and a kitchen note, then send the ticket straight to the kitchen.",
    image: "/demo-confirm.png",
    alt: "PlateUp order confirmation with guest details and place order",
  },
  {
    id: "status",
    label: "Step 4",
    title: "Status",
    hint: "Watch Estimated Ready update live — Received → Cooking → Ready — without chasing the kitchen.",
    image: "/demo-status.png",
    alt: "PlateUp order status with estimated ready time and kitchen progress",
  },
  {
    id: "orders",
    label: "Step 5",
    title: "Track",
    hint: "Every table’s orders in one place, with status badges and prep ETAs.",
    image: "/demo-orders.png",
    alt: "PlateUp orders list with status badges and estimated times",
  },
] as const;

const SLIDE_MS = 4200;

function useCompactCarousel() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setCompact(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return compact;
}

export function Demo() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();
  const compact = useCompactCarousel();
  const slide = slides[index];

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, index]);

  function goTo(next: number) {
    setDirection(next > index || (index === slides.length - 1 && next === 0) ? 1 : -1);
    setIndex(next);
  }

  function step(delta: number) {
    setDirection(delta > 0 ? 1 : -1);
    setIndex((i) => (i + delta + slides.length) % slides.length);
  }

  return (
    <section id="demo" className="scroll-mt-20 bg-[#f9fafb] px-4 py-5 md:px-6 md:py-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="overflow-hidden rounded-[28px] border border-slate-200/50 bg-white shadow-[0_40px_100px_-20px_rgba(232,119,34,0.08)] md:rounded-[48px]">
          <div className="relative z-10 px-5 pt-7 text-center md:px-10 md:pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-deep">
              Demo
            </p>
            <h2 className="mt-2 font-display text-[1.75rem] font-medium tracking-tight text-ink sm:text-4xl">
              The guest journey, for real.
            </h2>
            <div className="mt-4 min-h-[6.5rem] sm:min-h-[4.5rem]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={slide.id}
                  custom={direction}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                    {slide.label} · {slide.title}
                  </p>
                  <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-muted sm:text-[15px]">
                    {slide.hint}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-6 px-4 pb-8 pt-2 md:px-10 md:pb-10">
            <div
              className="relative mx-auto h-[min(28rem,58vh)] w-full max-w-4xl overflow-hidden md:h-[38rem]"
              style={{ perspective: compact ? undefined : "1400px" }}
            >
              <button
                type="button"
                aria-label="Previous screen"
                onClick={() => step(-1)}
                className="absolute left-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-ink shadow-sm backdrop-blur-sm transition hover:border-brand/30 hover:bg-white hover:text-brand md:left-2 md:h-10 md:w-10"
              >
                <ChevronLeft className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={2.25} />
              </button>
              <button
                type="button"
                aria-label="Next screen"
                onClick={() => step(1)}
                className="absolute right-0 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-ink shadow-sm backdrop-blur-sm transition hover:border-brand/30 hover:bg-white hover:text-brand md:right-2 md:h-10 md:w-10"
              >
                <ChevronRight className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={2.25} />
              </button>

              {slides.map((item, i) => {
                const offset = i - index;
                const wrapped =
                  ((offset + slides.length + Math.floor(slides.length / 2)) % slides.length) -
                  Math.floor(slides.length / 2);
                const isActive = wrapped === 0;
                const abs = Math.abs(wrapped);

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    aria-label={`Show ${item.title} screen`}
                    aria-current={isActive}
                    onClick={() => goTo(i)}
                    className="absolute left-1/2 top-1/2 origin-center cursor-pointer border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-brand/40 focus-visible:ring-offset-2"
                    initial={false}
                    animate={{
                      x: compact
                        ? "-50%"
                        : `calc(-50% + ${wrapped * (isActive ? 0 : 42)}%)`,
                      y: "-50%",
                      scale: compact
                        ? isActive
                          ? 1
                          : 0.9
                        : isActive
                          ? 1
                          : abs === 1
                            ? 0.76
                            : 0.58,
                      rotateY: compact ? 0 : wrapped * -22,
                      opacity: compact
                        ? isActive
                          ? 1
                          : 0
                        : abs > 1
                          ? 0
                          : isActive
                            ? 1
                            : 0.4,
                      zIndex: slides.length - abs,
                      filter: compact
                        ? "blur(0px)"
                        : isActive
                          ? "blur(0px)"
                          : "blur(2px)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 28,
                      mass: 0.9,
                    }}
                    style={{
                      width: compact ? "min(16rem, 70vw)" : "min(18rem, 62vw)",
                      pointerEvents: compact
                        ? isActive
                          ? "auto"
                          : "none"
                        : abs > 1
                          ? "none"
                          : "auto",
                      transformStyle: compact ? undefined : "preserve-3d",
                    }}
                  >
                    <motion.img
                      src={item.image}
                      alt={item.alt}
                      draggable={false}
                      className="mx-auto h-auto max-h-[min(26rem,54vh)] w-full object-contain select-none drop-shadow-[0_28px_50px_rgba(26,26,26,0.22)] md:max-h-none"
                      animate={
                        isActive && !reduceMotion
                          ? { y: [0, -6, 0] }
                          : { y: 0 }
                      }
                      transition={
                        isActive && !reduceMotion
                          ? { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
                          : { duration: 0.35 }
                      }
                    />
                  </motion.button>
                );
              })}
            </div>

            <div className="flex justify-center gap-2">
              {slides.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Go to ${item.title}`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-8 bg-brand" : "w-2 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
