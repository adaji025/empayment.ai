import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-6">
      <div className="border app-width   border-[#FCFCFD] p-4 rounded-[16px] text-white">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center min-h-[300px] px-3 md:px-20">
          <div className="flex h-full items-center">
            <Image
              src="/svg/logo-white.svg"
              height={24}
              width={200}
              alt="cycler studios"
            />
          </div>
          <div className="grid gap-4">
            <div className="text-[#FCFCFD]">About Us</div>
            <div className="text-[#FCFCFD]">Features </div>
            <div className="text-[#FCFCFD]">Resources</div>
          </div>
          <div className="">
            <div className="text-[#FCFCFD]">Connect With Us</div>
            <div className="text-[#FCFCFD] text-sm">info@empayment.ai</div>
            <div className="flex items-center gap-6 mt-4">
              <Image
                height={24}
                width={24}
                className="cursor-pointer"
                src="/svg/linkedIn.svg"
                alt="linkedin"
              />
              <Image
                height={24}
                width={24}
                className="cursor-pointer"
                src="/svg/ig.svg"
                alt="instagram"
              />
              <Image
                height={24}
                width={24}
                className="cursor-pointer"
                src="/svg/x.svg"
                alt="twitter"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-0 text-center pb-10">
          {" "}
          &copy; {new Date().getFullYear()} Empayment AI. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
