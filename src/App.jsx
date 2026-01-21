import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import FollowUs from "./components/FollowUs";
import SocialMediaLinks from "./components/SocialMediaLinks";
import ContactDetails from "./components/ContactDetails";

// Pages
const Home = () => (
  <>
    {/* ===== FIRST PAGE (Navbar + Hero = 100vh) ===== */}
    <section className="h-screen flex flex-col">
      <Navbar />
      <Hero />
    </section>

    {/* ===== REST OF THE SITE ===== */}
    <Services />
    <Projects />
    <Philosophy />
    <FollowUs />
    <SocialMediaLinks />
    <ContactDetails />
  </>
);

const Blogs = () => (
  <>
    <Navbar />
    <section className="min-h-screen px-9 md:px-32 py-24">
      <h1 className="text-4xl md:text-6xl font-light mb-12">
        Blogs
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="border-b pb-6">
          <h2 className="text-2xl mb-2">How branding builds trust</h2>
          <p className="opacity-70">
            Thoughts on positioning, identity, and perception.
          </p>
        </div>

        <div className="border-b pb-6">
          <h2 className="text-2xl mb-2">Motion in modern brands</h2>
          <p className="opacity-70">
            Why motion design matters more than ever.
          </p>
        </div>
      </div>
    </section>
  </>
);

const App = () => {
  useEffect(() => {
    let scroll;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });
    })();

    return () => scroll?.destroy();
  }, []);

  return (
    <BrowserRouter>
      <div data-scroll-container className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
