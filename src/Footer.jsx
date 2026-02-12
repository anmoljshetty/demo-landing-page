export default function Footer() {
  return (
    <footer className="w-full bg-[#1a1512] text-stone-300 pt-20 pb-10 px-[5vw] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 text-center sm:text-left">
        {/* 1. Brand & Description */}
        <div className="lg:col-span-1 flex flex-col items-center sm:items-start">
          <h2 className="font-serif text-3xl lg:text-4xl text-white font-bold tracking-tighter mb-4">
            NAMEEE
          </h2>
          <p className="font-mono text-[11px] lg:text-xs leading-relaxed opacity-60 uppercase tracking-wider max-w-[250px]">
            Crafting the perfect roast since 2026. Your new favourite for
            specialty beans.
          </p>
        </div>

        {/* 2. Opening Hours */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="font-mono text-amber-600 text-xs lg:text-sm tracking-[0.2em] uppercase mb-6 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">
            Timings
          </h4>
          <div className="font-mono text-sm lg:text-base space-y-4">
            <div>
              <p className="text-[10px] opacity-40 uppercase tracking-tighter">
                Weekdays
              </p>
              <p className="text-white">07:00 AM — 09:00 PM</p>
            </div>
            <div>
              <p className="text-[10px] opacity-40 uppercase tracking-tighter">
                Weekends
              </p>
              <p className="text-white">08:00 AM — 10:00 PM</p>
            </div>
          </div>
        </div>

        {/* 3. Location */}
        <div className="flex flex-col items-center sm:items-start">
          <h4 className="font-mono text-amber-600 text-xs lg:text-sm tracking-[0.2em] uppercase mb-6 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">
            Location
          </h4>
          <address className="font-mono text-sm lg:text-base not-italic leading-relaxed">
            123 Coffee Lane
            <br />
            JP Nagar
            <br />
            <span className="text-stone-500 text-xs lg:text-sm italic">
              Bengaluru
            </span>
          </address>
        </div>

        {/* 4. Contact Us */}
        <div
          id="contactus"
          className="scroll-mt-24 flex flex-col items-center sm:items-start"
        >
          <h4 className="font-mono text-amber-600 text-xs lg:text-sm tracking-[0.2em] uppercase mb-6 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">
            Contact
          </h4>
          <div className="font-mono text-sm lg:text-base space-y-2">
            <p className="text-white transition-colors cursor-pointer">
              +91 1234567890
            </p>
            <p className="opacity-60">hello@nameee.com</p>
            <p className="opacity-60">support@nameee.com</p>
          </div>
        </div>

        {/* 5. Social & Order */}
        <div className="space-y-8 flex flex-col items-center sm:items-start">
          <div>
            <h4 className="font-mono text-amber-600 text-xs lg:text-sm tracking-[0.2em] uppercase mb-4 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">
              Follow Us
            </h4>
            <a
              href="#"
              className="inline-flex items-center gap-2 group text-white"
            >
              <svg
                className="w-5 h-5 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="font-mono text-[10px] lg:text-xs tracking-widest md:opacity-60 group-hover:opacity-100">
                INSTAGRAM
              </span>
            </a>
          </div>

          <div>
            <h4 className="font-mono text-amber-600 text-xs lg:text-sm tracking-[0.2em] uppercase mb-4 drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]">
              Delivery
            </h4>
            <a href="#" className="flex items-center gap-2 group">
              <span className="font-mono text-[10px] lg:text-xs tracking-widest text-white uppercase">
                Order on
              </span>
              <span className="font-mono text-[10px] lg:text-xs tracking-widest text-red-600 md:opacity-80 group-hover:opacity-100 font-bold group-hover:opacity-100 uppercase">
                Zomato
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* --- REFINED COPYRIGHT SECTION --- */}
      {/* <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/10 text-center">
        <p className="text-xs md:text-sm font-mono text-stone-500 uppercase tracking-[0.3em] leading-loose">
          © 2026 <span className="text-stone-300 font-bold">NAMEEE CAFE</span>
        </p>
        <div className="h-2"></div>
      </div> */}
    </footer>
  );
}
