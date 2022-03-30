import React from "react";
import { shallow } from "enzyme";
import ProductCard from "./ProductCard";

const ProductCardComponent = <ProductCard />;

let productCard = shallow(ProductCardComponent);

/* RENDER COMPONENT */
describe("Render ProductCard", () => {
  it("should render the ProductCard Component accordingly", () => {
    expect(productCard).toMatchSnapshot();
  });
});
