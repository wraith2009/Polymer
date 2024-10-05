"use client";

const Hero = () => {
  return (
    <section className="bg-gray-100 relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/Herobackground.avif')` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4">
        {/* Heading with delay */}
        <h1
          className="text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }} // Delay for the heading
        >
          Innovating the Future of Polymers
        </h1>

        {/* Paragraph with delay */}
        <p
          className="text-lg md:text-xl mb-6 max-w-2xl mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }} // Delay for the paragraph
        >
          High-quality, sustainable plastic polymers for industries worldwide.
          We shape the materials that shape the world.
        </p>

        {/* Button with delay */}
        <a
          href="#products"
          className="bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition opacity-0 animate-fade-in"
          style={{ animationDelay: "1.5s" }} // Delay for the button
        >
          Explore Our Products
        </a>
      </div>
    </section>
  );
};

export default Hero;
