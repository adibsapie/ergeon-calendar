import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders main page", () => {
  render(<App />);
  const linkElement = screen.getByText(/Ergeon Calendar Test/i);
  expect(linkElement).toBeInTheDocument();
});
