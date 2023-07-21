import React from "react";
import AppStore from "../assests/footer/appstore.png";
import GooglePlay from "../assests/footer/googleplay.png";
import Image from "next/image";
import Youtube from "../assests/footer/youtube.png";
import Facebook from "../assests/footer/facebook.png";
import Twitter from "../assests/footer/twitter.png";
import Instagram from "../assests/footer/instagram.png";
import Linkedin from "../assests/footer/linkedin.png";
import WorldIcon from "../assests/footer/world.png";

const Footer = () => {
  return (
    <section className=" w-full bg-[#0F172A] h-full   px-20 flex flex-col overflow-hidden">
      <section className="grid grid-rows-4 md:grid-rows-none md:grid-cols-4 gap-12 border-y border-[#334155] p-12 ">
        <div className="flex flex-col gap-2 py-3 items-center md:items-stretch text-white ">
          <div>
            <h1 className="font-medium text-base leading-4">Product</h1>
          </div>
          <div className=" flex flex-col  gap-4 py-4 items-center md:items-stretch font-normal text-base">
            <h2 className="font-normal text-base">Pricing</h2>
            <h2 className="font-normal text-base">Overview</h2>
            <h2 className="font-normal text-base">Browse</h2>
            <h2 className="font-normal text-base">Accessibility</h2>
            <h2 className="font-normal text-base">Five</h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-3 items-center md:items-stretch text-white ">
          <div>
            <h1 className="font-medium text-base leading-4">Solutions</h1>
          </div>
          <div className=" flex flex-col gap-4 py-4 items-center md:items-stretch font-normal text-base">
            <h2 className="font-normal text-base">Brainstorming</h2>
            <h2 className="font-normal text-base">Ideation</h2>
            <h2 className="font-normal text-base">Wireframing</h2>
            <h2 className="font-normal text-base">Research</h2>
            <h2 className="font-normal text-base">Design</h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-3 items-center md:items-stretch text-white ">
          <div>
            <h1 className="font-medium text-base leading-4">Support</h1>
          </div>
          <div className=" flex flex-col gap-4 py-4 items-center md:items-stretch font-normal text-base">
            <h2 className="font-normal text-base">Contact us</h2>
            <h2 className="font-normal text-base">Developers</h2>
            <h2 className="font-normal text-base">Documentation</h2>
            <h2 className="font-normal text-base">Integrations</h2>
            <h2 className="font-normal text-base">Reports</h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-3 items-center md:items-stretch text-white ">
          <div>
            <h1 className="font-medium text-base leading-4">Get the App</h1>
          </div>
          <div className=" flex flex-col gap-4 py-4 items-center md:items-stretch font-normal text-base">
            <Image src={AppStore} className="cursor-pointer" />
            <Image src={GooglePlay} className="cursor-pointer" />
            <h2 className="font-normal text-base">Follow Us</h2>
            <div className="flex flex-row gap-4">
              <Image src={Youtube} className="cursor-pointer" />
              <Image src={Facebook} className="cursor-pointer" />
              <Image src={Twitter} className="cursor-pointer" />
              <Image src={Instagram} className="cursor-pointer" />
              <Image src={Linkedin} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-7 md:gap-0  md:flex-row justify-between items-center py-10">
        <div className="max-w-[350px] w-[250px] ">
          <h2 className="text-white ">Collers @ 2023. All rights reserved.</h2>
        </div>
        <div className="flex flex-row text-white gap-8">
          <h2 className="cursor-pointer">Terms</h2>
          <h2 className="cursor-pointer">Privacy</h2>
          <h2 className="cursor-pointer">Contact</h2>
          <div className="flex flex-row gap-2 cursor-pointer">
            <Image src={WorldIcon} className="h-6" />
            <h2>EN</h2>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
