import { useState, useEffect } from "react";
import { Menu, X, Download, ChevronDown, Mail, Github, Linkedin, Code, Sparkles, Heart, MessageCircleMore, ArrowUp } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleFaq = (index) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Mostrar/ocultar botão de voltar ao topo
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevenir scroll quando menu mobile estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  // Fechar menu com ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  const featuredProjects = [
    {
      title: "Organizadora do Lar",
      description: "SPA completa com sistema de tarefas, categorias, metas, alarmes e agenda diária. Focada em produtividade real.",
      image: "/assets/projetos/organizador.png",
      tech: ["HTML", "CSS", "JavaScript", "SPA"]
    },
    {
      title: "Vortex Sneakers",
      description: "Réplica moderna e totalmente responsiva inspirada no site da Nike. Visual forte e estrutura profissional.",
      image: "/assets/projetos/vortex.png",
      tech: ["HTML", "CSS", "Responsividade", "JavaScript"]
    },
    {
      title: "Conversor de Moedas",
      description: "Conversor dinâmico consumindo API externa, com interface organizada e experiência fluida.",
      image: "/assets/projetos/conversor.png",
      tech: ["HTML", "CSS", "JavaScript", "API"]
    },
    {
      title: "Wide Coverage Location",
      description: "Site institucional desenvolvido com foco em clareza, hierarquia visual e comunicação eficiente.",
      image: "/assets/projetos/location.png",
      tech: ["HTML", "CSS", "Responsividade"]
    },
    {
      title: "Litera - Biblioteca Online",
      description: "Interface criada do zero para consulta, busca e organização de livros de forma fácil e intuitiva.",
      image: "/assets/projetos/litera.png",
      tech: ["React", "Frontend", "TypeScript"]
    },
    {
      title: "Easy Shopping Mobile",
      description: "Interface mobile elegante para facilitar compras rápidas com navegação simples e intuitiva.",
      image: "/assets/projetos/easy.png",
      tech: ["HTML", "CSS", "Mobile"]
    }
  ];

  const otherProjects = [
    {
      title: "InspiraGram",
      description: "Projeto visual inspirado no Instagram, focado em layout moderno e estética limpa.",
      image: "/assets/projetos/inspira.png",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Gerador de Currículo",
      description: "Ferramenta prática para criar currículos automáticos com poucos cliques.",
      image: "/assets/projetos/curriculo.png",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Bros Plumbing",
      description: "Landing page profissional para empresa de encanamento, com foco em conversão.",
      image: "/assets/projetos/plumbing.png",
      tech: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Blog Pessoal",
      description: "Blog responsivo desenvolvido do zero, pensado para leitura fluida e organização clara.",
      image: "/assets/projetos/blog.png",
      tech: ["React", "Frontend", "TypeScript"]
    }
  ];

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 92 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 78 },
    { name: "Git & GitHub", level: 88 },
    { name: "Tailwind CSS", level: 80 },
    { name: "TypeScript", level: 60 },
  ];

  const faqs = [
    {
      question: "Você desenvolve sites completos?",
      answer: "Sim! Crio sites responsivos, modernos, leves e funcionais, desde landing pages até páginas institucionais mais completas."
    },
    {
      question: "Quais tecnologias você usa?",
      answer: "HTML, CSS, JavaScript, React, Tailwind, Git e consumo de APIs REST."
    },
    {
      question: "Você oferece suporte?",
      answer: "Sim! Após a entrega ofereço suporte inicial e também pacotes opcionais de manutenção contínua."
    },
    {
      question: "Como funciona o processo?",
      answer: "Primeiro entendo a sua necessidade, depois crio a estrutura, desenho o layout, desenvolvo, faço testes e ajusto até ficar exatamente como você imaginou."
    },
    {
      question: "Quais tipos de projetos você aceita?",
      answer: "Portfólios, sites de negócios, landing pages, sistemas simples e páginas customizadas."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Link para pular navegação */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-600 focus:text-white focus:rounded"
      >
        Pular para o conteúdo principal
      </a>

      {/* FUNDO COM ANIMAÇÕES */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-24 right-12 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/4 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-pink-500 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* NAV */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg z-50 border-b border-orange-900/30" role="navigation" aria-label="Navegação principal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Sparkles className="text-orange-500" size={24} aria-hidden="true" />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Renata Rocha
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">Início</button>
              <button onClick={() => scrollToSection('sobre')} className="hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">Sobre</button>
              <button onClick={() => scrollToSection('projetos')} className="hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">Projetos</button>
              <button onClick={() => scrollToSection('habilidades')} className="hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">Habilidades</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">FAQ</button>
              <button onClick={() => scrollToSection('contato')} className="hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1">Contato</button>
            </div>

            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-orange-500 rounded p-2"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden bg-black/95 backdrop-blur-lg border-t border-orange-900/30 px-4 py-4 space-y-3"
            role="menu"
          >
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left py-2 hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2" role="menuitem">Início</button>
            <button onClick={() => scrollToSection('sobre')} className="block w-full text-left py-2 hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2" role="menuitem">Sobre</button>
            <button onClick={() => scrollToSection('projetos')} className="block w-full text-left py-2 hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2" role="menuitem">Projetos</button>
            <button onClick={() => scrollToSection('habilidades')} className="block w-full text-left py-2 hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2" role="menuitem">Habilidades</button>
            <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2" role="menuitem">FAQ</button>
            <button onClick={() => scrollToSection('contato')} className="block w-full text-left py-2 hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2" role="menuitem">Contato</button>
          </div>
        )}
      </nav>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5584986399847?text=Ol%C3%A1%20Renata!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20quero%20falar%20sobre%20um%20projeto."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 group animate-bounce focus:outline-none focus:ring-4 focus:ring-green-500"
        style={{ animationDuration: '3s' }}
        aria-label="Conversar no WhatsApp"
      >
        <MessageCircleMore size={28} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
        <span className="absolute -top-10 right-0 bg-gray-900 px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Fale comigo!
        </span>
      </a>

      {/* BOTÃO VOLTAR AO TOPO */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 group animate-fade-in focus:outline-none focus:ring-4 focus:ring-orange-500"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
          <span className="absolute -top-10 right-0 bg-gray-900 px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Voltar ao topo
          </span>
        </button>
      )}

      {/* HERO */}
      <main id="main-content">
        <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 px-4 text-center relative" aria-labelledby="hero-heading">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="mt-6 mb-6 animate-float" aria-hidden="true">
              <div className="w-40 h-40 mx-auto bg-gradient-to-br from-orange-500 to-red-500 rounded-full p-1 shadow-2xl shadow-orange-900/50">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                  <Code size={56} className="text-orange-500" />
                </div>
              </div>
            </div>

            <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
              Olá, sou Renata
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>Desenvolvedora Front-end</p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Eu desenvolvo sites e aplicações modernas, rápidas e totalmente responsivas, pensadas para transformar ideias em interfaces claras, funcionais e fáceis de usar.
              Meu foco é criar experiências fluidas, visualmente profissionais e alinhadas com a necessidade de cada negócio.
            </p>

            <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
                onClick={() => scrollToSection('projetos')} 
                className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-900/50 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500"
              >
                Ver Projetos
              </button>

             <a
  href="/Renata Alexandre Rocha - Desenvolvedora Front End.pdf"
  download
  className="px-8 py-3 bg-gray-900 border border-orange-900/50 rounded-full font-semibold hover:bg-gray-800 hover:border-orange-700 transition-all flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-orange-500"
  aria-label="Baixar currículo em PDF"
>
  <Download size={20} aria-hidden="true" /> Baixar Currículo
</a>

            </div>

            <div className="flex gap-6 justify-center mt-8 animate-fade-in" style={{ animationDelay: '0.8s' }} role="list" aria-label="Redes sociais">
              <a href="https://github.com/RenataARocha" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 rounded p-1" aria-label="GitHub de Renata Rocha">
                <Github size={24} aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/in/renata-alexandre-rocha/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 rounded p-1" aria-label="LinkedIn de Renata Rocha">
                <Linkedin size={24} aria-hidden="true" />
              </a>
              <a
                href="mailto:contato@renata.com?subject=Solicitar%20orçamento&body=Olá%20Renata,%0A%0AEncontrei%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.%0A%0A%20Poderia%20me%20informar%20sobre%20valores,%20prazo%20e%20como%20funciona%20o%20processo?%0A%0AObrigado(a)!"
                className="hover:text-orange-500 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 rounded p-1"
                aria-label="Enviar email"
              >
                <Mail size={24} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-20 px-4 relative" aria-labelledby="sobre-heading">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 id="sobre-heading" className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Sobre Mim</h2>

            <article className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-900/30 shadow-2xl hover:border-orange-800/50 transition-all">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Sou Desenvolvedora Front-end em transição de carreira, com formação em Design Gráfico, o que me dá uma visão completa de estética, usabilidade e experiência do usuário.
              </p>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Trabalho diariamente com HTML, CSS, JavaScript e React, criando sites modernos, landing pages, sistemas simples e aplicações focadas na experiência do usuário.
                Mantenho uma rotina constante de estudo, sempre buscando evoluir meus projetos com boas práticas, organização e clareza no código.
              </p>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Já desenvolvi interfaces reais como: <br />
                • sites institucionais <br />
                • landing pages <br />
                • aplicativos de organização <br />
                • simuladores e conversores <br />
                • interfaces responsivas para mobile e desktop
              </p>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Meu propósito é unir técnica e design para entregar resultados profissionais sem complicação.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8" role="list" aria-label="Estatísticas">
                <div className="text-center p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl border border-orange-800/30 hover:scale-105 transition-transform" role="listitem">
                  <div className="text-3xl font-bold text-orange-500 mb-2" aria-label="Mais de 10">+10</div>
                  <div className="text-gray-400">Projetos Próprios</div>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-red-900/20 to-pink-900/20 rounded-xl border border-red-800/30 hover:scale-105 transition-transform" role="listitem">
                  <div className="text-3xl font-bold text-red-500 mb-2" aria-label="Mais de 1 ano">+1 ano</div>
                  <div className="text-gray-400">Estudando Programação</div>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-pink-900/20 to-orange-900/20 rounded-xl border border-pink-800/30 hover:scale-105 transition-transform" role="listitem">
                  <div className="text-3xl font-bold text-pink-500 mb-2">100%</div>
                  <div className="text-gray-400">Dedicação e Evolução</div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* PROJETOS EM DESTAQUE */}
        <section id="projetos" className="py-20 px-4 relative" aria-labelledby="projetos-heading">
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 id="projetos-heading" className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Projetos em Destaque
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Lista de projetos em destaque">
              {featuredProjects.map((project, index) => (
                <article key={index} className="group bg-gray-900/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-orange-900/30 hover:border-orange-700/60 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-900/30" role="listitem">
                  <div className="h-48 overflow-hidden relative">
                    <img src={project.image} alt={`Captura de tela do projeto ${project.title}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-orange-500 group-hover:text-red-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2" role="list" aria-label={`Tecnologias usadas em ${project.title}`}>
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-orange-900/30 rounded-full text-sm text-orange-400 border border-orange-800/40 hover:bg-orange-800/40 transition-colors" role="listitem">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OUTROS PROJETOS */}
        <section className="py-16 px-4 relative" aria-labelledby="outros-projetos-heading">
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 id="outros-projetos-heading" className="text-3xl font-bold mb-10 text-center text-orange-400">
              Outros Projetos
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Lista de outros projetos">
              {otherProjects.map((project, index) => (
                <article key={index} className="group bg-gray-800/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-700/40 hover:border-orange-700/40 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-800/20" role="listitem">
                  <div className="h-44 overflow-hidden relative">
                    <img src={project.image} alt={`Captura de tela do projeto ${project.title}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-3 text-orange-300 group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2" role="list" aria-label={`Tecnologias usadas em ${project.title}`}>
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-orange-900/20 rounded-full text-xs text-orange-300 border border-orange-800/30 hover:bg-orange-800/30 transition-colors" role="listitem">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* HABILIDADES */}
        <section id="habilidades" className="py-20 px-4 relative" aria-labelledby="habilidades-heading">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 id="habilidades-heading" className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Minhas Habilidades</h2>

            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-900/30 shadow-2xl">
              <div className="space-y-6" role="list" aria-label="Lista de habilidades técnicas">
                {skills.map((skill, index) => (
                  <div key={index} className="group" role="listitem">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-200 group-hover:text-orange-500 transition-colors">{skill.name}</span>
                      <span className="text-orange-500" aria-label={`${skill.level} porcento`}>{skill.level}%</span>
                    </div>

                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100" aria-label={`Nível de habilidade em ${skill.name}`}>
                      <div className="h-full bg-gradient-to-r from-orange-600 to-red-600 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-orange-900/50" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 px-4 relative" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 id="faq-heading" className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Perguntas Frequentes</h2>

            <div className="space-y-4" role="list" aria-label="Lista de perguntas frequentes">
              {faqs.map((faq, index) => (
                <article key={index} className="bg-gray-900/50 backdrop-blur-lg rounded-xl border border-orange-900/30 shadow-lg overflow-hidden hover:border-orange-800/50 transition-all" role="listitem">
                  <h3>
                    <button 
                      onClick={() => toggleFaq(index)} 
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-800/50 transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
                      aria-expanded={faqOpen[index]}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className="font-semibold text-left text-gray-200">{faq.question}</span>
                      <ChevronDown 
                        size={20} 
                        className={`text-orange-500 transition-transform ${faqOpen[index] ? 'rotate-180' : ''}`} 
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  {faqOpen[index] && (
                    <div 
                      id={`faq-answer-${index}`}
                      className="px-6 pb-4 text-gray-400 border-t border-orange-900/30 pt-4 animate-fade-in"
                      role="region"
                    >
                      {faq.answer}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-20 px-4 relative" aria-labelledby="contato-heading">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 id="contato-heading" className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Vamos Trabalhar Juntos?</h2>

            <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-900/30 shadow-2xl text-center">
              <p className="text-lg text-gray-300 mb-8">
                Me chama e vamos conversar sobre seu projeto!
                Adoro transformar ideias em algo bonito, funcional e real.
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
                  href="mailto:contato@renata.com?subject=Contato%20pelo%20Portf%C3%B3lio&body=Ol%C3%A1%20Renata!%20Gostaria%20de%20falar%20sobre%20um%20projeto."
                  className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-orange-900/50 transition-all flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-orange-500"
                  aria-label="Enviar email"
                >
                  <Mail size={20} aria-hidden="true" /> Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-8 px-4 border-t border-orange-900/30 text-center relative" role="contentinfo">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-gray-400">Feito com</span>
          <Heart size={16} className="text-orange-500 fill-orange-500 animate-pulse" aria-label="amor" />
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

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        .focus:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `}</style>
    </div>
  );
}