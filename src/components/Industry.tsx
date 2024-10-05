"use client";
import Image from "next/image";
import { FC, useRef } from "react";
import useOnScreen from "../app/hooks/useOnScreen";

interface Industry {
  name: string;
  description: string;
  imageSrc: string;
}

const industries: Industry[] = [
  {
    name: "Automotive",
    description:
      "Our polymers enhance durability, safety, and design for automotive parts.",
    imageSrc: "/automative.jpeg",
  },
  {
    name: "Packaging",
    description:
      "We provide sustainable and flexible polymers for packaging solutions.",
    imageSrc: "/packaging.jpg",
  },
  {
    name: "Construction Materials",
    description:
      "Our polymers contribute to stronger, more durable construction materials.",
    imageSrc: "/construction.jpeg",
  },
];

const IndustriesServed: FC = () => {
  const ref = useRef<HTMLDivElement>(null); // Reference to the section
  const isVisible = useOnScreen(ref, "-200px"); // Pass the ref to the useOnScreen hook

  return (
    <div
      ref={ref}
      className={`container mx-auto py-12 px-4 transition-opacity duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Industries We Serve
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {industries.map((industry) => (
          <div
            key={industry.name}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-64 w-full">
              <Image
                src={industry.imageSrc}
                alt={industry.name}
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {industry.name}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesServed;
