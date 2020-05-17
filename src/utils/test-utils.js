/**
 * ThemeProvider from styled components was not being recognized in test files
 * so added custom render according to docs
 * https://testing-library.com/docs/react-testing-library/setup#custom-render
 */

import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components/macro";
import { theme, GlobalStyles } from "../styles";

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
