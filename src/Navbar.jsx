import { useState, useEffect } from "react";
import coffee from "./assets/coffee.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["ABOUT", "MENU", "CONTACT US"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-amber-600 shadow-lg py-2 " : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <img
          src={coffee}
          alt="Logo"
          className="w-12 h-auto bg-amber-500/50 rounded-lg p-1"
        />

        {/* Desktop View (Hidden on Mobile) */}
        <div className="hidden sm:flex space-x-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-white text-[13px] font-mono tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger Icon (Visible on Mobile) */}
        <button
          onClick={() => setIsOpen(true)}
          className="sm:hidden text-white"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* --- FULL SCREEN MOBILE OVERLAY --- */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#1a1512] z-[60] flex flex-col items-center justify-center">
          {/* "Wrong" / Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-white"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Column View Links */}
          <div className="flex flex-col space-y-10 text-center">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                onClick={() => setIsOpen(false)} // Close on click
                className="text-white text-3xl font-mono tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
