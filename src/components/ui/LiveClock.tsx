import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

export function LiveClock({ className = "" }: Props) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };

    format();
    const id = window.setInterval(format, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={`inline-flex items-center gap-1.5 text-[13px] text-muted ${className}`}>
      <Clock size={14} strokeWidth={2} />
      <span>{time} in London</span>
    </span>
  );
}
