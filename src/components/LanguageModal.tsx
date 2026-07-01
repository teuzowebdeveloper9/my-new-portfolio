import { FiCheck, FiGlobe, FiX } from "react-icons/fi";
import type { Locale, PortfolioContent } from "../data/i18n";
import { languageOptions } from "../data/i18n";

type LanguageModalProps = {
  content: PortfolioContent["languageModal"];
  locale: Locale;
  isOpen: boolean;
  onClose: () => void;
  onSelect: (locale: Locale) => void;
};

function LanguageModal({
  content,
  locale,
  isOpen,
  onClose,
  onSelect,
}: LanguageModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-[#020308]/80 px-4 py-6 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-modal-title"
    >
      <div className="w-full max-w-xl overflow-hidden rounded-lg border border-white/10 bg-[#0b0d14] shadow-[0_28px_120px_rgba(0,0,0,0.6)]">
        <div className="flex items-start justify-between gap-5 border-b border-white/10 p-5 md:p-6">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-1.5 text-sm font-black uppercase text-cyan-200">
              <FiGlobe aria-hidden="true" />
              {content.eyebrow}
            </div>
            <h2
              id="language-modal-title"
              className="text-2xl font-black leading-tight text-white md:text-3xl"
            >
              {content.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              {content.description}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid size-10 shrink-0 place-items-center rounded-md border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            aria-label={content.close}
          >
            <FiX aria-hidden="true" />
          </button>
        </div>

        <div className="grid gap-3 p-5 md:grid-cols-2 md:p-6">
          {languageOptions.map((option) => {
            const isSelected = option.locale === locale;

            return (
              <button
                key={option.locale}
                type="button"
                onClick={() => onSelect(option.locale)}
                className={`group min-h-36 rounded-lg border p-5 text-left transition hover:-translate-y-0.5 ${
                  isSelected
                    ? "border-lime-300/45 bg-lime-300/10"
                    : "border-white/10 bg-white/[0.04] hover:border-cyan-300/35 hover:bg-cyan-300/10"
                }`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="text-3xl font-black text-white">
                    {option.shortLabel}
                  </span>
                  {isSelected && (
                    <span className="inline-flex items-center gap-1 rounded-md bg-lime-300 px-2 py-1 text-xs font-black text-slate-950">
                      <FiCheck aria-hidden="true" />
                      {content.active}
                    </span>
                  )}
                </span>
                <span className="mt-4 block text-lg font-black text-white">
                  {option.label}
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-slate-400">
                  {option.description}
                </span>
              </button>
            );
          })}
        </div>

        <div className="border-t border-white/10 p-5 md:p-6">
          <button
            type="button"
            onClick={onClose}
            className="min-h-12 w-full rounded-md bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100"
          >
            {content.close}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LanguageModal;
