import React from "react";
import { shallow } from "enzyme";
import App from "./App";

const AppComponent = <App />;
let app = shallow(AppComponent);

/* RENDER COMPONENT */
describe("Render App", () => {
  it("should render the App Component accordingly", () => {
    expect(app).toMatchSnapshot();
  });
});
