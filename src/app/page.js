import Hero from "@/components/Home/Sections/Hero";
import AboutUs from "@/components/Home/Sections/AboutUs";
import Services from "@/components/Home/Sections/Services";
import { Contact } from "@/components/Home/Sections/Contact";

export default function Home() {
  return (
    <div className="bg-white w-screen">
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
    </div>
  );
}
