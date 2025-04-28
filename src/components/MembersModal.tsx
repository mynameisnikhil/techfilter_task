import { Modal, Box, Typography, Button } from "@mui/material";

interface MembersModalProps {
  open: boolean;
  onClose: () => void;
  onSelectUser: (userId: string) => void;
}

function MembersModal({ open, onClose, onSelectUser }: MembersModalProps) {
  const mockUsers = ["User A", "User B", "User C", "User D", "User E"];

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          p: 4,
          backgroundColor: "white",
          margin: "10% auto",
          maxWidth: 400,
        }}
      >
        <Typography variant="h6">Select a Member</Typography>
        {mockUsers.map((user) => (
          <Button
            key={user}
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => {
              onSelectUser(user);
              onClose();
            }}
          >
            {user}
          </Button>
        ))}
      </Box>
    </Modal>
  );
}

export default MembersModal;
