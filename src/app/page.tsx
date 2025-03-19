import AboutUs from "@/components/home/AboutUs";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/hero";
import Liguidity from "@/components/home/Liguidity";
import Resources from "@/components/home/Resources";
import Team from "@/components/home/Team";
import Testimonials from "@/components/home/Testimonials";
import Waitlist from "@/components/home/Waitlist";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Liguidity />
      <AboutUs />
      <Team />
      <Testimonials />
      <Resources />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Home;
