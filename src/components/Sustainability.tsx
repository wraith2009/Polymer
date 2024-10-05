import Image from "next/image";

const SustainabilitySection = () => {
  return (
    <section className="bg-green-50 py-12">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-8">
          Our Commitment to the Environment
        </h2>

        {/* Imagery */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-12">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/eco-friendly-polymer.avif"
              alt="Eco-friendly Polymers"
              width={400} // Reduce the width
              height={150} // Reduce the height
              className="rounded-lg shadow-lg"
              style={{ width: "100%", height: "auto" }} // Keeps it responsive
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <p className="text-base md:text-lg text-green-700">
              Our innovative polymers are designed with sustainability in mind,
              using eco-friendly and recyclable materials to reduce
              environmental impact. We are dedicated to minimizing our carbon
              footprint and contributing to a greener future.
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Recycled Materials */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/Recycled.jpg"
                alt="Recycled Materials"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Recycled Materials
            </h3>
            <p className="text-green-600">
              Our products are made using high percentages of recycled content.
            </p>
          </div>

          {/* Low Carbon Footprint */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/carbon-footprint.png"
                alt="Low Carbon Footprint"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Low Carbon Footprint
            </h3>
            <p className="text-green-600">
              We focus on reducing emissions and energy consumption throughout
              production.
            </p>
          </div>

          {/* Eco-Friendly Manufacturing */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/eco-friendly-manufacturing.jpg"
                alt="Eco-Friendly Manufacturing"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Eco-Friendly Manufacturing
            </h3>
            <p className="text-green-600">
              Our manufacturing processes are designed to be energy-efficient
              and less wasteful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
