import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { useDashboard } from "../common/DashboardContext";

const TabNavigation: React.FC = () => {
  const { activeTab, setActiveTab } = useDashboard();

  const handleTabChange = (
    _event: React.SyntheticEvent,
    newValue: "metrics" | "analytics"
  ) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="dashboard tabs"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab
          label="Metrics View"
          value="metrics"
          sx={{
            px: 3,
            py: 2,
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        />
        <Tab
          label="Analytics View"
          value="analytics"
          sx={{
            px: 3,
            py: 2,
            fontSize: "0.875rem",
            fontWeight: 500,
          }}
        />
      </Tabs>
    </Box>
  );
};

export default TabNavigation;
