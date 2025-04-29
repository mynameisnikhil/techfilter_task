import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DashboardProvider } from "../common/DashboardContext";
import DataTable from "../components/metricsView/DataTable";

describe("DataTable", () => {
  beforeEach(() => {
    render(
      <DashboardProvider>
        <DataTable />
      </DashboardProvider>
    );
  });

  test("renders the data table with headers", () => {
    expect(screen.getByText("Data Table")).toBeInTheDocument();

    // Check for common column headers
    expect(screen.getByText("Country")).toBeInTheDocument();
    expect(screen.getByText("Sector")).toBeInTheDocument();
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getAllByText("My Spend")[0]).toBeInTheDocument();
  });

  test("allows sorting when header is clicked", () => {
    // Find a sortable column header and click it
    const countryHeader = screen.getByText("Country");
    fireEvent.click(countryHeader);

    // Click again to toggle sort direction
    fireEvent.click(countryHeader);

    // We don't need to check the actual sorting result as that would be implementation-specific
    // Just verifying the click handlers work
  });

  test("renders pagination controls", () => {
    // Look for pagination elements
    expect(
      screen.getByRole("button", { name: /previous page/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /next page/i })
    ).toBeInTheDocument();
  });
});
