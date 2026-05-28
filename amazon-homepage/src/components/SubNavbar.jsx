import { FaBars } from "react-icons/fa";

function SubNavbar() {

  const menuItems = [
    "Today's Deals",
    "Customer Service",
    "Registry",
    "Gift Cards",
    "Sell",
    "Electronics",
    "Fashion",
    "Mobiles",
  ];

  return (
    <div className="bg-[#232f3e] text-white px-4 py-2 flex items-center gap-3 overflow-x-auto scrollbar-hide">

      {/* All Menu */}
      <button className="flex items-center gap-2 px-3 py-1 hover:border border-white whitespace-nowrap font-semibold">

        <FaBars />

        <span>All</span>

      </button>

      {/* Menu Buttons */}
      {menuItems.map((item, index) => (
        <button
          key={index}
          className="px-3 py-1 hover:border border-white whitespace-nowrap text-sm"
        >
          {item}
        </button>
      ))}

    </div>
  );
}

export default SubNavbar;