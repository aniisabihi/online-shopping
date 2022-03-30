import React from "react";
import { shallow } from "enzyme";
import ProductToCart from "./ProductToCart";

const ProductToCartComponent = <ProductToCart />;

let productToCart = shallow(ProductToCartComponent);

/* RENDER COMPONENT */
describe("Render ProductToCart", () => {
  it("should render the ProductToCart Component accordingly", () => {
    expect(productToCart).toMatchSnapshot();
  });
});
