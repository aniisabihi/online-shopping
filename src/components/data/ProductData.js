import ProductCard from "../list_view/ProductCard";
import ProductDetail from "../detail_view/ProductDetail";
import ErrorBoundary from "../ErrorBoundary";

const ProductData = ({ product, isProductChosen }) => {
  if (isProductChosen) {
    const productID = 1;
    const chosenProduct = product.items?.find((item) => item.id === productID);

    if (!chosenProduct) {
      return <div> Product Not Found</div>;
    }

    return (
      <div className="detail-item">
        {chosenProduct && (
          <ErrorBoundary>
            <ProductDetail key={chosenProduct.id} state={{ chosenProduct }} />
          </ErrorBoundary>
        )}
      </div>
    );
  }

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
