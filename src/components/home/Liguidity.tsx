"use client"
import Aos from "aos";
import Image from "next/image";
import React, { useEffect } from "react";

const Liguidity = () => {
  useEffect(() => {
    Aos.init({
      // duration: 1000
    })
  },[])
  return (
    <section className="liguidity pt-20 px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center max-w-[772px] mx-auto">
          <div className="font-bold text-3xl md:text-5xl">
            Unlock Instant Liquidity
          </div>
          <div className="mt-4">
            Get fast, AI-powered financing tailored to your business needs—no
            delays, no stress, just seamless cash flow when you need it most.
          </div>
        </div>

        <div data-aos="fade-right" className="border bg-1 border-[#0C111D] mt-10 rounded-[64px] sm:min-h-[416px] p-6  shadow-md flex flex-col sm:flex-row items-center space-x-4">
          <div className="sm:w-[60%]">
            <h3 className="font-bold text-[32px] lg:text-[40px]">
              AI-Driven Risk & Credit Assessment
            </h3>
            <div className="text-[#475467] max-w-[522px] leading-[190%]">
              Alternative data like sales patterns and customer payment behavior
              are evaluated to create an accurate, dynamic risk profile for each
              SME.
            </div>
          </div>
          <div className="flex-1 w-full flex justify-end sm:justify-start">
            <Image
              src="/png/slate.png"
              alt="AI-Driven Risk & Credit Assessment"
              width={274}
              height={362}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
          <div data-aos="fade-up" className="border bg-2 border-[#0C111D] rounded-[64px] overflow-hidden pt-6 px-6  shadow-md">
            <h3 className="font-bold text-[32px] lg:text-[40px]">
              Real-Time Invoice Verification
            </h3>
            <div className="text-[#475467] max-w-[522px] leading-[190%]">
              EmpaymentAI’s AI models conduct real-time invoice verification
              through OCR and NLP, ensuring invoice authenticity while detecting
              potential fraudulent activity
            </div>
            <div className="flex-1 w-full flex justify-end sm:justify-start">
              <Image
                src="/png/lens.png"
                alt="Real-Time Invoice Verification"
                width={274}
                height={308}
              />
            </div>
          </div>

          <div data-aos="fade-down" className="border bg-3 border-[#0C111D] rounded-[64px] p-6 ">
            <h3 className="font-bold text-[32px] lg:text-[40px]">
              Flexible <br /> Financing
            </h3>
            <div className="text-[#475467] max-w-[522px] leading-[190%]">
              With adaptive financing terms, SMEs are offered rates that evolve
              in response to their performance
            </div>
            <div className="flex-1 w-full flex justify-end sm:justify-center">
              <Image
                src="/png/spiral.png"
                alt="Flexible Financing"
                width={274}
                height={308}
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="border bg-1 border-[#0C111D] mt-10 rounded-[64px] sm:min-h-[416px] p-6  shadow-md flex flex-col sm:flex-row items-center space-x-4">
          <div className="sm:w-[60%]">
            <h3 className="font-bold text-[32px] lg:text-[40px]">
              Data Integration for Financial Insights
            </h3>
            <div className="text-[#475467] max-w-[522px] leading-[190%]">
              EmpaymentAI seamlessly integrates with popular ERP and accounting
              systems, providing real-time financial data synchronization.
            </div>
          </div>
          <div className="flex-1 w-full flex justify-end sm:justify-start">
            <Image
              src="/png/donut.png"
              alt="AI-Driven Risk & Credit Assessment"
              width={274}
              height={362}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Liguidity;
