import React from "react";

const Hero = () => {
  return (
    <section className="relative flex-1 w-full overflow-hidden">
      
      {/* Background Video */}
      <video
        src="Logo_vid.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
};

export default Hero;