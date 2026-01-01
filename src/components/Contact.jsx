function Contact() {
  const email = "mateussoftwaredeveloper@gmail.com";

  return (
    <section className="w-full mx-auto bg-[#0D0D0D] px-4 py-12">
      <div className="max-w-4xl mx-auto border-2 border-[#6B21A8] rounded-3xl bg-[#0b0b12] px-6 py-8 text-center space-y-4 shadow-[0_0_30px_rgba(107,33,168,0.25)]">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#c084fc]">Vamos conversar?</h2>
        <p className="text-gray-200">
          Conte comigo para construir produtos com IA, cloud e alta performance. Me envie um e-mail e falamos sobre o próximo desafio.
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center justify-center gap-2 h-[50px] px-5 rounded-full bg-[#6B21A8] text-[#0D0D0D] font-extrabold hover:bg-transparent hover:text-[#6B21A8] border-2 border-[#6B21A8] transition-colors"
        >
          Mandar e-mail para {email}
        </a>
      </div>
    </section>
  );
}

export default Contact;


