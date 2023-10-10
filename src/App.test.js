import { screen, render } from "@testing-library/react";
import each from "jest-each";

import App from "./App";

describe("App", () => {
  each([["Styled"], ["CSS"]]).test(
    "It applies correct background-color with %s styling approach",
    (query) => {
      render(<App />);
      const button = screen.queryByText(query);
      expect(button).toBeInTheDocument();

      expect(button).toHaveStyle({ "background-color": "aqua" });
    }
  );
});
