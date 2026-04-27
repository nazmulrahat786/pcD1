const Product = ({ product }) => {
  const {  title, category, price, rating, stock } = product;

  return (
    <div className="border-b-green-300 shadow-green-400 rounded-2xl w-75 shadow-md hover:shadow-xl transition duration-300 p-5 border border-gray-100">
      
      {/* Title */}
      <h2 className="text-lg text-center  font-bold text-gray-800 mb-2">
        {title}
      </h2>

      {/* Category */}
      <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mb-3">
        {category}
      </span>

      {/* Price */}
      <p className="text-2xl font-bold text-green-600 mb-2">
        ${price}
      </p>

      {/* Rating & Stock */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>⭐ {rating}</span>
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            stock > 0
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </div>

    </div>
  );
};

export default Product;