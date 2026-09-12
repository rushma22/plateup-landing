import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { PngSlot } from "./PngSlot";

const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4";

const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#demo", label: "Demo" },
  { href: "#pricing", label: "Pricing" },
] as const;

export function Hero() {
  return (
    <section id="home" className="scroll-mt-20 bg-[#f9fafb] px-3 pt-3 pb-3 md:px-6 md:pt-6 md:pb-4">
      <div className="relative mx-auto flex min-h-[520px] w-full max-w-[1400px] flex-col overflow-hidden rounded-[28px] border border-slate-200/50 bg-white shadow-[0_40px_100px_-20px_rgba(232,119,34,0.08)] md:h-[600px] md:min-h-0 md:rounded-[48px]">
        <div className="pointer-events-none absolute inset-0 z-0 isolate overflow-hidden select-none">
          <video
            src={HERO_VIDEO}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full scale-105 object-cover transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-brand mix-blend-hue" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-cream/30" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 flex flex-1 flex-col items-start px-5 pt-10 pb-28 md:px-16 md:pt-16 md:pb-0"
        >
          <h1 className="font-display text-[34px] font-medium leading-[1.08] tracking-tight text-ink sm:text-[42px] md:text-[56px]">
            Ship orders from
            <br />
            the table — instantly
          </h1>

          <p className="mt-5 max-w-xl font-sans text-[14px] leading-relaxed text-muted md:text-[15px]">
            QR ordering for restaurants. Guests scan, browse your menu, and send
            food straight to the kitchen — no app download, no waiters chasing
            pads.
          </p>

          <motion.a
            href="#demo"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-deep"
          >
            Try the demo
          </motion.a>
        </motion.div>

        <div className="absolute bottom-5 left-1/2 z-30 w-[calc(100%-1.5rem)] max-w-[28rem] -translate-x-1/2 md:bottom-10 md:w-auto md:max-w-none">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex w-full items-center justify-center rounded-full border border-slate-200/40 bg-white/90 px-1 py-1.5 shadow-[0_12px_40px_rgba(232,119,34,0.12)] backdrop-blur-2xl md:w-auto md:px-1.5"
          >
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-sm">
              <PngSlot
                src="/logo.png"
                alt="PlateUp"
                label="Logo"
                rounded="rounded-full"
                className="h-full w-full bg-brand"
                compact
                imgClassName="h-full w-full object-cover"
              />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap px-2.5 text-[11px] font-semibold text-slate-500 transition-colors hover:text-brand sm:px-4 sm:text-[12px]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="ml-1 flex items-center gap-1 rounded-full border border-slate-200/60 bg-white px-3 py-2 text-[11px] font-semibold text-ink shadow-sm transition-all hover:border-brand/30 hover:text-brand sm:gap-1.5 sm:px-5 sm:text-[12px]"
            >
              Get in touch
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </a>
          </motion.nav>
        </div>
      </div>
    </section>
  );
}
