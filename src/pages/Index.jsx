import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { useEffect } from "react";
import { getProduct } from "../store/actions/products/productActions";

const Index = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  console.log(products);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
        {products.map((product) => {
          return <Card item={product} key={product.id} />;
        })}
      </div>
    </>
  );
};
export default Index;
