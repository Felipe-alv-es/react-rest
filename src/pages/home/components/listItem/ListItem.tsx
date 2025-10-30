import { Box, Typography, IconButton } from "@mui/material";
import { FaTrashRestore, FaPencilAlt } from "react-icons/fa";
import { getListItemStyle } from "./ListItem.styles";
import { FullWidthBox } from "@components/FullWidthBox/FullWidthBox";

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

  return (
    <Box sx={getListItemStyle()}>
      {fields.map(({ label }) => (
        <FullWidthBox key={label}>
          <Typography>{label}</Typography>
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
