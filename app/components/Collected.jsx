import Image from "next/image";
import React from "react";
import Chart from "../assests/collected/chart.png";
import Ellipses from "../assests/collected/ellipses.png";

const Collected = () => {
  return (
    <section className="w-full bg-amber-900 h-full gap-0 px-20 py-20 grid grid-rows-1 justify-center items-center overflow-hidden ">
      <Image src={Chart} className="relative z-10" />
      <Image src={Ellipses} className="absolute z-20 right-1/4 " />
      <div className="absolute z-30 right-1/3 ">
        <div className="flex flex-col gap-4 justify-center items-center ">
          <h1 className="font-extrabold text-amber-50 md:text-[96px] md:leading-[100px] ">
            11,658,467
          </h1>
          <h1 className="font-extrabold text-amber-50 md:text-[56px] md:leading-[60px] ">
            Shoes Collected
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Collected;
