import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="max-w-xs md:max-w-none rounded-md shadow-md bg-gray-50 text-gray-900">
      <img
        src={item.image}
        alt={item.title}
        className="object-contain object-center w-full rounded-t-md h-72"
      />
      <div className="p-6">
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-gray-900">
            {item.category}
          </span>
          <Link to={`/product/${item.id}`}>
            <h2 className="text-xl font-semibold tracking-wide line-clamp-1">
              {item.title}
            </h2>
          </Link>
        </div>
        <p className="text-2xl py-2 text-red-600 font-semibold">
          ${item.price}
        </p>
        <p className="dark:text-gray-700 line-clamp-2">{item.description}</p>

        <div className="py-4">
          <button
            type="button"
            className="px-5 py-3 font-semibold rounded dark:bg-gray-900 dark:text-gray-100 flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="w-5 h-5 object-contain"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <p>Add to Cart</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
