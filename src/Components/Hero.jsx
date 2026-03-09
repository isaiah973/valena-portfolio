import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-[#F8F6F2] font-[Poppins]">
      <Navbar />

      <div className="grid md:grid-cols-2 min-h-[calc(100vh-80px)]">
        {/* LEFT CONTENT */}
        <div className="flex items-center px-6 py-14 sm:px-10 md:px-16 lg:px-20">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.25em] text-[#C6A55E] mb-4">
              Hello, I am Valena Vincent
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#1F1F1F] mb-5">
              Chef & <br />
              Wedding Event Planner
            </h1>

            <p className="text-base sm:text-lg text-[#5F5F5F] leading-8 mb-8 max-w-lg">
              Elevate your special occasion with luxury canapés, beautifully
              prepared and professionally arranged to create a refined and
              memorable experience for every celebration.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#C6A55E] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition">
                View Services
              </button>

              <button className="border border-[#D8CFC4] text-[#3A3A3A] px-7 py-3.5 rounded-full text-sm font-medium hover:bg-white transition">
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex items-end md:items-center justify-center px-6 pb-10 md:px-10 lg:px-16">
          <div className="w-full max-w-md lg:max-w-lg overflow-hidden rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] bg-white">
            <img
              src="/images/valena.jpeg"
              alt="Valena Vincent"
              className="w-full h-[420px] sm:h-[520px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
