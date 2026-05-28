import { FaStar } from "react-icons/fa";

function ProductCard({ image, title, price, addToCart }) {
  return (
    <div className="bg-white p-3 md:p-4 shadow hover:shadow-xl transition duration-300 cursor-pointer">

      <img
        src={image}
        alt={title}
        className="h-32 sm:h-40 md:h-52 w-full object-cover"
      />

      <h2 className="mt-4 text-sm md:text-lg font-semibold">
        {title}
      </h2>

      <div className="flex text-yellow-500 mt-2 text-sm">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      <p className="text-base md:text-xl text-green-700 font-bold mt-2">
        ₹{price}
      </p>

      <button
        onClick={addToCart}
        className="bg-yellow-400 hover:bg-yellow-500 w-full py-2 mt-4 rounded text-sm md:text-base font-semibold"
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;