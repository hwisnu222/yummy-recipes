import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";

import Home from "../src/pages/Home";

describe("Test compoenent App.js", () => {
  it("App.js", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const headline = screen.getByText(/Yummy Recipes/i);
    expect(headline).toBeInTheDocument();
  });
});
