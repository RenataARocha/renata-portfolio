import React, { useState } from "react";
import { Menu, X, Download, MessageCircle, ChevronDown, Mail, Github, Linkedin, Code, Sparkles, Heart } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const featuredProjects = [
    {
      title: "Organizadora do Lar",
      description: "Aplicação completa, estilo SPA, com lógica de tarefas, metas, categorias, alarmes e agenda diária.",
      image: "/assets/organizador.png",
      tech: ["HTML", "CSS", "JavaScript", "SPA"]
    },
    {
      title: "Vortex Sneakers",
      description: "Réplica moderna e responsiva inspirada no site da Nike. Layout forte e visual profissional.",
      image: "/assets/vortex.png",
      tech: ["HTML", "CSS", "Responsividade"]
    },
    {
      title: "Conversor de Moedas",
      description: "Conversor dinâmico utilizando API externa, interface organizada e responsiva.",
      image: "/assets/conversor.png",
      tech: ["HTML", "CSS", "JavaScript", "API"]
    },
    {
      title: "Wide Coverage Location",
      description: "Site institucional completo, com foco em comunicação clara e visual profissional.",
      image: "/assets/location.png",
      tech: ["HTML", "CSS", "Responsividade"]
    },
    {
      title: "Litera - Biblioteca Online",
      description: "Interface desenvolvida do zero para consulta e organização de livros.",
      image: "/assets/litera.png",
      tech: ["React", "Frontend"]
    },
    {
      title: "Easy Shopping Mobile",
      description: "Interface mobile elegante, projetada para compras rápidas e funcionais.",
      image: "/assets/easy.png",
      tech: ["HTML", "CSS", "Mobile"]
    }
  ]


  const otherProjects = [
    {
      title: "InspiraGram",
      description: "Projeto visual inspirado no Instagram.",
      image: "/assets/inspira.png",
      tech: ["HTML", "CSS"]
    },
    {
      title: "Gerador de Currículo",
      description: "Ferramenta prática para gerar currículos automáticos.",
      image: "/assets/curriculo.png",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Bros Plumbing",
      description: "Landing page profissional para empresa de encanamento.",
      image: "/assets/plumbing.png",
      tech: ["HTML", "CSS"]
    },
    {
      title: "Blog Pessoal",
      description: "Blog responsivo desenvolvido do zero.",
      image: "/assets/blog.png",
      tech: ["React", "Frontend"]
    }
  ]


  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 92 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 78 },
    { name: "Git & GitHub", level: 88 },
    { name: "Tailwind CSS", level: 80 },
  ];

  const faqs = [
    {
      question: "Você desenvolve sites completos?",
      answer: "Sim! Crio sites responsivos, modernos, leves e funcionais — desde landing pages até sistemas mais completos."
    },
    {
      question: "Quais tecnologias você usa?",
      answer: "HTML, CSS, JavaScript, React, Tailwind, Git, APIs REST, Bootstrap, Vue.js (aprendizado contínuo)."
    },
    {
      question: "Você oferece suporte?",
      answer: "Claro! Após a entrega ofereço suporte inicial e também pacotes opcionais de manutenção."
    },
    {
      question: "Como funciona o processo?",
      answer: "Entendo o projeto, crio estrutura, passo pelos layouts, desenvolvo, faço testes, apresento e ajusto até ficar perfeito."
    },
    {
      question: "Quais tipos de projetos você aceita?",
      answer: "Portfólios, sites de negócios, e-commerces simples, sistemas de gestão, automações e páginas customizadas."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* FUNDO COM ANIMAÇÕES - CORAL/SALMÃO */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Bolhas piscando */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-24 right-12 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Partículas flutuantes */}
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-pink-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
      </div>

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
              <button onClick={() => scrollToSection('projetos')} className="hover:text-orange-500 transition">Projetos</button>
              <button onClick={() => scrollToSection('habilidades')} className="hover:text-orange-500 transition">Habilidades</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-orange-500 transition">FAQ</button>
              <button onClick={() => scrollToSection('contato')} className="hover:text-orange-500 transition">Contato</button>
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
            <button onClick={() => scrollToSection('projetos')} className="block w-full text-left py-2 hover:text-orange-500 transition">Projetos</button>
            <button onClick={() => scrollToSection('habilidades')} className="block w-full text-left py-2 hover:text-orange-500 transition">Habilidades</button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 hover:text-orange-500 transition">FAQ</button>
            <button onClick={() => scrollToSection('contato')} className="block w-full text-left py-2 hover:text-orange-500 transition">Contato</button>
          </div>
        )}
      </nav>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5584999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 group animate-bounce"
        style={{ animationDuration: '3s' }}
      >
        <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-10 right-0 bg-gray-900 px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Fale comigo!
        </span>
      </a>

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

          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>Desenvolvedora Front-end</p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Eu desenvolvo sites e aplicações modernas, rápidas e totalmente responsivas, pensadas para transformar ideias em interfaces claras, funcionais e fáceis de usar.
            Meu foco é criar experiências fluidas, visualmente profissionais e alinhadas com a necessidade de cada negócio.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button onClick={() => scrollToSection('projetos')} className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-900/50 transition-all">Ver Projetos</button>
            <a href="/curriculo.pdf" download className="px-8 py-3 bg-gray-900 border border-orange-900/50 rounded-full font-semibold hover:bg-gray-800 hover:border-orange-700 transition-all flex items-center gap-2">
              <Download size={20} /> Baixar Currículo
            </a>
          </div>

          <div className="flex gap-6 justify-center mt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a href="https://github.com/RenataARocha" target="_blank" className="hover:text-orange-500 hover:scale-110 transition-all"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/renata-alexandre-rocha/" target="_blank" className="hover:text-orange-500 hover:scale-110 transition-all"><Linkedin size={24} /></a>
            <a 
  href="mailto:contato@renata.com?subject=Solicitar%20orçamento&body=Olá%20Renata,%0A%0AEncontrei%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.%0A%0A%20Poderia%20me%20informar%20sobre%20valores,%20prazo%20e%20como%20funciona%20o%20processo?%0A%0AObrigado(a)!" 
  className="hover:text-orange-500 hover:scale-110 transition-all"
>
  <Mail size={24} />
</a>

          </div>

        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Sobre Mim</h2>

          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-900/30 shadow-2xl hover:border-orange-800/50 transition-all">

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Sou Desenvolvedora Front-end em transição de carreira, com formação em Design Gráfico, o que me dá uma visão completa de estética, usabilidade e experiência do usuário.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Trabalho diariamente com HTML, CSS, JavaScript e React, criando sites modernos, landing pages, sistemas simples e aplicações focadas na experiência do usuário.
              Mantenho uma rotina constante de estudo, sempre buscando evoluir meus projetos com boas práticas, organização e clareza no código.

              <br /> <br />

              Já desenvolvi interfaces reais como: <br />
              • sites institucionais <br />
              • landing pages <br />
              • aplicativos de organização <br />
              • simuladores e conversores <br />
              • interfaces responsivas para mobile e desktop <br />
              <br />

              Meu propósito é unir técnica e design para entregar resultados profissionais sem complicação.
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

      {/* PROJETOS EM DESTAQUE */}
      <section id="projetos" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">

          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Projetos em Destaque
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group bg-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-orange-900/30 hover:border-orange-700/60 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-900/30">

                <div className="h-48 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-orange-500 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-orange-900/30 rounded-full text-sm text-orange-400 border border-orange-800/40 hover:bg-orange-800/40 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>


      {/* OUTROS PROJETOS */}
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">

          <h2 className="text-3xl font-bold mb-10 text-center text-orange-400">
            Outros Projetos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="group bg-gray-800/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/40 hover:border-orange-700/40 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-800/20">

                <div className="h-44 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-3 text-orange-300 group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-orange-900/20 rounded-full text-xs text-orange-300 border border-orange-800/30 hover:bg-orange-800/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* HABILIDADES */}
      <section id="habilidades" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Minhas Habilidades</h2>

          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-900/30 shadow-2xl">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-200 group-hover:text-orange-500 transition-colors">{skill.name}</span>
                    <span className="text-orange-500">{skill.level}%</span>
                  </div>

                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-600 to-red-600 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-orange-900/50" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Perguntas Frequentes</h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-lg rounded-xl border border-orange-900/30 shadow-lg overflow-hidden hover:border-orange-800/50 transition-all">

                <button onClick={() => toggleFaq(index)} className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition">
                  <span className="font-semibold text-left text-gray-200">{faq.question}</span>
                  <ChevronDown size={20} className={`text-orange-500 transition-transform ${faqOpen[index] ? 'rotate-180' : ''}`} />
                </button>

                {faqOpen[index] && (
                  <div className="px-6 pb-4 text-gray-400 border-t border-orange-900/30 pt-4 animate-fade-in">{faq.answer}</div>
                )}

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Vamos Trabalhar Juntos?</h2>

          <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-900/30 shadow-2xl text-center">
            <p className="text-lg text-gray-300 mb-8">
              Me chama e vamos conversar sobre seu projeto!
              Adoro transformar ideias em algo bonito, funcional e real.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://wa.me/5584999999999" target="_blank" className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-green-900/50 transition-all flex items-center gap-2">
                <MessageCircle size={20} /> WhatsApp
              </a>

              <a href="mailto:contato@renata.com" className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-900/50 transition-all flex items-center gap-2">
                <Mail size={20} /> Email
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-4 border-t border-orange-900/30 text-center relative">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-gray-400">Feito com</span>
          <Heart size={16} className="text-orange-500 fill-orange-500 animate-pulse" />
          <span className="text-gray-400">por Renata Rocha</span>
        </div>

        <p className="text-gray-500 text-sm">© 2024 Renata Rocha. Todos os direitos reservados.</p>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>

    </div>
  );
}