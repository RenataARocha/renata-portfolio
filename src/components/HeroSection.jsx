import {
  Mail,
  Github,
  Linkedin,
  MessageCircleMore,
  Download,
} from "lucide-react";

export default function HeroSection({ scrollToSection }) {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-16 px-4 text-center relative"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mt-6 mb-6 animate-float" aria-hidden="true">
          <div className="w-60 h-60 mx-auto bg-gradient-to-br from-orange-600 to-red-400 rounded-full p-1 shadow-2xl shadow-orange-900/50">
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/assets/projetos/renatarocha.png"
                alt="Renata Rocha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <h1
          id="hero-heading"
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-fade-in"
        >
          Renata Rocha
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Frontend Developer • React • UI/UX
        </p>

        <p
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Desenvolvo interfaces modernas, responsivas e escaláveis utilizando
          React, JavaScript e foco em experiência do usuário. Tenho interesse
          especial em componentização, design systems, acessibilidade e
          construção de aplicações com interfaces organizadas, reutilizáveis e
          intuitivas.
        </p>

        <div
          className="flex flex-wrap gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="mailto:renata.desenvolvedora@gmail.com?subject=Quero%20fazer%20um%20projeto%20com%20você&body=Olá%2C%20Renata!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20site%20ou%20projeto.%20Podemos%20falar%3F"
            className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-900/50 transition-all flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-orange-500"
            aria-label="Enviar email para Renata"
          >
            <Mail size={20} aria-hidden="true" /> Email
          </a>

          <a
            href="https://wa.me/5584986399847?text=Olá%2C%20Renata!%20Vim%20pelo%20seu%20portfólio%20e%20quero%20falar%20sobre%20um%20site%20ou%20projeto.%20Pode%20me%20atender%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-green-900/50 transition-all flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-green-500"
            aria-label="Conversar no WhatsApp"
          >
            <MessageCircleMore size={20} aria-hidden="true" /> WhatsApp
          </a>

          <button
            onClick={() => scrollToSection("projetos")}
            className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-900/50 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500"
          >
            Ver Projetos
          </button>

          <a
            href="/Renata Alexandre Rocha -Frontend-Developer.pdf"
            download
            className="px-8 py-3 bg-gray-900 border border-orange-900/50 rounded-full font-semibold hover:bg-gray-800 hover:border-orange-700 transition-all flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-orange-500"
            aria-label="Baixar currículo em PDF"
          >
            <Download size={20} aria-hidden="true" /> Baixar Currículo
          </a>
        </div>

        <div
          className="flex gap-6 justify-center mt-8 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
          role="list"
          aria-label="Redes sociais"
        >
          <a
            href="https://github.com/RenataARocha"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 rounded p-1"
            aria-label="GitHub de Renata Rocha"
          >
            <Github size={24} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/renata-alexandre-rocha/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 rounded p-1"
            aria-label="LinkedIn de Renata Rocha"
          >
            <Linkedin size={24} aria-hidden="true" />
          </a>
          <a
            href="mailto:renata.desenvolvedora@gmail.com"
            className="hover:text-orange-500 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 rounded p-1"
            aria-label="Enviar email"
          >
            <Mail size={24} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
