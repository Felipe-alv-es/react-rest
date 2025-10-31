import { Box, Typography, IconButton, Chip } from "@mui/material";
import { FaTrashRestore, FaPencilAlt } from "react-icons/fa";
import { getListItemStyle } from "./ListItem.styles";
import { FullWidthBox } from "@components/full-width-box/FullWidthBox";

interface ListItemProps {
  name: string;
  username: string;
  email: string;
  status: string;
}

const ListItem = ({ name, username, email, status }: ListItemProps) => {
  const fields = [
    { label: name },
    { label: username },
    { label: email },
    { label: status },
  ];

  interface StatusLabelProps {
    label: string;
  }

  const LabelComponent: React.FC<StatusLabelProps> = ({ label }) => {
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
    <Box sx={getListItemStyle()}>
      {fields.map(({ label }) => (
        <FullWidthBox key={label}>
          <LabelComponent label={label} />
        </FullWidthBox>
      ))}
      <FullWidthBox>
        <IconButton>
          <FaTrashRestore color="#990000" />
        </IconButton>
        <IconButton>
          <FaPencilAlt color="#383838" />
        </IconButton>
      </FullWidthBox>
    </Box>
  );
};

export default ListItem;
