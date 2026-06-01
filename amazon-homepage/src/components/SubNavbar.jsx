function SubNavbar({ setSearchTerm }) {
  return (
    <div className="bg-[#232f3e] text-white flex gap-6 px-4 py-2">
      <button onClick={() => setSearchTerm("")}>All</button>
      <button onClick={() => setSearchTerm("watch")}>Today's Deals</button>
      <button onClick={() => setSearchTerm("headphones")}>Electronics</button>
      <button onClick={() => setSearchTerm("shoes")}>Fashion</button>
      <button onClick={() => setSearchTerm("smartphone")}>Mobiles</button>
    </div>
  );
}

export default SubNavbar;