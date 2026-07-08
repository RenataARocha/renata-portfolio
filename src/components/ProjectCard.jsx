import { Github } from "lucide-react";

export default function ProjectCard({ project, variant = "featured" }) {
  const isFeatured = variant === "featured";

  function handleMouseEnter(e) {
    const el = e.currentTarget;
    el.style.transform = "translateY(-6px) scale(1.015)";
    el.style.boxShadow = isFeatured
      ? "0 24px 48px -12px rgba(234,88,12,0.25)"
      : "0 20px 40px -12px rgba(234,88,12,0.15)";
    el.style.borderColor = isFeatured
      ? "rgba(194,65,12,0.6)"
      : "rgba(194,65,12,0.4)";
  }

  function handleMouseLeave(e) {
    const el = e.currentTarget;
    el.style.transform = "";
    el.style.boxShadow = "";
    el.style.borderColor = "";
  }

  return (
    <article
      className={`group flex flex-col h-full backdrop-blur-lg rounded-2xl overflow-hidden ${
        isFeatured
          ? "bg-gray-900/50 border border-orange-900/30"
          : "bg-gray-800/40 border border-gray-700/40"
      }`}
      style={{
        transition:
          "transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94), border-color 400ms ease",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="listitem"
    >
      <div
        className={`overflow-hidden relative ${isFeatured ? "h-48" : "h-44"}`}
      >
        <img
          src={project.image}
          alt={`Captura de tela do projeto ${project.title}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          aria-hidden="true"
        />
      </div>

      <div className={`flex flex-col flex-1 ${isFeatured ? "p-6" : "p-5"}`}>
        <h3
          className={`font-bold mb-3 transition-colors duration-300 ${
            isFeatured
              ? "text-xl text-orange-500 group-hover:text-red-400"
              : "text-lg text-orange-300 group-hover:text-red-300"
          }`}
        >
          {project.title}
        </h3>

        <div className="flex gap-2 mb-3 flex-wrap">
          {project.featured && (
            <span className="px-2 py-1 text-xs rounded-full bg-orange-600/20 text-orange-400 border border-orange-500/30">
              Destaque
            </span>
          )}
          {project.new && (
            <span className="px-2 py-1 text-xs rounded-full bg-green-600/20 text-green-400 border border-green-500/30">
              Novo
            </span>
          )}
          {project.status && (
            <span className="px-2 py-1 text-xs rounded-full bg-amber-600/20 text-amber-400 border border-amber-500/30">
              {project.status}
            </span>
          )}
          {project.goal && (
            <span className="px-2 py-1 text-xs rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
              {project.goal}
            </span>
          )}
        </div>

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
              className={`rounded-full border transition-colors duration-300 ${
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

        <div className="flex gap-3 mt-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-semibold transition-all duration-300 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-500 ${!isFeatured && "text-sm"}`}
            aria-label={`Ver projeto ${project.title} ao vivo`}
          >
            Ver Projeto
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label={`Ver código do projeto ${project.title} no GitHub`}
          >
            <Github size={isFeatured ? 20 : 18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
