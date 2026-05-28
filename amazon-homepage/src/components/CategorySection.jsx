function CategorySection({ title, items }) {
  return (
    <div className="bg-white p-4 shadow hover:shadow-xl transition duration-300">

      <h2 className="font-bold text-lg mb-4">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-3">

        {items.map((item, index) => (
          <div key={index}>

            <img
              src={item.image}
              alt={item.name}
              className="h-24 w-full object-cover"
            />

            <p className="text-xs mt-1">
              {item.name}
            </p>

          </div>
        ))}

      </div>

      <p className="text-blue-500 mt-4 text-sm cursor-pointer hover:underline">
        Shop now
      </p>

    </div>
  );
}

export default CategorySection;