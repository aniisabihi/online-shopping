import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";

const NavbarComponent = <Navbar />;

let navbar = shallow(NavbarComponent);

/* RENDER COMPONENT */
describe("Render Navigation", () => {
  it("should render the Navigation Component accordingly", () => {
    expect(navbar).toMatchSnapshot();
  });
});
