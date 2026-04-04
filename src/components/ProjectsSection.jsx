import ProjectCard from "./ProjectCard";
import { featuredProjects, otherProjects } from "../data/portfolioData";

export default function ProjectsSection() {
  return (
    <>
      <section
        id="projetos"
        className="py-20 px-4 relative"
        aria-labelledby="projetos-heading"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            id="projetos-heading"
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"
          >
            Projetos em Destaque
          </h2>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="Lista de projetos em destaque"
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16 px-4 relative"
        aria-labelledby="outros-projetos-heading"
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            id="outros-projetos-heading"
            className="text-3xl font-bold mb-10 text-center text-orange-400"
          >
            Outros Projetos
          </h2>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="Lista de outros projetos"
          >
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} project={project} variant="other" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
