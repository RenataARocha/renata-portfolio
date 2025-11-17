import React, { useState } from "react";
import { Menu, X, Code, Sparkles } from 'lucide-react';
import {Download, Mail, Github, Linkedin} from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAV */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg z-50 border-b border-orange-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <div className="flex items-center space-x-2">
              <Sparkles className="text-orange-500" size={24} />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Renata Rocha
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-orange-500 transition">Início</button>
              <button onClick={() => scrollToSection('sobre')} className="hover:text-orange-500 transition">Sobre</button>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-orange-900/30 px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left py-2 hover:text-orange-500 transition">Início</button>
            <button onClick={() => scrollToSection('sobre')} className="block w-full text-left py-2 hover:text-orange-500 transition">Sobre</button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 px-4 text-center relative">
        <div className="max-w-4xl mx-auto relative z-10">
          
          <div className="mb-6 animate-float">
            <div className="w-40 h-40 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-1 shadow-2xl shadow-orange-900/50">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                <Code size={56} className="text-orange-500" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            Olá, sou Renata
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in" style={{animationDelay: '0.2s'}}>Desenvolvedora Front-end</p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Crio sites e aplicações modernas, responsivas e com experiências encantadoras.  
            Transformo ideias em interfaces reais, organizadas e cheias de vida — com foco em quem vai usar.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <button onClick={() => scrollToSection('projetos')} className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-900/50 transition-all">Ver Projetos</button>
            <a href="/curriculo.pdf" download className="px-8 py-3 bg-gray-900 border border-orange-900/50 rounded-full font-semibold hover:bg-gray-800 hover:border-orange-700 transition-all flex items-center gap-2">
              <Download size={20} /> Baixar Currículo
            </a>
          </div>

          <div className="flex gap-6 justify-center mt-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <a href="https://github.com" target="_blank" className="hover:text-orange-500 hover:scale-110 transition-all"><Github size={24} /></a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-orange-500 hover:scale-110 transition-all"><Linkedin size={24} /></a>
            <a href="mailto:contato@renata.com" className="hover:text-orange-500 hover:scale-110 transition-all"><Mail size={24} /></a>
          </div>

        </div>
      </section>


      {/* SOBRE */}
      <section id="sobre" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Sobre Mim</h2>

          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-900/30 shadow-2xl hover:border-orange-800/50 transition-all">
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Sou desenvolvedora front-end em transição de carreira, com uma base sólida em Design Gráfico — o que me permite criar interfaces modernas, organizadas e visualmente atraentes.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Trabalho diariamente com HTML, CSS, JavaScript e React, criando projetos reais como aplicativos de organização, conversores, sistemas e sites completos.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl border border-orange-800/30 hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-orange-500 mb-2">+10</div>
                <div className="text-gray-400">Projetos Próprios</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-red-900/20 to-pink-900/20 rounded-xl border border-red-800/30 hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-red-500 mb-2">+1 ano</div>
                <div className="text-gray-400">Estudando Programação</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-pink-900/20 to-orange-900/20 rounded-xl border border-pink-800/30 hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-pink-500 mb-2">100%</div>
                <div className="text-gray-400">Dedicação e Evolução</div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}