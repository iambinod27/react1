import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <div className="flex flex-col p-6 space-y-4 sm:p-10 dark:bg-gray-100 dark:text-gray-900">
      <h2 className="text-2xl font-semibold uppercase">Your cart (0)</h2>
      <ul className="flex flex-col divide-y divide-gray-700">
        <CartItem />
        <CartItem />
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:
          <span className="font-semibold">357 €</span>
        </p>
        <p className="text-sm dark:text-gray-700">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <Link to="/">
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:border-green-600"
          >
            Back
            <span className="sr-only sm:not-sr-only"> to shop</span>
          </button>
        </Link>
        <button
          type="button"
          className="px-6 py-2 border rounded-md dark:bg-green-600 dark:text-gray-200 dark:border-green-600"
        >
          <span className="sr-only sm:not-sr-only capitalize">
            Continue to{" "}
          </span>
          Checkout
        </button>
      </div>
    </div>
  );
};
export default Cart;
