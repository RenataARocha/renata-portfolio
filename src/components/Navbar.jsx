import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "habilidades", label: "Habilidades" },
  { id: "faq", label: "FAQ" },
  { id: "contato", label: "Contato" },
];

export default function Navbar({ menuOpen, setMenuOpen, scrollToSection }) {
  return (
    <nav
      className="fixed top-0 w-full bg-black/90 backdrop-blur-lg z-50 border-b border-orange-900/30"
      role="navigation"
      aria-label="Navegação principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Sparkles
              className="text-orange-500"
              size={24}
              aria-hidden="true"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Renata Rocha
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
              >
                {label}
              </button>
            ))}
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
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left py-2 hover:text-orange-500 transition focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2"
              role="menuitem"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
