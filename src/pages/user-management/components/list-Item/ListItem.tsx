import React from "react";
import { Box, Typography, IconButton, Chip } from "@mui/material";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { getListItemStyle } from "./ListItem.styles";
import { FullWidthBox } from "@components/full-width-box/FullWidthBox";
import { ConfirmModal } from "../remove-user-confirmation/RemoveUserConfirmation";
import { User } from "context/types";
import { UserModal } from "../user-modal/UserModal";

interface ListItemProps {
  id: number;
  name: string;
  username: string;
  email: string;
  status: string;
  removeUser: (id: number) => void;
  editUser: (updatedUser: User) => void;
}

const ListItem = ({
  id,
  name,
  username,
  email,
  status,
  removeUser,
  editUser,
}: ListItemProps) => {
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleDelete = () => setOpenConfirm(true);
  const handleConfirmDelete = () => {
    removeUser(id);
    setOpenConfirm(false);
  };

  const handleEdit = () => setOpenEdit(true);
  const fields = [
    { label: name },
    { label: username },
    { label: email },
    { label: status },
  ];

  const LabelComponent: React.FC<{ label: string }> = ({ label }) => {
    switch (label) {
      case "Banido":
        return <Chip label={label} color="error" />;
      case "Pendente":
        return <Chip label={label} color="warning" />;
      case "Ativo":
        return <Chip label={label} color="success" />;
      default:
        return <Typography>{label}</Typography>;
    }
  };

  return (
    <>
      <Box sx={getListItemStyle()}>
        {fields.map(({ label }) => (
          <FullWidthBox key={label}>
            <LabelComponent label={label} />
          </FullWidthBox>
        ))}
        <FullWidthBox>
          <IconButton onClick={handleDelete} data-testid="delete-button">
            <FaTrash color="#990000" />
          </IconButton>
          <IconButton onClick={handleEdit} data-testid="edit-button">
            <FaPencilAlt color="#383838" />
          </IconButton>
        </FullWidthBox>
      </Box>
      <ConfirmModal
        open={openConfirm}
        onCancel={() => setOpenConfirm(false)}
        onConfirm={handleConfirmDelete}
        title="Excluir usuário"
        message="Deseja realmente excluir o usuário:"
        user={name}
      />
      <UserModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        mode="edit"
        user={{ id, name, username, email, status }}
        editUser={editUser}
      />
    </>
  );
};

export default ListItem;
