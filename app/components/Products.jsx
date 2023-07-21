import React from "react";
import Shoes1 from "../../public/shoes1.png";
import Shoes2 from "../../public/shoes2.png";
import Shoes3 from "../../public/shoes3.png";

import Image from "next/image";
import ShoppingCard from "../../public/shopping-cart.png";

const Products = () => {
  return (
    <section className="w-full bg-[#0F172A] h-full  px-20 grid grid-rows-2 md:grid-rows-1 ">
      <section className="flex flex-col -mx-10 md:mx-0 md:flex-row gap-10 md:gap-0 items-center md:justify-between py-20">
        <h2 className="text-gray-50 text-[32px]  md:text-[56px] font-extrabold">
          The best of the best
        </h2>
        <p className="px-3 py-2 text-base font-semibold cursor-pointer text-white border-2 border-solid border-white rounded-lg ">
          Sign up now
        </p>
      </section>
      <section className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-20 -mt-[120vw] mb-[50px] md:-mt-0">
        <div className="w-full h-[90vw] md:h-[28vw] bg-[#0F172A] shadow-[0px_20px_60px_-25px_white] rounded-[10px]">
          <div>
            <div className="flex flex-col gap-4 ">
              <div>
                <Image className="w-full rounded-t-[10px]" src={Shoes1} />
              </div>
              <div className="px-8 ">
                <p className="font-bold text-lg text-white ">Title</p>
                <p className="font-normal text-sm text-white py-4">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
              </div>
              <div className="px-7">
                <div className="flex flex-row justify-center gap-4 px-2 py-3 cursor-pointer border-2 border-solid border-white rounded-lg text-white">
                  <Image src={ShoppingCard} />
                  <p className="font-medium">Buy now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[90vw] md:h-[28vw] bg-[#0F172A] shadow-[0px_20px_60px_-25px_white] rounded-[10px]">
          <div>
            <div className="flex flex-col gap-4 ">
              <div>
                <Image className="w-full rounded-t-[10px]" src={Shoes2} />
              </div>
              <div className="px-8 ">
                <p className="font-bold text-lg text-white ">Title</p>
                <p className="font-normal text-sm text-white py-4">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
              </div>
              <div className="px-7">
                <div className="flex flex-row justify-center gap-4 px-2 py-3 cursor-pointer border-2 border-solid border-white rounded-lg text-white">
                  <Image src={ShoppingCard} />
                  <p className="font-medium">Buy now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[90vw] md:h-[28vw] bg-[#0F172A] shadow-[0px_20px_60px_-25px_white] rounded-[10px]">
          <div>
            <div className="flex flex-col gap-4 ">
              <div>
                <Image className="w-full rounded-t-[10px]" src={Shoes3} />
              </div>
              <div className="px-8 ">
                <p className="font-bold text-lg text-white ">Title</p>
                <p className="font-normal text-sm text-white py-4">
                  Egestas elit dui scelerisque ut eu purus aliquam vitae
                  habitasse.
                </p>
              </div>
              <div className="px-7">
                <div className="flex flex-row justify-center gap-4 px-2 py-3 cursor-pointer border-2 border-solid border-white rounded-lg text-white">
                  <Image src={ShoppingCard} />
                  <p className="font-medium">Buy now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Products;
