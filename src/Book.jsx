const Book = ({ book }) => {
  const { id, name, author, price, available } = book;

  return (
    <div className="bg-blue-50 border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition duration-300 h-full flex flex-col justify-between">
      
      {/* Top Info */}
      <div>
        <p className="text-sm text-gray-500">Book No: {id}</p>

        <h1 className="text-xl font-bold text-center my-2">
          {name}
        </h1>

        <p className="text-gray-700">
          <span className="font-semibold">Author:</span> {author}
        </p>

        <p className="text-gray-700">
          <span className="font-semibold">Price:</span> ${price}
        </p>
      </div>

      {/* Availability + Button */}
      <div className="mt-4">
        {available ? (
          <div className="flex flex-col gap-3">
            <p>
              Available:{" "}
              <span className="text-green-600 font-bold">Yes</span>
            </p>

            <button
              onClick={() =>
                alert(`The book "${name}" is added to cart`)
              }
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition"
            >
              Add to Cart
            </button>
          </div>
        ) : (
          <p>
            Available:{" "}
            <span className="text-red-500 font-bold">No</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Book;