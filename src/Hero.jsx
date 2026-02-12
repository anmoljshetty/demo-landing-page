import hero from "./assets/cafe-hero.jpg";
import hero2 from "./assets/cafe2.avif";

export default function Hero() {
  return (
    <div
      className="relative h-[100dvh] w-full bg-cover bg-center flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${hero2})`,
      }}
    >
      {/* WRAPPER BOX: 
         - pt-24 (mobile) and md:pt-32 (desktop) ensures the text 
           starts below the absolute/fixed Navbar height.
      */}
      <div className="flex flex-col items-center pt-12 md:pt-20">
        <h1 className="font-mono font-bold text-6xl md:text-8xl lg:text-9xl text-orange-200/90 leading-none tracking-tighter mb-6 drop-shadow-2xl">
          NAMEEE
        </h1>

        <p className="font-mono text-amber-50/85 text-sm md:text-lg max-w-2xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          odio omnis! Perspiciatis ut dolor quis quos sed! Odio atque excepturi,
          alias molestiae praesentium unde similique ad.
        </p>
      </div>

      {/* Scroll Indicator (uncommented if needed) */}
      {/* <div className="absolute bottom-10 animate-bounce opacity-40">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div> */}
    </div>
  );
}
