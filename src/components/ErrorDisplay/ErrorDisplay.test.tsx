import React from "react";
import { render, screen ,fireEvent} from "@testing-library/react";
import {ErrorDisplay} from './ErrorDisplay.component'

test("renders error display component", () => {
  render(<ErrorDisplay error="Test Error" />);

  const errorDisplay = screen.getByTestId("errorDisplay");
  expect(errorDisplay).toBeInTheDocument();

});

test("page reload button present",()=>{
render(<ErrorDisplay error="Test Error"></ErrorDisplay>)
const reloadButton = screen.getByRole("reloadButton");
expect(reloadButton).toBeInTheDocument();
})


describe("page reloads when button is pressed", ()=>{
  const original = window.location;

  const reloadFn = () => {
    window.location.reload();
  };

  beforeAll(() => {
    Object.defineProperty(window, "location", {
      configurable: true,
      value: { reload: jest.fn() },
    });
  });

  afterAll(() => {
    Object.defineProperty(window, "location", {
      configurable: true,
      value: original,
    });
  });

  it("mocks reload function", () => {
    expect(jest.isMockFunction(window.location.reload)).toBe(true);
  });

  it("calls reload function", () => {
    render(<ErrorDisplay error="test error"></ErrorDisplay>)
    const reloadButton = screen.getByRole("reloadButton");
    fireEvent.click(reloadButton);
    reloadFn(); 
    expect(window.location.reload).toHaveBeenCalled();
  });
})
