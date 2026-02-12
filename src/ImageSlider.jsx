import { useState, useEffect } from "react";
import hotChocolate from "./assets/hot-chocolate.jpg";
import koreanBun from "./assets/korean-bun.webp";
import mangoLatte from "./assets/mango-latte.webp";
import avocadoToast from "./assets/avocado-toast.jpg";

const images = [hotChocolate, koreanBun, mangoLatte, avocadoToast];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Use the functional update to ensure we always have the latest index
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 4 seconds

    // IMPORTANT: Cleanup the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto h-[300px] md:h-[500px] overflow-hidden rounded-2xl relative drop-shadow-[0_10px_20px_rgba(251,146,60,0.6)]">
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={`Slide ${index}`}
          loading={index === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Visual Indicators (Dots) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === currentIndex ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
