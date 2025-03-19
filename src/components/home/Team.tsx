import Image from "next/image";
import React from "react";

interface IProps {
  item: {
    name: string;
    designation: string;
    image: string;
  };
}
const TeamCard = ({ item }: IProps) => (
  <div className="border border-[#FCFCFD] p-4 rounded-[16px] text-white">
    <Image
      src={item.image}
      alt="team"
      width={364}
      height={364}
      className="w-full hover:scale-105 transition-all duration-300 cursor-pointer"
    />
    <div className="mt-4">{item.name}</div>
    <div className="">{item.designation}</div>
  </div>
);
const Team = () => {
  const teamData = [
    {
      name: "Mubby Robyn",
      designation: "Co-Founder | Product Innovation",
      image: "/png/muby.png",
    },
    {
      name: "Damilola Lawal",
      designation: "Co-Founder | Finance & Strategy",
      image: "/png/dami.png",
    },
    {
      name: "David Odefila",
      designation: "Chief Operations Officer",
      image: "/png/david.png",
    },
  ];
  return (
    <section className="team px-6 pt-10 pb-32 ">
      <div className="min-h-screen app-width">
        <div className="max-w-[522px] mx-auto text-center">
          <div className="font-bold text-3xl md:text-5xl">Meet The Team</div>
          <div className="mt-4">
            Behind EmPAYment AI is a team of innovators, financial experts, and
            tech enthusiasts dedicated to helping businesses unlock their full
            potential.
          </div>
        </div>
        <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {teamData.map((item, index) => (
            <TeamCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
