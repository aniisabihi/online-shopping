import ProductCard from "../list_view/ProductCard";
import ErrorBoundary from "../error_handling/ErrorBoundary";
import data from "./../../store/reducers/Reducers";

const ProductData = () => {
  return (
    <div className="box">
      {data &&
        data.items?.map((item) => (
          <ErrorBoundary>
            <ProductCard key={item.id} product={item} />
          </ErrorBoundary>
        ))}
    </div>
  );
};

export default ProductData;
