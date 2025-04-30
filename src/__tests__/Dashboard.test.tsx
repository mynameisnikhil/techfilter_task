import { render, screen, fireEvent } from "@testing-library/react";
import { DashboardProvider } from "../common/DashboardContext";
import Dashboard from "../pages/Dashboard";
import { mockUsers } from "../data/mockUsers";

// Mocking nivo charts to prevent rendering issues in tests
jest.mock("@nivo/bar", () => ({
  ResponsiveBar: () => <div data-testid="bar-chart" />,
}));

jest.mock("@nivo/line", () => ({
  ResponsiveLine: () => <div data-testid="line-chart" />,
}));

jest.mock("@nivo/scatterplot", () => ({
  ResponsiveScatterPlot: () => <div data-testid="scatter-plot" />,
}));

describe("Dashboard", () => {
  beforeEach(() => {
    render(
      <DashboardProvider>
        <Dashboard />
      </DashboardProvider>
    );
  });

  test("renders the header with title", () => {
    expect(screen.getByText("Analytics Dashboard")).toBeInTheDocument();
  });

  test("renders the tab navigation with Metrics and Analytics tabs", () => {
    expect(screen.getByText("Metrics View")).toBeInTheDocument();
    expect(screen.getByText("Analytics View")).toBeInTheDocument();
  });

  test("switches between Metrics and Analytics views when tabs are clicked", () => {
    // Initially Metrics view should be active
    expect(screen.getByText("Data Table")).toBeInTheDocument();

    // Click on Analytics tab
    fireEvent.click(screen.getByText("Analytics View"));

    // Should show Analytics view components
    expect(screen.getByText("Spend Over Time")).toBeInTheDocument();
    expect(screen.getByText("% Change vs Reference")).toBeInTheDocument();
    expect(screen.getByText("Spend Composition")).toBeInTheDocument();

    // Click back on Metrics tab
    fireEvent.click(screen.getByText("Metrics View"));

    // Should show Metrics view components again
    expect(screen.getByText("Data Table")).toBeInTheDocument();
  });

  test("opens user modal when My Members button is clicked", () => {
    // Click on My Members button
    fireEvent.click(screen.getByText("My Members"));

    // Modal should be visible
    expect(screen.getByText("Select Member")).toBeInTheDocument();

    // Should show all the mock users
    mockUsers.forEach((user) => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
    });

    // Close the modal
    fireEvent.click(screen.getByText("Cancel"));
  });
});
