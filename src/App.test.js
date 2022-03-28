import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders icons credit link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Icons created by Freepik - Flaticon/i);
  expect(linkElement).toBeInTheDocument();
});
