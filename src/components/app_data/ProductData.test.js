import React from "react";
import { shallow } from "enzyme";
import ProductData from "./ProductData";

const ProductDataComponent = <ProductData />;

let productData = shallow(ProductDataComponent);

/* RENDER COMPONENT */
describe("Render ProductData", () => {
  it("should render the ProductData Component accordingly", () => {
    expect(productData).toMatchSnapshot();
  });
});
