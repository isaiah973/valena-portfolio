export default function Navbar() {
  return (
    <nav className=" w-full flex items-center justify-between bg-[#F8F6F2] sm:px-10 md:px-16 lg:px-32 text-black font-[poppins] ">
      <div className="w-24">
        <img src="images/logo1.png" alt="" />
      </div>

      <ul className="hidden md:flex gap-10 text-md font-bold ">
        <li className="hover:opacity-80 cursor-pointer text-black">HOME</li>
        <li className="hover:opacity-80 cursor-pointer text-black">SERVICES</li>
        <li className="hover:opacity-80 cursor-pointer text-black">
          PORTFOLIO
        </li>
      </ul>

      <button className="bg-[#0B3D2E] text-[#D4AF37] px-6 py-3 rounded-full text-sm font-medium hover:bg-amber-50 hover:border hover:border-black hover:text-black transition">
        Contact Now
      </button>
    </nav>
  );
}
