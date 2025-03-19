import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="about-us px-6 py-20 ">
      <div className="app-width flex flex-col md:flex-row min-h-screen items-center gap-6 md:justify-between">
        <div className="md:flex-1">
          <div className="max-w-[522px]">
            <div className="font-bold text-3xl md:text-5xl">About Us</div>
            <div className="mt-4">
              At EmPAYment AI, we’re on a mission to help SMEs thrive by
              providing smart, tailored financing solutions. With advanced AI,
              we bridge cash flow gaps—ensuring your business never slows down.
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/png/about-us.png"
            alt="about-us"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
