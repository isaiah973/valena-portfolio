import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "/images/hero.jpeg",
    "/images/slide2.jpeg",
    "/images/slide3.jpeg",
    "/images/slide4.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // changes every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full bg-[#F8F6F2] font-[Poppins]">
      <div className="grid md:grid-cols-2 min-h-[calc(100vh-120px)] lg:px-14 pb-24">
        {/* LEFT CONTENT */}
        <div className="flex items-center px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#C6A55E] mb-4">
              Hello, I am Valena Vincent
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#1F1F1F] mb-5">
              Chef <br />
              Wedding & Event Caterer
            </h1>

            <p className="text-base sm:text-lg text-[#5F5F5F] leading-8 mb-8 max-w-lg">
              Elevate your special occasion with luxury canapés, beautifully
              prepared and professionally arranged to create a refined and
              memorable experience for every celebration.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0B3D2E] text-[#D4AF37] px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition">
                View Services
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-end md:items-center justify-center px-6 pb-6 lg:px-4">
          <div className="relative w-full max-w-md lg:max-w-lg overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Valena Vincent ${index + 1}`}
                  className="w-full h-[420px] sm:h-[520px] object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex absolute bottom-0 left-0 w-full leading-none ">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="block w-full h-[120px] sm:h-[140px] md:h-[160px]"
        >
          <path
            d="M0,40 C240,140 420,170 720,120 C980,80 1160,20 1440,70 L1440,180 L0,180 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
