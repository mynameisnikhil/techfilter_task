import React from "react";
import { Box, Paper } from "@mui/material";
import Header from "../components/Header";
import TabNavigation from "../components/TabNavigation";
import MetricsView from "../components/metricsView/MetricsView";
import AnalyticsView from "../components/analyticsView/AnalyticsView";
import UserModal from "../components/UserModal";
import { useDashboard } from "../common/DashboardContext";

const Dashboard: React.FC = () => {
  const { activeTab } = useDashboard();
  const [isUserModalOpen, setIsUserModalOpen] = React.useState(false);

  const handleOpenUserModal = () => {
    setIsUserModalOpen(true);
  };

  const handleCloseUserModal = () => {
    setIsUserModalOpen(false);
  };

  return (
    <Box sx={styles.container}>
      <Header onOpenUserModal={handleOpenUserModal} />
      <Paper sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabNavigation />
      </Paper>

      <Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
        {activeTab === "metrics" ? <MetricsView /> : <AnalyticsView />}
      </Box>

      <UserModal open={isUserModalOpen} onClose={handleCloseUserModal} />
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    bgcolor: "background.default",
  },
};

export default Dashboard;
