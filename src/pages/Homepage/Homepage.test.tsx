import React from "react";
import { render, screen } from "@testing-library/react";
import { Homepage } from "./Homepage.component";
import { getRequest } from "service/axios";

const api = `?key=f9dacf74bea74bda&large_area=Z011&format=json&count=12`;

describe("Homepage Component tests", () => {
  it("renders HomePage component", () => {
    render(<Homepage />);
    const homePageContainer = screen.getByRole("homepageContainer");
    expect(homePageContainer).toBeInTheDocument();
  });

  it("Homepage has correct initial heading", () => {});

  it("Homepage has correct initial search input container", () => {});

  it("Homepage has listing card", () => {});

  it("GET api returns data", () => {
    // expect(getRequest(api)).toBeLessThanOrEqual(12);
  });
});
