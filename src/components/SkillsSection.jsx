import { skills } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="py-20 px-4 relative"
      aria-labelledby="habilidades-heading"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          id="habilidades-heading"
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
        >
          Minhas Habilidades
        </h2>

        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-orange-900/30 shadow-2xl">
          <div
            className="space-y-6"
            role="list"
            aria-label="Lista de habilidades técnicas"
          >
            {skills.map((skill, index) => (
              <div key={index} className="group" role="listitem">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-200 group-hover:text-orange-500 transition-colors">
                    {skill.name}
                  </span>
                  <span
                    className="text-orange-500"
                    aria-label={`${skill.level} porcento`}
                  >
                    {skill.level}%
                  </span>
                </div>
                <div
                  className="h-3 bg-gray-800 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label={`Nível de habilidade em ${skill.name}`}
                >
                  <div
                    className="h-full bg-gradient-to-r from-orange-600 to-red-600 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-orange-900/50"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
