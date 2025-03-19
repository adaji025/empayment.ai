import Image from "next/image";
import React from "react";

const Waitlist = () => {
  return (
    <section id="join-wait-list" className="wait-list pb-10 text-white min-h-screen relative">
      <Image
        src="/svg/waitlist-l.svg"
        height={316}
        width={290}
        alt="waitlist"
        className="absolute left-0 top-1/3"
      />
      <Image
        src="/svg/waitlist-l.svg"
        height={316}
        width={290}
        alt="waitlist"
        className="absolute right-0 rotate-180 top-1/3"
      />
      <div className="app-width min-h-screen flex flex-col justify-center items-center">
        <div className="text-center mb-10">
          <h2 className="font-bold text-3xl md:text-5xl">Join the Waitlist</h2>
          <p className="mt-3 text-gray-300">
            And be a part of the journey today
          </p>
        </div>
        <div className="border border-[#FCFCFD] p-6 rounded-[16px] text-white max-w-[388px] w-full min-h-[368px]">
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-xl border border-[#FCFCFD] bg-transparent outline-none"
            />
          </div>
          <div className="grid gap-1 mt-4">
            <label htmlFor="name" className="text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-xl border border-[#FCFCFD] bg-transparent outline-none"
            />
          </div>
          <div className="grid gap-1 mt-4">
            <label htmlFor="name" className="text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-xl border border-[#FCFCFD] bg-transparent outline-none"
            />
          </div>
          <button className="mt-6 px-6 py-3 w-full bg-white text-[#0C111D] font-semibold rounded-lg hover:scale-95 transition-all duration-300">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
