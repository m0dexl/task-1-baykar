import Image from "next/image";
import React from "react";
import ArrowLeft from "../../public/arrow-left.png";
import ArrowRight from "../../public/arrow-right.png";
import Kontrastr from "../../public/kontrastr.png";
import KontrastrUser from "../../public/kontrastr-user.png";
import Zoomer from "../../public/zoomer.png";
import ZoomerUser from "../../public/zoomer-user.png";
import Shells from "../../public/shells.png";
import ShellsUser from "../../public/shells-user.png";
import Artvenue from "../../public/artvenue.png";
import ArtvenueUser from "../../public/artvenue-user.png";
import Waves from "../../public/waves.png";
import WavesUser from "../../public/waves-user.png";

const Slider = () => {
  return (
    <section className="w-full bg-[#fffbeb] h-full gap-20 p-20 grid grid-rows-1 overflow-hidden ">
      <section className="flex items-center justify-between gap-12 w-[350px] -ml-8 md:-ml-0 md:w-[89vw]">
        <h2 className="text-[#0F172A] text-[32px] md:text-[56px] font-extrabold">
          Because they love us
        </h2>
        <div className="flex flex-row gap-6">
          <div className="hidden rounded-full w-[2vw] h-[2vw] md:flex items-center border-2 border-amber-900 cursor-pointer">
            <Image src={ArrowLeft} />
          </div>

          <div className="hidden rounded-full  w-[2vw] h-[2vw] md:flex items-center border-2 border-amber-900 cursor-pointer ">
            <Image src={ArrowRight} />
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="bg-amber-200 w-[1360px] h-[420px] mt-[-50px] -ml-96 md:-ml-0 z-10 absolute"></div>
        <div className=" w-[1550px] md:w-[150vw] flex flex-row gap-6 ml-[-350px] relative z-20  ">
          <div className=" w-[384px] h-[430px] bg-white rounded-[20px] border-[1] border-[#E2E8F0] shadow-[0_0_6px_0_rgba(0,0,0,0.07), 0_10px_15px_-3px_rgba(0,0,0,0.1)] ">
            <div className=" w-full h-full relative grid grid-rows-3">
              <div className=" flex flex-row items-center ml-10 gap-2 ">
                <Image src={Kontrastr} />
                <h2 className="font-bold text-[#475569] text-2xl leading-6 ">
                  kontrastr
                </h2>
              </div>
              <div className="paragraf px-9 flex items-center">
                <p className="font-normal leading-5 md:leading-9 text-base md:text-2xl text-black ">
                  Amet morbi enim sodales quis dui, in habitant pharetra. Risus
                  id fringilla sed adipiscing volutpat sit varius turpis. Sed
                  pretium se.
                </p>
              </div>
              <div className="bottomsectiobn flex flex-row items-center gap-2 px-10 mt-10 ">
                <Image src={KontrastrUser} />
                <div className="rightsection flex flex-col text-start px-2 ">
                  <h2 className="font-normal text-[18px] text-black leading-7 ">
                    Ralph Edwards
                  </h2>
                  <h2 className="font-normal text-base leading-5 text-[#475569]">
                    Product Designer
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[384px] h-[430px] bg-white rounded-[20px] border-[1] border-[#E2E8F0] shadow-[0_0_6px_0_rgba(0,0,0,0.07), 0_10px_15px_-3px_rgba(0,0,0,0.1)] ">
            <div className=" w-full h-full relative grid grid-rows-3">
              <div className=" flex flex-row items-center ml-10 gap-2 ">
                <Image src={Zoomer} />
                <h2 className="font-bold text-[#475569] text-2xl leading-6 ">
                  Zoomer
                </h2>
              </div>
              <div className="paragraf px-9 flex items-center">
                <p className="font-normal leading-7 md:leading-9 text-2xl text-black ">
                  Non risus viverra enim, quis. Eget vitae arcu vivamus sit
                  tellus, viverra turpis lorem. Varius a turpis urna id
                  porttitor.
                </p>
              </div>
              <div className="bottomsectiobn flex flex-row items-center gap-2 px-10 mt-10 ">
                <Image src={ZoomerUser} />
                <div className="rightsection flex flex-col text-start px-2 ">
                  <h2 className="font-normal text-[18px] text-black leading-7 ">
                    Hellen Jummy
                  </h2>
                  <h2 className="font-normal text-base leading-5 text-[#475569]">
                    Team Lead
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[384px] h-[430px] bg-white rounded-[20px] border-[1] border-[#E2E8F0] shadow-[0_0_6px_0_rgba(0,0,0,0.07), 0_10px_15px_-3px_rgba(0,0,0,0.1)] ">
            <div className=" w-full h-full relative grid grid-rows-3">
              <div className=" flex flex-row items-center ml-10 gap-2 ">
                <Image src={Shells} />
                <h2 className="font-bold text-[#475569] text-2xl leading-6 ">
                  SHELLS
                </h2>
              </div>
              <div className="paragraf px-9 flex items-center">
                <p className="font-normal leading-7 md:leading-9 text-2xl text-black ">
                  Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis
                  amet enim. Sit purus venenatis velit semper lectus sed ornare
                  quam nulla.
                </p>
              </div>
              <div className="bottomsectiobn flex flex-row items-center gap-2 px-10 mt-10 ">
                <Image src={ShellsUser} />
                <div className="rightsection flex flex-col text-start px-2 ">
                  <h2 className="font-normal text-[18px] text-black leading-7 ">
                    Hellena John
                  </h2>
                  <h2 className="font-normal text-base leading-5 text-[#475569]">
                    Co-founder
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[384px] h-[430px] bg-white rounded-[20px] border-[1] border-[#E2E8F0] shadow-[0_0_6px_0_rgba(0,0,0,0.07), 0_10px_15px_-3px_rgba(0,0,0,0.1)] ">
            <div className=" w-full h-full relative grid grid-rows-3">
              <div className=" flex flex-row items-center ml-10 gap-2 ">
                <Image src={Artvenue} />
                <h2 className="font-bold text-[#475569] text-2xl leading-6 ">
                  ArtVenue
                </h2>
              </div>
              <div className="paragraf px-9 flex items-center">
                <p className="font-normal leading-9 text-2xl text-black ">
                  A eget sed posuere dui risus habitasse mauris. Venenatis
                  aliquet id ultrices a lacus. Pretium vehicula pretium posuere
                  justo sed.
                </p>
              </div>
              <div className="bottomsectiobn flex flex-row items-center gap-2 px-10 mt-10 ">
                <Image src={ArtvenueUser} />
                <div className="rightsection flex flex-col text-start px-2 ">
                  <h2 className="font-normal text-[18px] text-black leading-7 ">
                    David Oshodi
                  </h2>
                  <h2 className="font-normal text-base leading-5 text-[#475569]">
                    Manager
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[384px] h-[430px] bg-white rounded-[20px] border-[1] border-[#E2E8F0] shadow-[0_0_6px_0_rgba(0,0,0,0.07), 0_10px_15px_-3px_rgba(0,0,0,0.1)] ">
            <div className=" w-full h-full relative grid grid-rows-3">
              <div className=" flex flex-row items-center ml-10 gap-2 ">
                <Image src={Waves} />
                <h2 className="font-bold text-[#475569] text-2xl leading-6 ">
                  Waves
                </h2>
              </div>
              <div className="paragraf px-9 flex items-center">
                <p className="font-normal leading-9 text-2xl text-black ">
                  Magna egestas aliquet ut integer non. Sed diam enim nibh sit.
                  Aliquam laoreet aenean metus nibh eu scelerisque.
                </p>
              </div>
              <div className="bottomsectiobn flex flex-row items-center gap-2 px-10 mt-10 ">
                <Image src={WavesUser} />
                <div className="rightsection flex flex-col text-start px-2 ">
                  <h2 className="font-normal text-[18px] text-black leading-7 ">
                    Charolette Hanlin
                  </h2>
                  <h2 className="font-normal text-base leading-5 text-[#475569]">
                    CEO
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Slider;
