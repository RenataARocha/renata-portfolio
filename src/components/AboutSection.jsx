export default function AboutSection() {
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

        <article className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-900/30 shadow-2xl hover:border-orange-800/50 transition-all">
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Sou Desenvolvedora Front-end em transição de carreira, com formação
            em Design Gráfico, o que me dá uma visão completa de estética,
            usabilidade e experiência do usuário.
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
            className="grid md:grid-cols-3 gap-6 mt-8"
            role="list"
            aria-label="Estatísticas"
          >
            <div
              className="text-center p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl border border-orange-800/30 hover:scale-105 transition-transform"
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
              className="text-center p-6 bg-gradient-to-br from-red-900/20 to-pink-900/20 rounded-xl border border-red-800/30 hover:scale-105 transition-transform"
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
              className="text-center p-6 bg-gradient-to-br from-pink-900/20 to-orange-900/20 rounded-xl border border-pink-800/30 hover:scale-105 transition-transform"
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
