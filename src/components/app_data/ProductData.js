import ProductCard from "../list_view/ProductCard";
import ErrorBoundary from "../error_handling/ErrorBoundary";

const ProductData = ({ product }) => {
  return (
    <div className="box">
      {product &&
        product.items?.map((item) => (
          <ErrorBoundary>
            <ProductCard key={item.id} product={item} />
          </ErrorBoundary>
        ))}
    </div>
  );
};

export default ProductData;
