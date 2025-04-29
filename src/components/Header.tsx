import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import { Person, Dashboard } from "@mui/icons-material";
import { useDashboard } from "../common/DashboardContext";

interface HeaderProps {
  onOpenUserModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenUserModal }) => {
  const theme = useTheme();
  const { currentUser } = useDashboard();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={1}
      sx={{
        bgcolor: "background.paper",
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Dashboard color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6" color="textPrimary">
            Analytics Dashboard
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Button
          variant="contained"
          color="primary"
          startIcon={<Person />}
          onClick={onOpenUserModal}
          size="medium"
          sx={{ textTransform: "none" }}
        >
          My Members
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
