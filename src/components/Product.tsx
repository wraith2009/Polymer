"use client";

import useOnScreen from "../app/hooks/useOnScreen";
import { useRef } from "react";

const Product = () => {
  const ref = useRef<HTMLDivElement>(null); // Type the ref
  const isVisible = useOnScreen(ref, "-100px"); // Pass the ref to the hook

  const products = [
    {
      name: "Polyethylene (PE)",
      description:
        "High-quality, durable polyethylene for packaging and industrial use.",
      image: "/polyethylene.avif",
    },
    {
      name: "Polypropylene (PP)",
      description:
        "Versatile and lightweight, ideal for consumer goods and automotive parts.",
      image: "/polypropylene.webp",
    },
    {
      name: "Polyvinyl Chloride (PVC)",
      description:
        "Strong and reliable PVC for construction and plumbing applications.",
      image: "/pvc.jpg",
    },
    {
      name: "Polyethylene Terephthalate (PET)",
      description:
        "Food-safe and recyclable polymer for beverage bottles and containers.",
      image: "/pet.jpg",
    },
  ];

  return (
    <section
      id="products"
      ref={ref} // Apply ref to section or div
      className={`bg-gray-100 py-12 transition-opacity duration-1000 ease-in-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg transition-transform transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <a
                href="#"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
