// // import { useEffect, useState } from "react";

// // export default function Hero() {
// //   const images = [
// //     "/images/hero.jpeg",
// //     "/images/slide2.jpeg",
// //     "/images/slide3.jpeg",
// //     "/images/slide4.jpeg",
// //   ];

// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prev) => (prev + 1) % images.length);
// //     }, 3000); // changes every 3 seconds

// //     return () => clearInterval(interval);
// //   }, [images.length]);

// //   return (
// //     <section className="w-full bg-[#F8F6F2] font-[Poppins]">
// //       <div className="grid md:grid-cols-2 min-h-[calc(100vh-120px)] lg:px-14 pb-24">
// //         {/* LEFT CONTENT */}
// //         <div className="flex items-center px-6 sm:px-10 md:px-16 lg:px-20">
// //           <div className="max-w-xl">
// //             <p className="text-sm uppercase tracking-[0.25em] text-[#C6A55E] mb-4">
// //               Hello, I am Valena Vincent
// //             </p>

// //             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#1F1F1F] mb-5">
// //               Chef & <br />
// //               Wedding Event Caterer
// //             </h1>

// //             <p className="text-base sm:text-lg text-[#5F5F5F] leading-8 mb-8 max-w-lg">
// //               Elevate your special occasion with luxury canapés, beautifully
// //               prepared and professionally arranged to create a refined and
// //               memorable experience for every celebration.
// //             </p>

// //             <div className="hidden md:flex flex-wrap gap-4">
// //               <button className="bg-[#0B3D2E] text-[#D4AF37] px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition">
// //                 View Services
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* RIGHT IMAGE */}
// //         <div className="flex items-end md:items-center justify-center px-6 pb-6 lg:px-4">
// //           <div className="relative w-full max-w-md lg:max-w-lg overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white">
// //             <div
// //               className="flex transition-transform duration-700 ease-in-out"
// //               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
// //             >
// //               {images.map((image, index) => (
// //                 <img
// //                   key={index}
// //                   src={image}
// //                   alt={`Valena Vincent ${index + 1}`}
// //                   className="w-full h-[420px] sm:h-[520px] object-cover flex-shrink-0"
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <div className="hidden lg:flex absolute bottom-0 left-0 w-full leading-none ">
// //         <svg
// //           viewBox="0 0 1440 180"
// //           preserveAspectRatio="none"
// //           className="block w-full h-[120px] sm:h-[140px] md:h-[160px]"
// //         >
// //           <path
// //             d="M0,40 C240,140 420,170 720,120 C980,80 1160,20 1440,70 L1440,180 L0,180 Z"
// //             fill="#ffffff"
// //           />
// //         </svg>
// //       </div>
// //     </section>
// //   );
// // }

// import { useEffect, useState } from "react";
// import Navbar from "./Navbar";

// export default function Hero() {
//   const images = [
//     "/images/hero.jpeg",
//     "/images/slide2.jpeg",
//     "/images/slide3.jpeg",
//     "/images/slide4.jpeg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section className="relative w-full bg-[#F8F6F2] font-[Poppins] overflow-hidden">
//       <Navbar />

//       <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-90px)] px-5 sm:px-10 md:px-16 lg:px-14 xl:px-20 gap-10 md:gap-8 pb-14 md:pb-24">
//         {/* LEFT CONTENT */}
//         <div className="flex items-center order-2 md:order-1">
//           <div className="max-w-xl">
//             <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#C6A55E] mb-4">
//               Hello, I am Valena Vincent
//             </p>

//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#1F1F1F] mb-5">
//               Chef & <br />
//               Wedding Event Caterer
//             </h1>

//             <p className="text-sm sm:text-base lg:text-lg text-[#5F5F5F] leading-7 sm:leading-8 mb-8 max-w-lg">
//               Elevate your special occasion with luxury canapés, beautifully
//               prepared and professionally arranged to create a refined and
//               memorable experience for every celebration.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <button className="bg-[#0B3D2E] text-[#D4AF37] px-6 sm:px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition">
//                 View Services
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="flex items-center justify-center order-1 md:order-2 pt-2 md:pt-0">
//           <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg overflow-hidden rounded-[24px] sm:rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white">
//             <div
//               className="flex transition-transform duration-700 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//               {images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Valena Vincent ${index + 1}`}
//                   className="w-full h-[300px] sm:h-[420px] md:h-[500px] object-cover flex-shrink-0"
//                 />
//               ))}
//             </div>

//             {/* SLIDER DOTS */}
//             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
//               {images.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   aria-label={`Go to slide ${index + 1}`}
//                   className={`transition-all rounded-full ${
//                     currentIndex === index
//                       ? "w-6 h-2.5 bg-[#D4AF37]"
//                       : "w-2.5 h-2.5 bg-white/80"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM CURVE */}
//       <div className="hidden lg:flex absolute bottom-0 left-0 w-full leading-none">
//         <svg
//           viewBox="0 0 1440 180"
//           preserveAspectRatio="none"
//           className="block w-full h-[120px] xl:h-[160px]"
//         >
//           <path
//             d="M0,40 C240,140 420,170 720,120 C980,80 1160,20 1440,70 L1440,180 L0,180 Z"
//             fill="#ffffff"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

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
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full bg-[#F8F6F2] font-[Poppins] overflow-hidden">
      <Navbar />

      <div className="grid md:grid-cols-2 items-center min-h-[calc(100vh-90px)] px-5 sm:px-10 md:px-16 lg:px-14 xl:px-20 gap-10 md:gap-8 pb-14 md:pb-24">
        {/* LEFT CONTENT */}
        <div className="flex items-center order-2 md:order-1">
          <div className="max-w-xl w-full">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#C6A55E] mb-4">
              Hello, I am Valena Vincent
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-[#1F1F1F] mb-5">
              Chef & <br />
              Wedding Event Caterer
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#5F5F5F] leading-7 sm:leading-8 mb-8 max-w-lg">
              Elevate your special occasion with luxury canapés, beautifully
              prepared and professionally arranged to create a refined and
              memorable experience for every celebration.
            </p>

            {/* MOBILE SLIDER */}
            <div className="md:hidden relative w-full max-w-sm overflow-hidden rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white mb-8">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Valena Vincent ${index + 1}`}
                    className="w-full h-[300px] object-cover flex-shrink-0"
                  />
                ))}
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`transition-all rounded-full ${
                      currentIndex === index
                        ? "w-6 h-2.5 bg-[#D4AF37]"
                        : "w-2.5 h-2.5 bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#0B3D2E] text-[#D4AF37] px-6 sm:px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition">
                View Services
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP / TABLET RIGHT IMAGE */}
        <div className="hidden md:flex items-center justify-center order-1 md:order-2 pt-2 md:pt-0">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg overflow-hidden rounded-[24px] sm:rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Valena Vincent ${index + 1}`}
                  className="w-full h-[420px] md:h-[500px] object-cover flex-shrink-0"
                />
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`transition-all rounded-full ${
                    currentIndex === index
                      ? "w-6 h-2.5 bg-[#D4AF37]"
                      : "w-2.5 h-2.5 bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CURVE */}
      <div className="hidden lg:flex absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="block w-full h-[120px] xl:h-[160px]"
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
