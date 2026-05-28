import { FaShoppingCart, FaSearch } from "react-icons/fa";

function Navbar({
  cartCount,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <nav className="bg-[#131921] text-white px-4 py-3 flex items-center justify-between gap-4 flex-wrap sticky top-0 z-50">

      {/* Logo */}
      <h1 className="text-lg md:text-2xl font-bold cursor-pointer">
        amazon
      </h1>

      {/* Search Bar */}
      <div className="flex flex-1 max-w-3xl w-full md:w-auto order-3 md:order-none">

        <input
          type="text"
          placeholder="Search Amazon"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 bg-white text-black placeholder-gray-500 outline-none rounded-l-md text-sm"
        />

        <button className="bg-yellow-400 hover:bg-yellow-500 px-4 rounded-r-md text-black border-l">
          <FaSearch />
        </button>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 md:gap-6 text-sm">

        <div className="hidden md:block cursor-pointer">
          <p>Hello, Sign in</p>
          <p className="font-bold">Account & Lists</p>
        </div>

        <div className="hidden md:block cursor-pointer">
          <p>Returns</p>
          <p className="font-bold">& Orders</p>
        </div>

        <div className="flex items-center gap-2 cursor-pointer font-bold">
          <FaShoppingCart size={22} />
          <span>Cart ({cartCount})</span>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;