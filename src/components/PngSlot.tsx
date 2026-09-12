import { ImagePlus } from "lucide-react";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  label: string;
  className?: string;
  imgClassName?: string;
  rounded?: string;
  compact?: boolean;
};

export function PngSlot({
  src,
  alt,
  label,
  className = "",
  imgClassName = "h-full w-full object-cover",
  rounded = "rounded-2xl",
  compact = false,
}: Props) {
  const [ok, setOk] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-white/40 ${rounded} ${className}`}
    >
      {!ok && (
        <div className="png-slot absolute inset-0 flex flex-col items-center justify-center gap-1 px-2 text-center">
          <ImagePlus
            className={`${compact ? "h-3.5 w-3.5" : "h-5 w-5"} text-brand-deep`}
            strokeWidth={1.75}
          />
          {!compact && (
            <>
              <p className="font-display text-[11px] font-semibold tracking-tight text-ink">
                {label}
              </p>
              <p className="font-mono text-[10px] text-muted">
                {src.replace(/^\//, "")}
              </p>
            </>
          )}
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setOk(true)}
        onError={() => setOk(false)}
        className={`${imgClassName} ${ok ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}
      />
    </div>
  );
}
