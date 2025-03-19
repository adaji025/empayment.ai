import Image from "next/image";
import React from "react";

interface IProps {
  item: {
    name: string;
    desc: string;
    image: string;
  };
}
const ResourcesCard = ({ item }: IProps) => (
  <div className="border border-[#FCFCFD] p-4 rounded-[16px] text-white">
    <Image
      src={item.image}
      alt="team"
      width={364}
      height={364}
      className="w-full hover:scale-105 transition-all duration-300 cursor-pointer"
    />
    <div className="mt-2 text-2xl font-bold">Resources Name</div>
    <div className="mt-1 text-[#FCFCFD]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus
      molestie{" "}
    </div>
    <button className="mt-6 px-6 py-3 w-full bg-white text-[#0C111D] font-semibold rounded-lg hover:scale-95 transition-all duration-300">
      Download
    </button>
  </div>
);
const Resources = () => {
  const resourcesData = [
    {
      name: "Resources Name",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus molestie",
      image: "/png/book.png",
    },
    {
      name: "Resources Name",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus molestie",
      image: "/png/book.png",
    },
    {
      name: "Resources Name",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum metus molestie",
      image: "/png/book.png",
    },
  ];
  return (
    <section className="resources py-20 px-6">
      <div className="app-width text-white">
        <div className="text-center">
          <h2 className="font-bold text-3xl md:text-5xl">Resources</h2>
          <p className="mt-3 text-gray-300">
            Explore expert insights, guides, and tips to manage cash flow and
            grow your business with confidence.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-[#0C111D] font-semibold rounded-lg hover:scale-95 transition-all duration-300">
            More Resources
          </button>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {resourcesData.map((item, index) => (
            <ResourcesCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
