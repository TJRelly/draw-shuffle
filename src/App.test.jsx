import { render, fireEvent } from "@testing-library/react";
import { it, expect } from "vitest";
import App from "./App";


// smoke test
it("renders without crashing", function() {
  render(<App />);
});

// snapshot test
it("matches snapshot", function() {
  const {asFragment} = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

