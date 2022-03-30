import React from "react";
import { shallow } from "enzyme";
import ProductOptions from "./ProductOptions";

const ProductOptionsComponent = <ProductOptions />;

let productOptions = shallow(ProductOptionsComponent);

/* RENDER COMPONENT */
describe("Render ProductOptions", () => {
  it("should render the ProductOptions Component accordingly", () => {
    expect(productOptions).toMatchSnapshot();
  });
});
