import Image from "next/image";
import React from "react";
import PlayCircle from "../../public/play-circle.svg";
import Shoe2 from "../../public/shoe2.png";
import Trophy from "../../public/trophy.png";
import Heart from "../../public/heart.png";
import Triangle from "../../public/triangle.png";
import Tunnel from "../../public/tunnel.png";
import Circle from "../../public/circle.png";
import Tv from "../../public/tv.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#fffbeb] h-full gap-20 px-20 pb-20 md:p-20 grid md:grid-rows-1 ">
      <section className="grid grid-row md:grid-cols-2 py-20">
        <article>
          <section className="flex flex-col w-fit gap-12 ">
            <div>
              <h1 className="font-extrabold text-[56px] md:text-7xl text-[#0F172A] ">
                Collectible Sneakers
              </h1>
            </div>
            <p className="font-normal text-lg text-[##0F172A]">
              Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
              suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
              ultrices amet.
            </p>
            <div className="flex flex-row gap-4">
              <p className="px-3 py-2 text-xl font-semibold cursor-pointer text-amber-900 border-2 border-solid border-amber-900 rounded-lg ">
                Sign up now
              </p>
              <div className="flex flex-row  px-2 py-3 cursor-pointer ">
                <Image src={PlayCircle} />
                <p className="px-2  text-amber-900 text-base ">Watch Demo</p>
              </div>
            </div>
          </section>
        </article>

        <section className="flex w-fit h-fit  pl-[10vw] relative">
          <div className="bg-[#FBBF24] mx-5  w-[50vw] md:w-[25vw] h-[50vw] md:h-[25vw] z-10 absolute rounded-[50px] mt-[10vw] md:mt-[-0.5vw] ml-[4vw] "></div>
          <Image
            className="z-20 md:w-[35vw] mt-[10vw] md:mt-[-80px] "
            src={Shoe2}
          />
        </section>
      </section>
      <section>
        <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-20">
          <div className="w-full">
            <div>
              <div className="flex flex-col items-center md:items-stretch gap-4">
                <div>
                  <Image className="z-10 absolute ml-[30px]" src={Heart} />
                  <Image className="z-20  " src={Trophy} />
                </div>
                <p className="text-[#0F172A] text-xl font-medium">
                  Nibh viverra
                </p>
                <p className="text-[#0F172A] font-normal text-lg">
                  Sit bibendum donec dolor fames neque vulputate non sit
                  aliquam. Consequat turpis natoque leo, massa.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div>
              <div className="flex flex-col items-center md:items-stretch gap-4">
                <div>
                  <Image className="z-10 absolute ml-[30px]" src={Triangle} />
                  <Image className="z-20  " src={Tunnel} />
                </div>
                <p className="text-[#0F172A] text-xl font-medium">
                  Cursus amet
                </p>
                <p className="text-[#0F172A] font-normal text-lg">
                  Sit bibendum donec dolor fames neque vulputate non sit
                  aliquam. Consequat turpis natoque leo, massa.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div>
              <div className="flex flex-col items-center md:items-stretch gap-4">
                <div>
                  <Image className="z-10 absolute ml-[30px]" src={Circle} />
                  <Image className="z-20  " src={Tv} />
                </div>
                <p className="text-[#0F172A] text-xl font-medium">
                  Cursus amet
                </p>
                <p className="text-[#0F172A] font-normal text-lg">
                  Sit bibendum donec dolor fames neque vulputate non sit
                  aliquam. Consequat turpis natoque leo, massa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
