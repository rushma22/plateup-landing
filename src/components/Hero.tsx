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
    <section id="home" className="scroll-mt-20 bg-[#f9fafb] px-4 pt-5 pb-3 md:px-6 md:pt-6 md:pb-4">
      <div className="relative mx-auto flex h-[600px] w-full max-w-[1400px] flex-col overflow-hidden rounded-[48px] border border-slate-200/50 bg-white shadow-[0_40px_100px_-20px_rgba(232,119,34,0.08)]">
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
          className="relative z-20 flex flex-1 flex-col items-start px-8 pt-12 md:px-16 md:pt-16"
        >
          <h1 className="font-display text-[42px] font-medium leading-[1.08] tracking-tight text-ink md:text-[56px]">
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

        <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center rounded-full border border-slate-200/40 bg-white/90 px-1.5 py-1.5 shadow-[0_12px_40px_rgba(232,119,34,0.12)] backdrop-blur-2xl"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-100 bg-white shadow-sm">
              <PngSlot
                src="/logo.png"
                alt="PlateUp"
                label="Logo"
                rounded="rounded-full"
                className="h-full w-full"
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
