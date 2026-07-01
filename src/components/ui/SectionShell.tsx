import type { PropsWithChildren } from "react";
import type { SectionId } from "../../data/navigation";

type SectionTone = "base" | "ink" | "warm" | "contact";

type SectionShellProps = PropsWithChildren<{
  id: SectionId;
  tone?: SectionTone;
  className?: string;
  innerClassName?: string;
}>;

const toneClasses: Record<SectionTone, string> = {
  base: "bg-[#07080d]",
  ink: "bg-[#0b0d14]",
  warm:
    "bg-[linear-gradient(180deg,rgba(215,255,77,0.05),transparent_34%),#080a0f]",
  contact:
    "bg-[linear-gradient(135deg,rgba(34,211,238,0.1),rgba(244,63,148,0.08)_48%,rgba(215,255,77,0.06)),#07080d]",
};

function SectionShell({
  id,
  tone = "base",
  className = "",
  innerClassName = "max-w-6xl space-y-8",
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      data-reveal
      className={`reveal-on-scroll relative w-full overflow-hidden border-b border-white/10 px-4 py-20 sm:px-6 lg:py-28 ${toneClasses[tone]} ${className}`}
    >
      <div className={`mx-auto w-full ${innerClassName}`}>{children}</div>
    </section>
  );
}

export default SectionShell;
