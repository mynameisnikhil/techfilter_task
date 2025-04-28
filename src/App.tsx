import { Container, Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Dashboard />
      </Box>
    </Container>
  );
}

export default App;
