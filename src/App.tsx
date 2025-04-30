import { Container, Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import { DashboardProvider } from "./common/DashboardContext";

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <DashboardProvider>
          <Dashboard />
        </DashboardProvider>
      </Box>
    </Container>
  );
}

export default App;
