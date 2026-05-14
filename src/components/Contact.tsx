import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "../data/profile";

function Contact(): JSX.Element {
  return (
    <section className="mx-auto w-full bg-[#07070b] px-4 py-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[radial-gradient(700px_at_80%_10%,rgba(34,211,238,0.16),transparent_55%),rgba(255,255,255,0.035)] px-6 py-10 text-center shadow-[0_28px_90px_rgba(0,0,0,0.35)]">
        <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
          Vamos construir algo que pareça produto de verdade?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Conte comigo para produtos com IA, cloud, arquitetura limpa e uma camada visual que ajude a vender a ideia.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-cyan-300 bg-cyan-300 px-5 font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-transparent hover:text-cyan-100"
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 font-extrabold text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 font-extrabold text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
