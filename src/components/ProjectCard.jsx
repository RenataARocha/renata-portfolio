import { Github } from "lucide-react";

export default function ProjectCard({ project, variant = "featured" }) {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`group backdrop-blur-lg rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl ${
        isFeatured
          ? "bg-gray-900/50 border border-orange-900/30 hover:border-orange-700/60 hover:shadow-orange-900/30"
          : "bg-gray-800/40 border border-gray-700/40 hover:border-orange-700/40 hover:shadow-orange-800/20"
      }`}
      role="listitem"
    >
      <div
        className={`overflow-hidden relative ${isFeatured ? "h-48" : "h-44"}`}
      >
        <img
          src={project.image}
          alt={`Captura de tela do projeto ${project.title}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        ></div>
      </div>

      <div className={isFeatured ? "p-6" : "p-5"}>
        <h3
          className={`font-bold mb-3 transition-colors ${
            isFeatured
              ? "text-xl text-orange-500 group-hover:text-red-500"
              : "text-lg text-orange-300 group-hover:text-red-400"
          }`}
        >
          {project.title}
        </h3>

        <p className={`text-gray-400 mb-4 ${!isFeatured && "text-sm"}`}>
          {project.description}
        </p>

        <div
          className="flex flex-wrap gap-2 mb-4"
          role="list"
          aria-label={`Tecnologias usadas em ${project.title}`}
        >
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className={`rounded-full border transition-colors ${
                isFeatured
                  ? "px-3 py-1 bg-orange-900/30 text-sm text-orange-400 border-orange-800/40 hover:bg-orange-800/40"
                  : "px-2 py-1 bg-orange-900/20 text-xs text-orange-300 border-orange-800/30 hover:bg-orange-800/30"
              }`}
              role="listitem"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-semibold hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              !isFeatured && "text-sm"
            }`}
            aria-label={`Ver projeto ${project.title} ao vivo`}
          >
            Ver Projeto
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label={`Ver código do projeto ${project.title} no GitHub`}
          >
            <Github size={isFeatured ? 20 : 18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
