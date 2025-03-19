"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus molestie tellus gravida, sed porta leo aliquet.",
      image: "/png/adaji.png",
    },
    {
      name: "Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus molestie tellus gravida, sed porta leo aliquet.",
      image: "/png/adaji.png",
    },
    {
      name: "Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus molestie tellus gravida, sed porta leo aliquet.",
      image: "/png/adaji.png",
    },
    {
      name: "Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus molestie tellus gravida, sed porta leo aliquet.",
      image: "/png/adaji.png",
    },
    {
      name: "Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus molestie tellus gravida, sed porta leo aliquet.",
      image: "/png/adaji.png",
    },
    {
      name: "Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus molestie tellus gravida, sed porta leo aliquet.",
      image: "/png/adaji.png",
    },
    {
      name: "Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus molestie tellus gravida, sed porta leo aliquet.",
      image: "/png/adaji.png",
    },
    {
      name: "Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus molestie tellus gravida, sed porta leo aliquet.",
      image: "/png/adaji.png",
    },
    {
      name: "Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus molestie tellus gravida, sed porta leo aliquet.",
      image: "/png/adaji.png",
    },
    {
      name: "Name",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus molestie tellus gravida, sed porta leo aliquet.",
      image: "/png/adaji.png",
    },
  ];

  const upperCarouselRef = useRef<HTMLDivElement>(null);
  const lowerCarouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // if (hasAnimated.current) return;
    // hasAnimated.current = true;

    const upperRef = upperCarouselRef.current;
    const lowerRef = lowerCarouselRef.current;

    const animateCarousel = (ref: HTMLDivElement | null, direction: number) => {
      if (!ref) return;
      gsap.to(ref, {
        x: "-100%",
        duration: 10,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % 100}%`,
        },
      });
    };

    animateCarousel(upperRef, 1);
    animateCarousel(lowerRef, -1);

    return () => {
      if (upperRef) gsap.killTweensOf(upperRef);
      if (lowerRef) gsap.killTweensOf(lowerRef);
    };
  }, []);

  function splitArray(arr: any) {
    const middle = Math.floor(arr.length / 2); // Find the middle index
    const firstHalf = arr.slice(0, middle); // Create the first half
    const secondHalf = arr.slice(middle); // Create the second half
    return [firstHalf, secondHalf];
  }

  const [half1, half2] = splitArray(testimonials);

  return (
    <section className="testimonials py-20 px-6 text-white relative">
      <div className="h-full w-[10%] absolute left-0 top-0 blur-bg-left z-10 blur-sm"></div>
      <div className="h-full w-[10%] absolute right-0 top-0 blur-bg-right z-10 blur-xl"></div>
      <div className="relative app-width overflow-hidden">
        <div className="text-center">
          <h2 className="font-bold text-3xl md:text-5xl">
            What They Say About Us
          </h2>
          <p className="mb-10 text-gray-300">
            See how EmPAYment AI is transforming cash flow management for SMEs
            like yours.
          </p>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"> */}
        <div ref={upperCarouselRef} className="flex gap-10 overflow-hidden">
          {[...half1, ...half2].map((testimonial, index) => (
            <div
              key={index}
              className="border border-[#FCFCFD] px-6 py-3 min-w-[392px] w-full rounded-lg shadow-lg flex items-center gap-4"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="object-cover"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          ref={lowerCarouselRef}
          className="flex gap-10 mt-5 overflow-hidden"
        >
          {[...half1, ...half2].map((testimonial, index) => (
            <div
              key={index}
              className="border border-[#FCFCFD] px-6 py-3 min-w-[392px] w-full rounded-lg shadow-lg flex items-center gap-4"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={60}
                height={60}
                className="object-cover"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-sm">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
