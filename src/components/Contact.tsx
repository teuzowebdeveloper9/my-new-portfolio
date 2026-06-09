import { profile } from "../data/profile";

function Contact() {
  return (
    <footer id="contact" className="section-shell bg-white border-t border-gray-100">
      <div className="container-clean text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Vamos conversar?</h2>
        <div className="h-2 w-32 bg-black mx-auto mb-12"></div>
        <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Estou disponível para novas oportunidades e pronto para aplicar IA e Cloud no seu próximo grande produto.
        </p>
        <a 
          href={`mailto:${profile.email}`} 
          className="text-2xl md:text-5xl font-black hover:text-gray-600 transition-colors break-all tracking-tighter"
        >
          {profile.email}
        </a>
        <div className="mt-16 flex justify-center gap-10 text-gray-400 font-bold uppercase tracking-widest text-xs">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
        </div>
        <p className="mt-32 text-xs text-gray-300 font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} {profile.name} — Made with precision.
        </p>
      </div>
    </footer>
  );
}

export default Contact;
