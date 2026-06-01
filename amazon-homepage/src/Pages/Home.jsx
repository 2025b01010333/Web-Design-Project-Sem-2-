import { useState } from "react";

import Navbar from "../components/Navbar";
import SubNavbar from "../components/SubNavbar";
import HeroSlider from "../components/HeroSlider";
import CategorySection from "../components/CategorySection";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import products from "../data/products";

function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#eaeded] min-h-screen">
      
      {/* Navbar */}
      <Navbar
        cartCount={cartCount}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Sub Navbar */}
      <SubNavbar setSearchTerm={setSearchTerm} />
     <h1 className="text-3xl font-bold text-red-500">
  Search: {searchTerm}
</h1>
      {/* Hero Banner */}
      <HeroSlider />

      {/* Category Cards */}
      <div className="relative -mt-10 z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">

        <CategorySection
          title="Electronics"
          items={[
            {
              name: "Headphones",
              image:
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop",
            },
            {
              name: "Laptop",
              image:
                "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=500&auto=format&fit=crop",
            },
            {
              name: "Camera",
              image:
                "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=500&auto=format&fit=crop",
            },
            {
              name: "Speaker",
              image:
                "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=500&auto=format&fit=crop",
            },
          ]}
        />

        <CategorySection
          title="Fashion"
          items={[
            {
              name: "Shoes",
              image:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500&auto=format&fit=crop",
            },
            {
              name: "Jacket",
              image:
                "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500&auto=format&fit=crop",
            },
            {
              name: "Watch",
              image:
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop",
            },
            {
              name: "Bag",
              image:
                "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500&auto=format&fit=crop",
            },
          ]}
        />

        <CategorySection
          title="Gaming"
          items={[
            {
              name: "Gaming Setup",
              image:
                "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=500&auto=format&fit=crop",
            },
            {
              name: "Controller",
              image:
                "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=500&auto=format&fit=crop",
            },
            {
              name: "Keyboard",
              image:
                "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=500&auto=format&fit=crop",
            },
            {
              name: "Monitor",
              image:
                "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500&auto=format&fit=crop",
            },
          ]}
        />

        <CategorySection
          title="Home Essentials"
          items={[
            {
              name: "Chair",
              image:
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=500&auto=format&fit=crop",
            },
            {
              name: "Lamp",
              image:
                "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=500&auto=format&fit=crop",
            },
            {
              name: "Kitchen",
              image:
                "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=500&auto=format&fit=crop",
            },
            {
              name: "Sofa",
              image:
                "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=500&auto=format&fit=crop",
            },
          ]}
        />
      </div>

      {/* Products Section */}
      <div className="p-4 mt-6">
        <h2 className="text-2xl font-bold mb-4">
          {searchTerm
            ? `Search Results for "${searchTerm}"`
            : "Today's Deals"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                addToCart={addToCart}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-xl font-semibold">
              No Products Found
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;