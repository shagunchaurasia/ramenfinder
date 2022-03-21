import React from "react";
import { render, screen } from "@testing-library/react";
import { Homepage } from "./Homepage.component";
import { getRequest } from "service/axios";
import axios from 'axios';

const api = `?key=f9dacf74bea74bda&large_area=Z011&format=json&count=12`;
jest.setTimeout(10000);
describe("Homepage Component tests", () => {
  it("renders HomePage component", () => {
    render(<Homepage />);
    const homePageContainer = screen.getByRole("homepageContainer");
    expect(homePageContainer).toBeInTheDocument();
  });

  it("Homepage has correct initial heading", () => {});

  it("Homepage has correct initial search input container", () => {});

  it("Homepage has listing card", () => {});

  describe("api testing",()=>{
    it("GET api returns data", async () => {
      let results = await getRequest(api);
      expect(results.data.results.results_returned).toEqual("12");
      expect(results.data.results.shop.length).toEqual(12);
    });
  })
});




