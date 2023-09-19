import { expect, test, describe } from "vitest";
import { render,screen } from "@testing-library/react";
import CustomFooter from "./Components/Footer";
import "@testing-library/jest-dom";


describe("CustomFooter component", () => {
    const textMatcher = (content, element) => {
      return element.textContent.includes(content);
    };
  
    test("renders the footer text", () => {
      render(<CustomFooter />);
  
      const footerElements = screen.getAllByText((content, element) =>
        textMatcher("© Example Website", element)
      );
  
      expect(footerElements.some((element) => textMatcher("© Example Website", element))).toBe(true);
    });
  
  });