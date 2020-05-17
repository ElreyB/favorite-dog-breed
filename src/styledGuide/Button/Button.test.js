import React from "react";
import { render } from "../../utils/test-utils";
import Button from "./Button";

describe("Button", () => {
  const props = {
    onClick: jest.fn(),
    type: "submit",
  };

  it("render Button without crashing", () => {
    const { queryByText } = render(
      <Button {...props}>Submit your results!</Button>
    );
    expect(queryByText("Submit your results!")).not.toBeNull();
  });

  // it("render Button according to props passed", () => {
  //   const { queryByText } = render(
  //     <Button {...props}>Submit your results!</Button>
  //   );
  //   expect(queryByText("Submit your results!")).not.toBeNull();
  //   expect(queryByText("Submit your results!").name).toBe(props.name);
  //   expect(queryByText("Submit your results!").type).toBe(props.type);
  //   fireEvent.click(queryByText("Submit your results!"));
  //   expect(props.handleOnClick).toHaveBeenCalled();
  // });
});
