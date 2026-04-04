export default function BackgroundEffects() {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-24 right-12 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div className="absolute top-40 left-1/4 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-50"></div>
      <div
        className="absolute top-60 right-1/3 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-50"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-40 left-1/3 w-2 h-2 bg-pink-500 rounded-full animate-ping opacity-50"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
}
