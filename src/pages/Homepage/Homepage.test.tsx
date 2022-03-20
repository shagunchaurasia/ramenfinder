import React from "react";
import { render, screen } from "@testing-library/react";
import { Homepage } from "./Homepage.component";

test("renders HomePage component", () => {
  render(<Homepage />);
  const homePageContainer = screen.getByRole("homepageContainer");
  expect(homePageContainer).toBeInTheDocument();
});


test("Homepage has correct initial heading",()=>{

})

test("Homepage has correct initial search input container",()=>{

})

test("Homepage has liting card",()=>{

})