import React from "react";
import { shallow } from "enzyme";
import ProductToCart from "./ProductToCart";
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../../store/reducers/Reducers";
import { Provider } from "react-redux";

const ProductToCartComponent = <ProductToCart />;
const store = configureStore({ reducer: reducers });

let productToCart = shallow(
  <Provider store={store}>{ProductToCartComponent}</Provider>
);

/* RENDER COMPONENT */
describe("Render ProductToCart", () => {
  it("should render the ProductToCart Component accordingly", () => {
    expect(productToCart).toMatchSnapshot();
  });
});
