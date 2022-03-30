import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

const FooterComponent = <Footer />;

let footer = shallow(FooterComponent);

/* RENDER COMPONENT */
describe("Render Footer", () => {
  it("should render the Footer Component accordingly", () => {
    expect(footer).toMatchSnapshot();
  });
});
