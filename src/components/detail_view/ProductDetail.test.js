import React from "react";
import { shallow } from "enzyme";
import ProductDetail from "./ProductDetail";

const ProductDetailComponent = <ProductDetail />;

let productDetail = shallow(ProductDetailComponent);

/* RENDER COMPONENT */
describe("Render ProductDetail", () => {
  it("should render the ProductDetail Component accordingly", () => {
    expect(productDetail).toMatchSnapshot();
  });
});
