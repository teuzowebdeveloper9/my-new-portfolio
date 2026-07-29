import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiMail,
} from "react-icons/fi";
import type { PortfolioContent } from "../data/i18n";
import { profile } from "../data/profile";

type HeroProps = {
  content: PortfolioContent["hero"];
};

function Hero({ content }: HeroProps) {
  return (
    <section
      id="home"
      className="hero-grid relative overflow-hidden bg-[#07080d] px-4 pb-16 pt-28 text-white sm:px-6 lg:min-h-screen lg:pt-36"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[minmax(0,1.08fr)_minmax(340px,0.92fr)]">
        <div className="relative z-10 max-w-4xl">
          <div
            data-reveal
            className="reveal-on-scroll mb-7 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-md border border-lime-300/25 bg-lime-300/10 px-3 py-2 text-sm font-bold text-lime-200">
              <span className="size-2 rounded-md bg-lime-300" />
              {content.availability}
            </span>
            <span className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-slate-300">
              {content.location}
            </span>
          </div>

          <p
            data-reveal
            className="reveal-on-scroll mb-4 text-xs font-black uppercase text-cyan-200 sm:text-sm"
            style={{ transitionDelay: "70ms" }}
          >
            {content.kicker}
          </p>

          <h1
            data-reveal
            className="reveal-on-scroll max-w-5xl text-4xl font-black leading-[0.98] text-white sm:text-5xl md:text-6xl xl:text-7xl"
            style={{ transitionDelay: "110ms" }}
          >
            {profile.name}
          </h1>

          <div
            data-reveal
            className="reveal-on-scroll mt-6 max-w-4xl border-l-4 border-cyan-300 pl-4 sm:pl-5"
            style={{ transitionDelay: "150ms" }}
          >
            <h2 className="text-xl font-black text-slate-100 sm:text-2xl md:text-3xl">
              {content.role}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
              {content.headline}
            </p>
          </div>

          <p
            data-reveal
            className="reveal-on-scroll mt-7 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg"
            style={{ transitionDelay: "190ms" }}
          >
            {content.summary}
          </p>

          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-4">
            {content.metrics.map((metric, index) => (
              <div
                data-reveal
                key={metric.label}
                className="reveal-on-scroll min-h-28 rounded-lg border border-white/10 bg-white/[0.04] p-4 shadow-[0_14px_40px_rgba(0,0,0,0.22)]"
                style={{ transitionDelay: `${220 + index * 55}ms` }}
              >
                <strong className="block text-2xl font-black text-white">
                  {metric.value}
                </strong>
                <span className="mt-1 block text-sm leading-snug text-slate-400">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>

          <div
            data-reveal
            className="reveal-on-scroll mt-9 flex flex-wrap items-center gap-3"
            style={{ transitionDelay: "430ms" }}
          >
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex min-h-12 items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100"
            >
              <FiMail aria-hidden="true" />
              {content.ctaEmail}
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <FiDownload aria-hidden="true" />
              {content.ctaCv}
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-md px-4 py-3 text-sm font-black text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {content.ctaProjects}
              <FiArrowDown aria-hidden="true" />
            </a>
          </div>
        </div>

        <div
          data-reveal
          className="reveal-on-scroll relative z-10"
          style={{ transitionDelay: "180ms" }}
        >
          <div className="relative mx-auto max-w-[440px]">
            <div className="absolute -left-4 top-7 h-full w-full rounded-lg border border-cyan-300/20" />
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0b0d14] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
              <p className="text-sm font-black text-lime-200">
                {content.portraitTitle}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                {content.portraitText}
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] p-4 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/10"
            >
              <span className="inline-flex items-center gap-2 text-sm font-black">
                <FaGithub aria-hidden="true" />
                {content.github}
              </span>
              <FiArrowUpRight
                aria-hidden="true"
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.04] p-4 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/10"
            >
              <span className="inline-flex items-center gap-2 text-sm font-black">
                <FaLinkedin aria-hidden="true" />
                {content.linkedin}
              </span>
              <FiArrowUpRight
                aria-hidden="true"
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
