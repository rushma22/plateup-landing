import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../content";
import { PngSlot } from "./PngSlot";
import { LiveClock } from "./ui/LiveClock";
import { MobileMenuSheet } from "./ui/MobileMenuSheet";
import { TextRollButton } from "./ui/TextRollButton";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="relative z-20 mx-auto w-full max-w-[1440px] p-2 sm:p-3">
        <nav className="flex items-center justify-between rounded-full bg-white p-[5px]">
          <div className="flex items-center gap-4 md:gap-6">
            <a href="#home" className="flex items-center gap-2.5" onClick={close}>
              <PngSlot
                src="/logo.png"
                alt="PlateUp"
                label="Logo"
                rounded="rounded-full"
                className="h-9 w-9 bg-brand sm:h-10 sm:w-10"
                compact
                imgClassName="h-full w-full object-cover"
              />
            </a>

            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ink transition-colors duration-300 hover:text-muted"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <p className="hidden text-[13px] text-muted lg:block">
              Now onboarding new restaurants
            </p>
            <LiveClock />
            <TextRollButton
              href="#pricing"
              label="Get started"
              variant="dark"
              size="sm"
            />
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <MobileMenuSheet open={open} onClose={close} />
    </>
  );
}
