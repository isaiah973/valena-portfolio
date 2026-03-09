import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] ">
      <Navbar />
      <div className="grid md:grid-cols-2 bg-[#E9E1DA] overflow-hidden">
        {/* LEFT */}
        <div className="p-12 flex flex-col justify-center">
          <p className="text-xs tracking-widest text-gray-500 mb-3">
            HERO SECTION
          </p>

          <h1 className="text-4xl md:text-5xl font-[playfair] leading-tight mb-6">
            Female Chef <br />
            Wedding Event
          </h1>

          <p className="text-gray-500 mb-6 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="bg-[#b8865b] text-white px-6 py-3 w-fit rounded">
            Learn More
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="h-[400px] md:h-auto">
          <img
            src="/images/valena.jpeg"
            alt="chef"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
