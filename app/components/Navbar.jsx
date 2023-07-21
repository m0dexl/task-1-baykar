import Image from "next/image";
import Link from "next/link";
import Menuscale from "../../public/menu-scale.png";

const Navbar = () => {
  return (
    <nav className="w-full z-[100] bg-[#fffbeb]  h-20 ">
      <div className="flex items-center justify-between px-20 py-6 h-full w-full">
        <h5 className="text-amber-900 font-extrabold text-3xl">Collers</h5>

        <div className="hidden  md:flex items-center justify-evenly gap-4">
          <p className="px-3 py-2 text-base font-semibold cursor-pointer text-amber-900">
            Products
          </p>
          <p className="px-3 py-2 text-base font-semibold cursor-pointer text-amber-900 ">
            Solutions
          </p>
          <p className="px-3 py-2 text-base font-semibold cursor-pointer text-amber-900">
            Pricing
          </p>
          <p className="px-3 py-2 text-base font-semibold cursor-pointer text-amber-900 ">
            Resources
          </p>
          <p className="px-3 py-2 text-base font-semibold cursor-pointer text-amber-900 ">
            Log In
          </p>
          <p className="px-3 py-2 text-base font-semibold cursor-pointer text-amber-900 border-2 border-solid border-amber-900 rounded-lg ">
            Sign up now
          </p>
        </div>
        <div className="md:hidden">
          <Image src={Menuscale} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
