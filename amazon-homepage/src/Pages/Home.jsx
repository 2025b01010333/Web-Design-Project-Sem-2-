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
    setCartCount(cartCount + 1);
  };

  // Search Filter
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#eaeded] min-h-screen">

      <Navbar
        cartCount={cartCount}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <SubNavbar />

      <HeroSlider />

      {/* Categories */}
      <div className="relative md:-mt-60 z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">

        <CategorySection
          title="Electronics"
          items={[
            {
              name: "Headphones",
              image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
            },
            {
              name: "Laptop",
              image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
            },
            {
              name: "Camera",
              image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
            },
            {
              name: "Speaker",
              image: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
            },
          ]}
        />

        <CategorySection
          title="Fashion"
          items={[
            {
              name: "Shoes",
              image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            },
            {
              name: "Jacket",
              image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
            },
            {
              name: "Watch",
              image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
            },
            {
              name: "Bag",
              image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
            },
          ]}
        />

        <CategorySection
          title="Gaming"
          items={[
            {
              name: "Gaming Setup",
              image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
            },
            {
              name: "Controller",
              image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3",
            },
            {
              name: "Keyboard",
              image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
            },
            {
              name: "Monitor",
              image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
            },
          ]}
        />

        <CategorySection
          title="Home Essentials"
          items={[
            {
              name: "Chair",
              image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455",
            },
            {
              name: "Lamp",
              image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
            },
            {
              name: "Kitchen",
              image: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
            },
            {
              name: "Sofa",
              image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
            },
          ]}
        />

      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

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

          <h1 className="text-2xl font-bold col-span-full text-center">
            No Products Found
          </h1>

        )}

      </div>

      <Footer />

    </div>
  );
}

export default Home;