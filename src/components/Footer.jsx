import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="py-8 px-4 border-t border-orange-900/30 text-center relative"
      role="contentinfo"
    >
      <div className="flex justify-center items-center gap-2 mb-4">
        <span className="text-gray-400">Feito com</span>
        <Heart
          size={16}
          className="text-orange-500 fill-orange-500 animate-pulse"
          aria-label="amor"
        />
        <span className="text-gray-400">por Renata Rocha</span>
      </div>
      <p className="text-gray-500 text-sm">
        © 2025 Renata Rocha. Todos os direitos reservados.
      </p>
    </footer>
  );
}
