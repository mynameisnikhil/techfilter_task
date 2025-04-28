import { Box, Tabs, Tab } from "@mui/material";
import { useState } from "react";

function Dashboard() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Metrics View" />
        <Tab label="Analytics View" />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {tabValue === 0 && (
          <div>
            {/* Metrics View Content */}
            <h2>Metrics View</h2>
          </div>
        )}
        {tabValue === 1 && (
          <div>
            {/* Analytics View Content */}
            <h2>Analytics View</h2>
          </div>
        )}
      </Box>
    </Box>
  );
}

export default Dashboard;
