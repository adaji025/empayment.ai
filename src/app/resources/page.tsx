import Footer from "@/components/home/Footer";
import Waitlist from "@/components/home/Waitlist";
import Navbar from "@/components/Navbar/Navbar";
import ResourcesComp from "@/components/resources/ResourcesComp";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="resources-page min-h-screen">
        <Navbar />
        <ResourcesComp />
      </div>
      <Waitlist />
      <Footer />
    </div>
  );
};

export default page;
