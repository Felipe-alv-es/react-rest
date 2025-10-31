import ListItem from "../list-Item/ListItem";
import { Box, Typography, useTheme } from "@mui/material";
import { FullWidthBox } from "@components/full-width-box/FullWidthBox";
import { User } from "context/user-context/types";
import { listLabel } from "utils/listLabel";
import {
  getHomeListStyle,
  getItemContainerStyle,
  getListTitleStyle,
  getTypographyStyle,
} from "./HomeList.styles";
interface HomeListTypes {
  users: User[];
  removeUser: (id: number) => void;
  editUser: (updatedUser: User) => void;
}

const HomeList = ({ users, removeUser, editUser }: HomeListTypes) => {
  const theme = useTheme();
  return (
    <Box sx={getHomeListStyle(theme)}>
      <Box sx={getListTitleStyle(theme)}>
        {listLabel.map((item) => (
          <FullWidthBox key={item}>
            <Typography sx={getTypographyStyle(theme)}>{item}</Typography>
          </FullWidthBox>
        ))}
      </Box>
      <Box sx={getItemContainerStyle(theme)}>
        {users?.map((user) => (
          <ListItem
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            status={user.status}
            removeUser={removeUser}
            editUser={editUser}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HomeList;
