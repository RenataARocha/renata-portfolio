import { MessageCircleMore } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5584986399847?text=Ol%C3%A1%20Renata!%20Vim%20pelo%20seu%20portf%C3%B3lio%20e%20quero%20falar%20sobre%20um%20projeto."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 group animate-bounce focus:outline-none focus:ring-4 focus:ring-green-500"
      style={{ animationDuration: "3s" }}
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircleMore
        size={28}
        className="group-hover:rotate-12 transition-transform"
        aria-hidden="true"
      />
      <span className="absolute -top-10 right-0 bg-gray-900 px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Fale comigo!
      </span>
    </a>
  );
}
