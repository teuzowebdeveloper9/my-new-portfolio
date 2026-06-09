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
  base: "bg-[#07070b]",
  ink: "bg-[#09090d]",
  warm:
    "bg-[radial-gradient(760px_at_8%_14%,rgba(247,184,75,0.09),transparent_55%),#08080c]",
  contact:
    "bg-[radial-gradient(760px_at_78%_8%,rgba(34,211,238,0.13),transparent_55%),#07070b]",
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
      className={`relative w-full overflow-hidden border-b border-white/10 px-4 py-20 ${toneClasses[tone]} ${className}`}
    >
      <div className={`mx-auto w-full ${innerClassName}`}>{children}</div>
    </section>
  );
}

export default SectionShell;
