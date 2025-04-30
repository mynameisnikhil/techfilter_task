import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { useDashboard } from "../common/DashboardContext";

interface UserModalProps {
  open: boolean;
  onClose: () => void;
}

const UserModal: React.FC<UserModalProps> = ({ open, onClose }) => {
  const { users, currentUser, setCurrentUser } = useDashboard();
  const [selectedUserId, setSelectedUserId] = useState<string | null>(
    currentUser.id
  );

  const handleSelectUser = (userId: string) => {
    setSelectedUserId(userId);
  };

  const handleConfirmSelection = () => {
    if (selectedUserId) {
      const selectedUser = users.find((user) => user.id === selectedUserId);
      if (selectedUser) {
        setCurrentUser(selectedUser);
      }
    }
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      aria-labelledby="user-selection-dialog-title"
    >
      <DialogTitle id="user-selection-dialog-title">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Select Member</Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers sx={{ px: 2, py: 1 }}>
        <List sx={{ maxHeight: 400, overflow: "auto" }}>
          {users.map((user) => (
            <ListItem
              key={user.id}
              onClick={() => handleSelectUser(user.id)}
              component="li"
              sx={{
                mb: 1,
                border: 1,
                borderRadius: 1,
                bgcolor:
                  selectedUserId === user.id ? "rgb(25 118 210)" : "inherit",
                borderColor:
                  selectedUserId === user.id ? "primary.main" : "divider",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: user.avatarColor }}>
                  {user.initials}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    color={selectedUserId === user.id ? "white" : "black"}
                    variant="subtitle1"
                  >
                    {user.name}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" color="text.secondary">
                    {user.role}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>

      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose} color="inherit" sx={{ mr: 1 }}>
          Cancel
        </Button>
        <Button
          onClick={handleConfirmSelection}
          variant="contained"
          color="primary"
          disabled={!selectedUserId}
        >
          Select
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserModal;
