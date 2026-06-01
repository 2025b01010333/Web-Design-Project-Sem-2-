import { useState, useEffect } from "react";

function HeroSlider() {
  const images = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1920&auto=format&fit=crop",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">

      <img
        src={images[current]}
        alt="Hero Banner"
        className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px] object-cover"
      />

      {/* Amazon-style fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#eaeded]"></div>

    </div>
  );
}

export default HeroSlider;