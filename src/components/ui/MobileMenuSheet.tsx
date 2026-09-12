import { X } from "lucide-react";
import { navLinks } from "../../content";
import { LiveClock } from "./LiveClock";
import { TextRollButton } from "./TextRollButton";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenuSheet({ open, onClose }: Props) {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black/60 transition-opacity duration-500 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden={!open}
      />

      <div
        className={`fixed inset-x-0 bottom-0 z-50 mx-3 mb-3 rounded-2xl bg-white p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        <div className="mb-6 flex items-center justify-between">
          <LiveClock />
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-xl px-2 py-3 font-display text-[28px] font-medium leading-tight text-ink transition-colors hover:text-muted sm:text-[32px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-8">
          <TextRollButton
            href="#pricing"
            label="Get started"
            variant="brand"
            onClick={onClose}
            className="w-full justify-between pl-6"
          />
        </div>
      </div>
    </>
  );
}
