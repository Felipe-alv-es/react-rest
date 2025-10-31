import { Modal, Box, Typography } from "@mui/material";
import { CustomButton } from "@components/custom-button/CustomButton";
import { getModalStyle } from "./RemoveUserConfirmation.styles";

interface ConfirmModalProps {
  open: boolean;
  title?: string;
  message: string;
  user: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModal = ({
  open,
  title = "Confirmação",
  message,
  user,
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  return (
    <Modal open={open} onClose={onCancel}>
      <Box sx={getModalStyle()}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          {message}
        </Typography>
        <Typography sx={{ marginBottom: 2, fontWeight: "600", color: "coral" }}>
          {user}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <CustomButton text="Cancelar" onClick={onCancel} />
          <CustomButton text="Confirmar" onClick={onConfirm} />
        </Box>
      </Box>
    </Modal>
  );
};
