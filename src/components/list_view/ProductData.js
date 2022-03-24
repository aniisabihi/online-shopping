import ProductCard from "./ProductCard";
import ProductDetail from "../details_view/ProductDetail";

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
          <ProductDetail key={chosenProduct.id} product={chosenProduct} />
        )}
      </div>
    );
  }
  return (
    <div className="box">
      {product &&
        product.items?.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
    </div>
  );
};
export default ProductData;
