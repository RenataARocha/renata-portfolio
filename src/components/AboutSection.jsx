import { useRef, useEffect, useState } from "react";

function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const timer = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function AboutSection() {
  const [cardRef, cardVisible] = useVisible();
  const [statsRef, statsVisible] = useVisible(0.2);

  return (
    <section
      id="sobre"
      className="py-20 px-4 relative"
      aria-labelledby="sobre-heading"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          id="sobre-heading"
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
        >
          Sobre Mim
        </h2>

        <article
          ref={cardRef}
          className={`bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-900/30 shadow-2xl hover:border-orange-800/50 transition-all duration-700 ease-out ${
            cardVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Sou Desenvolvedora Front-End em transição de carreira, com
            experiência anterior em Design Gráfico, o que fortaleceu minha visão
            sobre estética, comunicação visual e experiência do usuário.
            Atualmente desenvolvo aplicações utilizando React, JavaScript e
            tecnologias modernas do ecossistema Front-End, com foco em
            componentização, responsividade, acessibilidade e organização de
            interfaces. Tenho grande interesse em design systems, componentes
            reutilizáveis e melhoria contínua da experiência do usuário, unindo
            visão visual e desenvolvimento para criar aplicações modernas,
            intuitivas e escaláveis.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Trabalho diariamente com HTML, CSS, JavaScript e React, criando
            sites modernos, landing pages, sistemas simples e aplicações focadas
            na experiência do usuário. Mantenho uma rotina constante de estudo,
            sempre buscando evoluir meus projetos com boas práticas, organização
            e clareza no código.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Já desenvolvi interfaces reais como: <br />
            • sites institucionais <br />
            • landing pages <br />
            • aplicativos de organização <br />
            • simuladores e conversores <br />• interfaces responsivas para
            mobile e desktop
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Meu propósito é unir técnica e design para entregar resultados
            profissionais sem complicação.
          </p>

          <div
            ref={statsRef}
            className={`grid md:grid-cols-3 gap-6 mt-8 transition-all duration-700 ease-out delay-200 ${
              statsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            role="list"
            aria-label="Estatísticas"
          >
            <div
              className="text-center p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl border border-orange-800/30 hover:scale-105 transition-transform duration-300 ease-out"
              role="listitem"
            >
              <div
                className="text-3xl font-bold text-orange-500 mb-2"
                aria-label="Mais de 16"
              >
                +16
              </div>
              <div className="text-gray-400">Projetos Próprios</div>
            </div>
            <div
              className="text-center p-6 bg-gradient-to-br from-red-900/20 to-pink-900/20 rounded-xl border border-red-800/30 hover:scale-105 transition-transform duration-300 ease-out"
              role="listitem"
            >
              <div
                className="text-3xl font-bold text-red-500 mb-2"
                aria-label="Mais de 1 ano"
              >
                +1 ano
              </div>
              <div className="text-gray-400">Estudando Programação</div>
            </div>
            <div
              className="text-center p-6 bg-gradient-to-br from-pink-900/20 to-orange-900/20 rounded-xl border border-pink-800/30 hover:scale-105 transition-transform duration-300 ease-out"
              role="listitem"
            >
              <div className="text-3xl font-bold text-pink-500 mb-2">100%</div>
              <div className="text-gray-400">Dedicação e Evolução</div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
