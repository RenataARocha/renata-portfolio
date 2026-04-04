import { Mail, MessageCircleMore } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="py-20 px-4 relative"
      aria-labelledby="contato-heading"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          id="contato-heading"
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
        >
          Vamos Trabalhar Juntos?
        </h2>

        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-900/30 shadow-2xl text-center">
          <p className="text-lg text-gray-300 mb-8">
            Me chama e vamos conversar sobre seu projeto! Adoro transformar
            ideias em algo bonito, funcional e real.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/5584986399847?text=Ol%C3%A1%20Renata!%20Quero%20mais%20detalhes%20sobre%20seus%20servi%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-green-900/50 transition-all flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-green-500"
              aria-label="Conversar no WhatsApp"
            >
              <MessageCircleMore size={20} aria-hidden="true" /> WhatsApp
            </a>
            <a
              href="mailto:renata.desenvolvedora@gmail.com?subject=Contato%20pelo%20Portfólio&body=Ol%C3%A1%20Renata!%20Gostaria%20de%20falar%20sobre%20um%20projeto."
              className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-900/50 transition-all flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-orange-500"
              aria-label="Enviar email"
            >
              <Mail size={20} aria-hidden="true" /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
