import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Homepage } from "./Homepage.component";

describe("Homepage Component tests", () => {
  it("renders HomePage component", () => {
    render(<Homepage />);
    const homePageContainer = screen.getByTestId("homepageContainer");
    expect(homePageContainer).toBeInTheDocument();

    const heading = screen.getByText(/TOKYO RAMEN FINDER/);
    expect(heading).toBeInTheDocument();

    const searchInputText = screen.getByPlaceholderText(
      /Filter by specialty, location or keyword.../
    );
    expect(searchInputText).toBeInTheDocument();
  });
});
