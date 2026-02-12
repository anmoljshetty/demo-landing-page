import ImageSlider from "./ImageSlider";

export default function Menu() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6" id="menu">
      {/* 1. max-w-7xl mx-auto: Keeps it centered on big screens.
        2. items-center: Keeps the text and slider vertically aligned.
        3. gap-12: Adds professional breathing room between the image and text.
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Slider Container - rounded and shadowed for depth */}
        <div className="w-full shadow-2xl rounded-3xl overflow-hidden order-1">
          <ImageSlider />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-start text-left order-2 space-y-6">
          {/* <h2 className="text-amber-600 font-mono font-bold tracking-widest text-sm uppercase">
            Taste the Tradition
          </h2> */}

          <h2 className="scroll-mt-24 text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
            Our Signature <br /> Dishes
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
            porro omnis est doloremque cumque sint voluptatum dolorum eveniet
            magni incidunt?
          </p>

          {/* Styled Button */}
          <a
            href="#full-menu"
            className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-transparent font-bold text-white transition-all duration-200 bg-amber-600 font-mono tracking-widest text-xs hover:border-amber-600 hover:text-amber-600 hover:bg-white rounded-lg shadow-lg active:scale-95"
          >
            VIEW FULL MENU
          </a>
        </div>
      </div>
    </section>
  );
}
