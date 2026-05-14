type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps): JSX.Element {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`space-y-3 max-w-3xl ${alignment}`}>
      <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-slate-300">{description}</p>
    </div>
  );
}

export default SectionHeading;
