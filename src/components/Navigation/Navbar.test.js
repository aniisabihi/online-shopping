import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";
import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../../store/reducers/Reducers";
import { Provider } from "react-redux";

const NavbarComponent = <Navbar />;
const store = configureStore({ reducer: reducers });

let navbar = shallow(<Provider store={store}>{NavbarComponent}</Provider>);

/* RENDER COMPONENT */
describe("Render Navigation", () => {
  it("should render the Navigation Component accordingly", () => {
    expect(navbar).toMatchSnapshot();
  });
});
