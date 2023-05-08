import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../store/actions/products/productActions";
import { removeSelectedProduct } from "../store/features/products/productSlice";
import Loading from "../components/Loading";

const Details = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { id } = params;
  const { product, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getSingleProduct(id));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, id]);

  return (
    <>
      <section>
        {isLoading ? (
          <>
            <div className="h-screen w-full flex items-center justify-center">
              <Loading />
            </div>
          </>
        ) : (
          <div className="grid md:grid-cols-2 gap-5">
            <div className="md:border-r">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="px-5 space-y-2">
              <p className="capitalize">{product.category}</p>
              <h2 className="text-3xl font-semibold">{product.title}</h2>
              <h5 className="text-3xl text-red-600 font-semibold">
                ${product.price}
              </h5>
              <p className="font-light text-gray-800">{product.description}</p>
              <div className="py-4">
                <button
                  type="button"
                  className="px-5 py-3 font-semibold rounded dark:bg-green-700 dark:text-gray-100 flex items-center gap-2"
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
        )}
      </section>

      <section className="pt-10">
        <h4 className="text-3xl font-medium">Similar Products</h4>
      </section>
    </>
  );
};
export default Details;
