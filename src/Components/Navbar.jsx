export default function Navbar() {
  return (
    <nav className="absolute w-full flex items-center justify-between py-6 px-6 text-black font-[poppins]">
      <h1 className="text-xl font-semibold tracking-wide">Eventliving</h1>

      <ul className="hidden md:flex gap-10 text-md font-bold ">
        <li className="hover:opacity-80 cursor-pointer text-black">Home</li>
        <li className="hover:opacity-80 cursor-pointer text-black">Services</li>
        <li className="hover:opacity-80 cursor-pointer text-white">Contact</li>
      </ul>

      <button className="border border-white text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
        Contact Now
      </button>
    </nav>
  );
}
