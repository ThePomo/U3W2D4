import { render, screen, it, expect } from "@testing-library/react";
import Welcome from "../components/Welcome";

it("renders Welcome component correctly", () => {
  render(<Welcome />);
  const welcomeElement = screen.getByText(/welcome/i);
  expect(welcomeElement).toBeInTheDocument();
});
