import CountUp from "react-countup";

export default function CounterUp() {
  const stats = [
    { label: "Rating", end: 4.7, decimals: 1, suffix: "/5" },
    { label: "Reviews", end: 700, decimals: 0, suffix: "+" },
    { label: "Beverages", end: 45, decimals: 0, suffix: "" },
  ];

  return (
    // w-full prevents overflow; py uses clamp to match the Hero/Menu vertical spacing
    <div className="w-full bg-[#1a1512] py-[clamp(3rem,8vh,6rem)] px-[5vw]">
      {/* Grid: 1 col on mobile, 3 cols on desktop. 
          gap-[5vw] ensures the distance between stats scales with the screen. 
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-[5vw]">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center p-8 transition-all hover:scale-105"
          >
            {/* Label: font-mono and tracking-widest for that cafe-menu feel */}
            <h1 className="text-amber-600 font-mono font-bold tracking-[0.2em] text-[clamp(0.75rem,1vw,1rem)] uppercase mb-2">
              {stat.label}
            </h1>

            {/* The Counter: Using clamp for size and font-serif for elegance */}
            <div className="text-[clamp(2.5rem,5vw,4.5rem)] font-serif font-extrabold text-amber-50 leading-none">
              <CountUp
                key={stat.label}
                start={0}
                end={stat.end}
                decimals={stat.decimals}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
              <span className="text-amber-600 ml-1">{stat.suffix}</span>
            </div>

            {/* Visual Underline: A subtle touch to separate the stats visually */}
            <div className="w-12 h-1 bg-amber-600 mt-4 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
