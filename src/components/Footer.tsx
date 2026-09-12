import { navLinks } from "../content";
import { PngSlot } from "./PngSlot";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-[#f9fafb]">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-7 sm:flex-row sm:items-center sm:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <PngSlot
            src="/logo.png"
            alt="PlateUp"
            label="Logo"
            rounded="rounded-full"
            className="h-10 w-10"
            compact
          />
          <div>
            <p className="font-display text-sm font-semibold text-ink">PlateUp</p>
            <p className="text-xs text-muted">Scan, Browse, Order.</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} PlateUp
        </p>
      </div>
    </footer>
  );
}
