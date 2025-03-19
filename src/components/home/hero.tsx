"use client";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import Aos from "aos";

export default function HeroSection() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section className="home-banner py-16 px-6 md:px-12">
      <Navbar />
      <div className="app-width mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section - Text */}
        <div className="flex flex-col items-center md:items-start">
          <div
            data-aos="fade-down"
            className="inline-flex py-2 px-4 items-center gap-2 bg-[#B2DDFF] rounded-full"
          >
            <Image src="/svg/rocket.svg" height={24} width={24} alt="rocket" />
            <span className="text-sm font-semibold text-blue-600 uppercase">
              Take a Bold Step To
            </span>
          </div>
          <h1
            data-aos="zoom-in"
            className="mt-2 text-4xl md:text-5xl font-bold text-gray-900"
          >
            Accelerate your <br /> Business Growth
          </h1>
          <div data-aos="fade-up">
            <p className="mt-4 text-gray-600 text-lg">
              We provide financing solutions to help your business thrive. No
              more cash flow worries.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white text-lg font-semibold rounded-lg hover:scale-95 transition-all duration-300">
              Join The Waitlist
            </button>
          </div>
        </div>

        {/* Right Section - Images & Stats */}
        <div data-aos="fade-left">
          <Image
            src="/png/home-banner.png"
            height={504}
            width={590}
            alt="Accelerate your Businness Growth"
          />
        </div>
      </div>
    </section>
  );
}
