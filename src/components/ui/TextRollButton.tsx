import { ArrowRight } from "lucide-react";

type Variant = "dark" | "brand";

type Props = {
  href: string;
  label: string;
  variant?: Variant;
  size?: "sm" | "md";
  className?: string;
  onClick?: () => void;
};

export function TextRollButton({
  href,
  label,
  variant = "brand",
  size = "md",
  className = "",
  onClick,
}: Props) {
  const isDark = variant === "dark";
  const circleSize = size === "sm" ? "h-6 w-6" : "h-7 w-7 sm:h-8 sm:w-8";
  const iconSize = size === "sm" ? "h-3.5 w-3.5" : "h-3.5 w-3.5 sm:h-4 sm:w-4";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center rounded-full py-2 pl-5 pr-2 text-[13px] font-medium transition-colors duration-300 sm:pl-6 sm:text-sm ${
        isDark
          ? "bg-ink text-white hover:bg-ink/90"
          : "bg-brand text-white hover:bg-brand-deep"
      } ${className}`}
    >
      <span className="overflow-hidden h-[20px]">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="h-[20px] leading-[20px]">{label}</span>
          <span className="h-[20px] leading-[20px]">{label}</span>
        </span>
      </span>
      <span
        className={`ml-2 flex shrink-0 items-center justify-center rounded-full bg-white transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 ${circleSize}`}
      >
        <ArrowRight
          className={`${iconSize} ${isDark ? "text-ink" : "text-brand"}`}
          strokeWidth={2}
        />
      </span>
    </a>
  );
}
