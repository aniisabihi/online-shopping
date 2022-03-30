import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";

const HomeComponent = <Home />;

let home = shallow(HomeComponent);

/* RENDER COMPONENT */
describe("Render Home", () => {
  it("should render the Home Component accordingly", () => {
    expect(home).toMatchSnapshot();
  });
});
