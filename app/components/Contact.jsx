import React from "react";
import Check from "../../public/check.png";
import Image from "next/image";
import Desktop from "../../public/desktop.png";

const Contact = () => {
  return (
    <section className="w-full bg-[#fffbeb] h-full gap-20 md:p-20 flex justify-center items-center ">
      <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-20 p-20 bg-white rounded-[30px] shadow-[0px_20px_70px_-50px_black] ">
        <div className="flex flex-col items-center justify-center gap-6">
          <div>
            <h2 className="font-extrabold text-[32px] md:text-[56px] leading-[36px] md:leading-[60px] text-[#0F172A] ">
              Why join us
            </h2>
          </div>
          <div>
            <p className="flex flex-row font-normal gap-2 -mx-10 md:-mx-0 text-[#0F172A] ">
              <Image src={Check} />
              Est et in pharetra magna adipiscing ornare aliquam.
            </p>
            <p className="flex flex-row font-normal gap-2 -mx-10 md:-mx-0 text-[#0F172A]">
              <Image src={Check} />
              Tellus arcu sed consequat ac velit ut eu blandit.
            </p>
            <p className="flex flex-row font-normal  gap-2 -mx-10 md:-mx-0 text-[#0F172A]">
              <Image src={Check} />
              Ullamcorper ornare in et egestas dolor orci.
            </p>
          </div>
          <div className="flex ">
            <p className="px-3 py-2 text-xl font-semibold cursor-pointer text-amber-900 border-2 border-solid border-amber-900 rounded-lg ">
              Sign up now
            </p>
          </div>
        </div>
        <div className="rounded-[20px]">
          <Image src={Desktop} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
