import Image from "next/image";
import React from "react";
import Bibendum from "../assests/collections/bibendum-icon.png";
import ArrowRight from "../assests/collections/arrow-right-black.png";
import CrasEget from "../assests/collections/cras-eget-icon.png";
import Dolor from "../assests/collections/dolor-icon.png";
import Amet from "../assests/collections/amet-icon.png";
import AmetNibh from "../assests/collections/amet-nibh-icon.png";
import Sed from "../assests/collections/sed-icon.png";
import Desktop1 from "../assests/collections/desktop-1.png";
import Desktop2 from "../assests/collections/desktop-2.png";
import Desktop3 from "../assests/collections/desktop-3.png";
import WavesBg from "../assests/collections/waves-bg.png";

const Collections = () => {
  return (
    <section className="w-full bg-[#fffbeb] h-full gap-0 px-20 pb-32 grid grid-rows-2 justify-center items-center overflow-hidden ">
      <section className="flex items-center justify-between">
        <div className="flex flex-col items-center md:items-stretch gap-8">
          <div className="w-[350px] md:w-full ">
            <h2 className="text-[#0F172A] font-extrabold text-[32px] md:text-[56px] leading-[36px] md:leading-[60px] ">
              Grow your collection
            </h2>
          </div>
          <div>
            <p className="font-normal text-[#0F172A] text-lg leading-7 ">
              Enim neque massa porta adipiscing elit. Sem libero id faucibus
              nibh amet dictum pellentesque sed. Eu non turpis risus odio
              sapien, fames sit rhoncus. Nec magna sed interdum sit purus
              tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </p>
          </div>
        </div>
      </section>
      <section className=" flex flex-row items-center justify-between mt-[-70px] ">
        <div className=" grid grid-rows-6 gap-4 ">
          <div className="flex flex-row p-4 gap-4 items-center cursor-pointer bg-white rounded-lg shadow-[0_0_4px_0_rgba(0,0,0,0.07), 0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <Image src={Bibendum} className="w-4 h-4" />
            <div className="px-4">
              <p className="font-medium text-[#0F172A] text-xl leading-6 ">
                Bibendum tellus
              </p>
            </div>
            <Image src={ArrowRight} className="w-4 h-4" />
          </div>
          <div className="flex flex-row p-4 gap-4 items-center cursor-pointer rounded-lg shadow-[0_0_4px_0_rgba(0,0,0,0.07), 0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <Image src={CrasEget} className="w-4 h-4" />
            <div className="px-4">
              <p className="font-medium text-[#0F172A] text-xl leading-6 ">
                Cras eget
              </p>
            </div>
          </div>
          <div className="flex flex-row p-4 gap-4 items-center cursor-pointer rounded-lg shadow-[0_0_4px_0_rgba(0,0,0,0.07), 0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <Image src={Dolor} className="w-4 h-4" />
            <div className="px-4">
              <p className="font-medium text-[#0F172A] text-xl leading-6 ">
                Dolor pharetra
              </p>
            </div>
          </div>
          <div className="flex flex-row p-4 gap-4 items-center cursor-pointer rounded-lg shadow-[0_0_4px_0_rgba(0,0,0,0.07), 0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <Image src={Amet} className="w-4 h-4" />
            <div className="px-4">
              <p className="font-medium text-[#0F172A] text-xl leading-6 ">
                Amet, fringilla
              </p>
            </div>
          </div>
          <div className="flex flex-row p-4 gap-4 items-center cursor-pointer rounded-lg shadow-[0_0_4px_0_rgba(0,0,0,0.07), 0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <Image src={AmetNibh} className="w-4 h-4" />
            <div className="px-4">
              <p className="font-medium text-[#0F172A] text-xl leading-6 ">
                Amet nibh
              </p>
            </div>
          </div>
          <div className="flex flex-row p-4 gap-4 items-center cursor-pointer rounded-lg shadow-[0_0_4px_0_rgba(0,0,0,0.07), 0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <Image src={Sed} className="w-4 h-4" />
            <div className="px-4">
              <p className="font-medium text-[#0F172A] text-xl leading-6 ">
                Sed velit
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex gap-[10px] w-full relative">
            <Image src={Desktop1} className="relative z-10 mr-[10vw] " />
            <Image
              src={Desktop2}
              className="absolute z-20 ml-[6vw] mt-[6vw] "
            />
            <Image
              src={Desktop3}
              className="absolute z-30 ml-[44vw] mt-[12vw] "
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Collections;
