import React from "react";
import { render } from "../../utils/test-utils";
import Button from "./Button";

describe("Button", () => {
  const props = {
    onClick: jest.fn(),
    bgColor: "blue",
    type: "submit",
  };

  it("render Button without crashing", () => {
    const { queryByText } = render(
      <Button onClick={props.onClick}>Click here!</Button>
    );
    expect(queryByText("Click here!")).not.toBeNull();
    expect(queryByText("Click here!").type).toBe("button");
  });

  it("render Button based on props", () => {
    const { queryByText } = render(<Button {...props}>Submit</Button>);
    expect(queryByText("Submit").type).toBe("submit");
    expect(queryByText("Submit")).toHaveStyle(`background-color: dodgerblue`);
  });
});
