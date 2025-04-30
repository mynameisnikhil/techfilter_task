import React from "react";
import { Box } from "@mui/material";
import FiltersPanel from "../FilterPanel";
import DataTable from "./DataTable";
import BarChart from "./BarChart";

const MetricsView: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <FiltersPanel />
      <DataTable />
      <BarChart />
    </Box>
  );
};

export default MetricsView;
