import React from "react";
import { Box } from "@mui/material";
import TimeSeriesChart from "./TimeSeriesChart";
import ComparisonChart from "./ComparisionChart";
import StackedBarChart from "./StackedBarChart";
import FilterPanel from "../FilterPanel";

const AnalyticsView: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {/* <FilterPanel /> */}
      <TimeSeriesChart />
      <ComparisonChart />
      <StackedBarChart />
    </Box>
  );
};

export default AnalyticsView;
