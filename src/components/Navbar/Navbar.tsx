"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavProps {
  theme?: string;
}

const Navbar = ({ theme = "dark" }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const handleMobileButton = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    gsap.from(buttonRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "back.out(1.7)",
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: "-100%", y: "-100%", opacity: 0 },
        { x: "0%", y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
      );

      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    } else {
      gsap.to(menuItemsRef.current, {
        opacity: 0,
        x: -50,
        stagger: 0.2,
        ease: "power3.in",
        onComplete: () => {
          gsap.to(menuRef.current, {
            x: "-100%",
            y: "-100%",
            opacity: 0,
            duration: 0.2,
            ease: "power3.in",
          });
        },
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${`${
        scrolled && "bg-[#ceecff]"
      }`} fixed left-0 w-full top-0 z-30`}
    >
      <nav className="app-width bg-transparent w-full py-6 flex justify-between items-center relative">
        <Link
          href="/"
          className="transition-all duration-300 hover:scale-105 cursor-pointer "
        >
          <Image
            src="/svg/logo.svg"
            height={24}
            width={200}
            alt="cycler studios"
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex border rounded-xl bg-[#FCFCFD66] border-[#0C111D] py-2 px-3 gap-4 font-semibold text-dark`}
        >
          <Link
            href="/"
            className={`transition-all duration-100 hover:scale-95 rounded-lg hover:border hover:border-[#0C111D] p-2 ${
              pathname === "/" && "border border-[#0C111D] "
            }`}
          >
            Features
          </Link>
          <Link
            href="/about"
            className={`transition-all duration-100 rounded-lg hover:scale-95 hover:border hover:border-[#0C111D] p-2 ${
              pathname === "/about" && "border border-[#0C111D]"
            }`}
          >
            About
          </Link>
          <Link
            href="/resources"
            className={`transition-all duration-100 rounded-lg hover:scale-95 hover:border hover:border-[#0C111D] p-2 ${
              pathname === "/resources" && "border border-[#0C111D]"
            }`}
          >
            Resources
          </Link>
          <Link
            href="/join-the-waitlist"
            className={`transition-all duration-100 rounded-lg hover:scale-95 hover:border hover:border-[#0C111D] p-2 ${
              pathname === "/blog" && "border border-[#0C111D] p-2"
            }`}
          >
            Join The Waitlist
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-[#475467] border border-[#475467] rounded-lg p-2 hover:scale-105 transition-all duration-300`}
          onClick={handleMobileButton}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          ref={menuRef}
          className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-blue-100 to-white justify-between flex flex-col items-start p-6 transform -translate-x-full -translate-y-full opacity-0 z-50"
        >
          <div className="w-full">
            <div className="w-full flex justify-between gap-10 mt-4">
              <Image
                src="/svg/logo.svg"
                height={24}
                width={200}
                alt="cycler studios"
              />
              {/* Close Button */}
              <button
                className="self-end text-black border border-[#475467] rounded-lg p-2"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col items-center mt-10 space-y-6 text-black font-semibold text-xl w-full">
              {["Features", "About", "Resources", "Join The Waitlist"].map(
                (item, index) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="border-b border-black pb-2 w-full text-center"
                    ref={(el: HTMLAnchorElement | null) => {
                      if (el) menuItemsRef.current[index] = el;
                    }}
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
