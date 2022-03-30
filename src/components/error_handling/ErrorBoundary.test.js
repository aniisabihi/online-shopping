import React from "react";
import { shallow } from "enzyme";
import ErrorBoundary from "./ErrorBoundary";

const ErrorBoundaryComponent = <ErrorBoundary />;

let errorBoundary = shallow(ErrorBoundaryComponent);

/* RENDER COMPONENT */
describe("Render ErrorBoundary", () => {
  it("should render the ErrorBoundary Component accordingly", () => {
    expect(errorBoundary).toMatchSnapshot();
  });
});
