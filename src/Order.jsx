export default function StickyOrder() {
  return (
    <a
      href="https://www.zomato.com"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-2 right-2 md:bottom-6 md:right-6 z-[100] group flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-3 md:px-8 md:py-4 rounded-full shadow-[0_10px_30px_rgba(220,38,38,0.5)] transition-all duration-300 hover:bg-red-700 hover:scale-105 active:scale-95"
    >
      {/* Fork & Knife Icon (Culinary Symbol) */}
      <svg
        className="w-4 h-4 md:w-5 md:h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"
        />
      </svg>

      {/* Subtle Ring Animation */}
      <span className="absolute inset-0 rounded-full border-2 border-red-600 animate-ping opacity-25 group-hover:hidden -z-10"></span>
    </a>
  );
}
