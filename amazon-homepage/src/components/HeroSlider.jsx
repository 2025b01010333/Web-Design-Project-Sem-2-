function HeroSlider() {
  return (
    <div className="relative">

      <img
        src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1600&auto=format&fit=crop"
        alt="banner"
        className="w-full h-[220px] sm:h-[300px] md:h-[500px] object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#eaeded]"></div>

    </div>
  );
}

export default HeroSlider;