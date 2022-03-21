import React from "react";
import { render, screen, waitFor,cleanup } from "@testing-library/react";
import { getRequest } from "service/axios";
import {CardListing} from './CardListing.component';

afterEach(cleanup);

const api = `?key=f9dacf74bea74bda&large_area=Z011&format=json&count=12`;

describe("Card Listing Api Testing", () => {
  it("GET API returns data", async () => {
    let results = await getRequest(api);

    const { getByTestId, asFragment } = render(<CardListing filteredData={results.data.results.shop}/>);
    const listNode = await waitFor(() => getByTestId("cardListingContainer"));
    expect(listNode.children).toHaveLength(12);
  });
});
