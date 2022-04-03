import React from "react";
import { shallow } from "enzyme";
import Cart from "./Cart";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { reducers } from "../../store/reducers/Reducers";

const CartComponent = <Cart />;
const store = configureStore({ reducer: reducers });

let cart = shallow(<Provider store={store}>{CartComponent}</Provider>);

/* RENDER COMPONENT */
describe("Render Cart", () => {
  it("should render the Cart Component accordingly", () => {
    expect(cart).toMatchSnapshot();
  });
});
