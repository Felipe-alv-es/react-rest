import ListItem from "../list-Item/ListItem";
import { Box, Typography } from "@mui/material";
import { FullWidthBox } from "@components/full-width-box/FullWidthBox";
import { User } from "context/types";
import { listLabel } from "utils/listLabel";
import {
  getHomeListStyle,
  getItemContainerStyle,
  getListTitleStyle,
  getTypographyStyle,
} from "./HomeList.styles";
interface HomeListTypes {
  users: User[];
}

const HomeList = ({ users }: HomeListTypes) => {
  return (
    <Box sx={getHomeListStyle()}>
      <Box sx={getListTitleStyle()}>
        {listLabel.map((item) => (
          <FullWidthBox key={item}>
            <Typography sx={getTypographyStyle()}>{item}</Typography>
          </FullWidthBox>
        ))}
      </Box>
      <Box sx={getItemContainerStyle()}>
        {users?.map((user) => (
          <ListItem
            name={user.name}
            username={user.username}
            email={user.email}
            status={"Banned"}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HomeList;
