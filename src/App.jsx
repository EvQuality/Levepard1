import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Reel from "./components/Reel";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import FollowUs from "./components/FollowUs";
import SocialMediaLinks from "./components/SocialMediaLinks";
import ContactDetails from "./components/ContactDetails";

const App = () => {

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  return (
    <div className="w-full">
      
      {/* ===== FIRST PAGE (Navbar + Hero = 100vh) ===== */}
      <section className="h-screen flex flex-col">
        <Navbar />
        <Hero />
      </section>

      {/* ===== REST OF THE SITE ===== */}
      <Reel />
      <Services />
      <Projects />
      <Philosophy />
      <FollowUs />
      <SocialMediaLinks />
      <ContactDetails />

    </div>
  );
};

export default App;