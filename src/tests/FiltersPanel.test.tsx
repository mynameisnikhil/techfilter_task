import { render, screen } from "@testing-library/react";
import FiltersPanel from "../components/FiltersPanel";

test("renders Filters Panel", () => {
  render(<FiltersPanel />);
  expect(screen.getByText(/Filters Panel/i)).toBeInTheDocument();
});
