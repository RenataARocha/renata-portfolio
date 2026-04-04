import { ArrowUp } from "lucide-react";

export default function ScrollTopButton({ show, onClick }) {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-6 bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 group focus:outline-none focus:ring-4 focus:ring-orange-500"
      aria-label="Voltar ao topo"
    >
      <ArrowUp
        size={24}
        className="group-hover:-translate-y-1 transition-transform"
        aria-hidden="true"
      />
      <span className="absolute -top-10 right-0 bg-gray-900 px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Voltar ao topo
      </span>
    </button>
  );
}
