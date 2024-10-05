import ContactUs from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import IndustriesServed from "../components/Industry";
import Product from "../components/Product";
import SustainabilitySection from "../components/Sustainability";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 grid grid-flow-row gap-4">
      <Header />
      <Hero />
      <Product />
      <SustainabilitySection />
      <IndustriesServed />
      <ContactUs />
      <Footer />
    </div>
  );
}
