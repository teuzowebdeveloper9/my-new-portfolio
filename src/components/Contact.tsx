import { FiArrowUpRight, FiMail } from "react-icons/fi";
import type { PortfolioContent } from "../data/i18n";
import { contactOptions, profile } from "../data/profile";
import SectionShell from "./ui/SectionShell";

type ContactProps = {
  content: PortfolioContent["contact"];
};

function Contact({ content }: ContactProps) {
  return (
    <SectionShell id="contact" tone="contact" innerClassName="max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div data-reveal className="reveal-on-scroll">
          <p className="text-sm font-black uppercase text-lime-200">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            {content.description}
          </p>
        </div>

        <div
          data-reveal
          className="reveal-on-scroll rounded-lg border border-white/10 bg-[#07080d]/70 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.3)] md:p-6"
          style={{ transitionDelay: "110ms" }}
        >
          <div className="flex items-center gap-3 text-cyan-200">
            <FiMail className="text-2xl" aria-hidden="true" />
            <span className="text-sm font-black uppercase">
              {content.direct}
            </span>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="mt-5 block break-words text-[clamp(1.35rem,4vw,2.55rem)] font-black leading-tight text-white transition hover:text-cyan-200"
          >
            {profile.email}
          </a>

          <div className="mt-8 space-y-3">
            {contactOptions.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group flex items-center justify-between gap-4 border-t border-white/10 pt-3 text-slate-300 transition hover:text-white"
              >
                <span>
                  <span className="block text-sm font-black text-white">
                    {item.label}
                  </span>
                  <span className="mt-1 block break-words text-sm">
                    {item.value}
                  </span>
                </span>
                <FiArrowUpRight
                  aria-hidden="true"
                  className="shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-16 border-t border-white/10 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. {content.footer}
      </p>
    </SectionShell>
  );
}

export default Contact;
