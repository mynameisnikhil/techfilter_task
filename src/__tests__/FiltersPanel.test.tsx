import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { DashboardProvider } from "../common/DashboardContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import FilterPanel from "../components/FilterPanel";

describe("FilterPanel", () => {
  beforeEach(() => {
    render(
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DashboardProvider>
          <FilterPanel />
        </DashboardProvider>
      </LocalizationProvider>
    );
  });

  test("renders all filter components", () => {
    // Title
    expect(screen.getByText("Filters")).toBeInTheDocument();

    // Date pickers
    expect(screen.getByLabelText("Start Date")).toBeInTheDocument();
    expect(screen.getByLabelText("End Date")).toBeInTheDocument();

    // Dropdowns
    expect(screen.getByLabelText("Sector")).toBeInTheDocument();
    expect(screen.getByLabelText("Category")).toBeInTheDocument();

    // Group by and Metrics sections
    expect(screen.getByText("Grouping Attributes")).toBeInTheDocument();
    expect(screen.getByText("Metrics")).toBeInTheDocument();
  });

  test("clear filters button resets all filters", () => {
    // Change some filters first
    fireEvent.mouseDown(screen.getByLabelText("Sector"));
    fireEvent.click(screen.getByText("Retail"));

    // Verify sector is set
    expect(screen.getByLabelText("Sector")).toHaveTextContent("Retail");

    // Click clear filters button
    fireEvent.click(screen.getByText("Clear filters"));

    // Verify sector is reset
    expect(screen.getByLabelText("Sector")).toHaveTextContent("");
  });

  test("can select and remove a category", () => {
    // Open category dropdown
    fireEvent.mouseDown(screen.getByLabelText("Category"));

    // Select a category
    fireEvent.click(screen.getByText("Juice"));

    // Verify category is set
    expect(screen.getByLabelText("Category")).toHaveTextContent("Juice");

    // Reset by clearing filters
    fireEvent.click(screen.getByText("Clear filters"));
  });
});
