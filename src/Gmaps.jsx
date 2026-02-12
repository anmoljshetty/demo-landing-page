export default function Gmaps() {
  return (
    <section
      id="location"
      className="w-full py-20 px-[5vw] bg-stone-50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT SIDE: THE MAP (Takes 7/12 of the space) */}
          <div className="lg:col-span-7 h-[400px] lg:h-[500px] relative overflow-hidden rounded-2xl shadow-2xl border border-stone-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3737.1622228515535!2d77.57937714865731!3d12.902616735889517!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151f552549b9%3A0x708d8eb4d93d0700!2sSarakki%20Lake!5e1!3m2!1sen!2sin!4v1770879632466!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-[1.1]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NAMEEE Cafe Location"
            ></iframe>
          </div>

          {/* RIGHT SIDE: THE INFO (Takes 5/12 of the space) */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left px-4">
            <div>
              <h4 className="font-mono text-amber-600 text-sm tracking-[0.3em] uppercase mb-2">
                Find Us
              </h4>
              <h2 className="font-serif text-4xl lg:text-5xl text-stone-900 font-bold leading-tight">
                Visit the <br /> Cafe
              </h2>
            </div>

            <div className="space-y-6">
              <div className="group">
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-1">
                  Address
                </p>
                <p className="text-stone-700 text-lg leading-relaxed">
                  123 Coffee Lane, 5th Phase,
                  <br />
                  JP Nagar, Bengaluru, KA 560078
                </p>
              </div>

              <div className="group">
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-1">
                  Landmark
                </p>
                <p className="text-stone-700">
                  Near the Old Library & Oak Tree
                </p>
              </div>
            </div>

            {/* A "Get Directions" Button makes the section interactive */}
            <div className="pt-4">
              <a
                href="https://maps.app.goo.gl/..."
                target="_blank"
                className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-mono text-xs tracking-widest hover:bg-amber-600 transition-all duration-300 shadow-xl active:scale-95"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                GET DIRECTIONS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
