import React from "react";
import { shallow } from "enzyme";
import Cart from "./Cart";

const CartComponent = <Cart />;

let cart = shallow(CartComponent);

/* RENDER COMPONENT */
describe("Render Cart", () => {
  it("should render the Cart Component accordingly", () => {
    expect(cart).toMatchSnapshot();
  });
});
