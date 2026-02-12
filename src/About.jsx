import about from "./assets/about.jpg";

export default function About() {
  return (
    // bg-[#1a1512] provides that deep coffee-brown vibe
    <section className="w-full bg-[#1a1512] text-stone-100 py-20 px-[5vw]">
      {/* 1. Main Flex Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        {/* 2. Text Column */}
        <div className="flex-1 space-y-6 order-2 md:order-1">
          <p className="text-amber-500 font-mono text-sm tracking-widest uppercase">
            {/* Est. 2026 */}
          </p>

          <h2
            className="scroll-mt-24 text-4xl md:text-6xl font-serif font-bold leading-tight"
            id="about"
          >
            About <span className="text-amber-600">us</span>
          </h2>

          <p className="text-stone-400 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            ducimus cum dolore quae temporibus doloremque omnis eveniet eligendi
            in consequatur ea quia eaque commodi dignissimos deserunt id autem,
            rerum incidunt officia doloribus enim dicta! Tenetur cum quos nobis
            illo? Et, amet quas. Dolor, eveniet libero! Earum non blanditiis
            recusandae asperiores?
          </p>

          {/* <button className="px-8 py-3 border border-amber-500 text-amber-500 hover:bg-amber-600 hover:text-white transition-colors font-mono text-xs tracking-widest ">
            OUR PHILOSOPHY
          </button> */}
        </div>

        {/* 3. Image Column */}
        <div className="flex-1 order-1 md:order-2">
          <div className="relative border-l-4 border-b-4 border-amber-500/30 pl-4 pb-4">
            <img
              src={about}
              alt="Cafe Interior"
              className="w-full h-[350px] md:h-[500px] object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
