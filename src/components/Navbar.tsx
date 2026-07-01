import { FiGlobe } from "react-icons/fi";
import type { PortfolioContent } from "../data/i18n";
import { navigationItems } from "../data/navigation";
import { profile } from "../data/profile";

type NavbarProps = {
  content: PortfolioContent["nav"];
  onOpenLanguageModal: () => void;
};

function Navbar({ content, onOpenLanguageModal }: NavbarProps) {
  return (
    <nav className="fixed left-0 right-0 top-4 z-50 px-3 sm:top-5 sm:px-5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 rounded-lg border border-white/10 bg-[#07080d]/88 px-2.5 py-2 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:gap-3 sm:px-3">
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2 rounded-md px-2 py-1 text-white outline-none transition hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-cyan-300 sm:gap-3"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-md bg-cyan-300 text-sm font-black text-slate-950">
            M
          </span>
          <span className="hidden text-sm font-bold sm:block">Mateus Oliveira</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-3 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {content[item.id]}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onOpenLanguageModal}
            className="inline-flex min-h-10 items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-black text-slate-200 transition hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <FiGlobe aria-hidden="true" />
            <span className="hidden sm:inline">{content.languageButton}</span>
            <span className="sm:hidden">EN</span>
          </button>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md border border-lime-300/30 bg-lime-300 px-3 py-2 text-sm font-black text-slate-950 transition hover:bg-lime-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-200 sm:px-4"
          >
            {content.contactButton}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
