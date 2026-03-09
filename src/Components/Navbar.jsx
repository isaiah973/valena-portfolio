export default function Navbar() {
  return (
    <nav className=" w-full flex items-center justify-between py-4 px-6 text-black font-[poppins] ">
      <h1 className="text-xl font-semibold tracking-wide">Eventliving</h1>

      <ul className="hidden md:flex gap-10 text-md font-bold ">
        <li className="hover:opacity-80 cursor-pointer text-black">HOME</li>
        <li className="hover:opacity-80 cursor-pointer text-black">SERVICES</li>
        <li className="hover:opacity-80 cursor-pointer text-white">CONTACT</li>
      </ul>

      <button className="border border-white text-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
        Contact Now
      </button>
    </nav>
  );
}
