import ListItem from "../listItem/ListItem";
import { Box, Typography } from "@mui/material";
import { FullWidthBox } from "@components/FullWidthBox/FullWidthBox";
import {
  getHomeListStyle,
  getItemContainerStyle,
  getListTitleStyle,
  getTypographyStyle,
} from "./HomeList.styles";

const HomeList = () => {
  const listLabel = ["Name", "Username", "Email", "Status", "Actions"];

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
        <ListItem
          name={"Leanne Graham"}
          username={"Bret"}
          email={"Sincere@april.biz"}
          status={"Banido"}
        />
        <ListItem
          name={"Leanne Graham"}
          username={"Bret"}
          email={"Sincere@april.biz"}
          status={"Banido"}
        />
        <ListItem
          name={"Leanne Graham"}
          username={"Bret"}
          email={"Sincere@april.biz"}
          status={"Banido"}
        />
        <ListItem
          name={"Leanne Graham"}
          username={"Bret"}
          email={"Sincere@april.biz"}
          status={"Banido"}
        />
        <ListItem
          name={"Leanne Graham"}
          username={"Bret"}
          email={"Sincere@april.biz"}
          status={"Banido"}
        />
        <ListItem
          name={"Leanne Graham"}
          username={"Bret"}
          email={"Sincere@april.biz"}
          status={"Banido"}
        />
        <ListItem
          name={"Leanne Graham"}
          username={"Bret"}
          email={"Sincere@april.biz"}
          status={"Banido"}
        />
        <ListItem
          name={"Leanne Graham"}
          username={"Bret"}
          email={"Sincere@april.biz"}
          status={"Banido"}
        />
        <ListItem
          name={"Leanne Graham"}
          username={"Bret"}
          email={"Sincere@april.biz"}
          status={"Banido"}
        />
        <ListItem
          name={"Leanne Graham"}
          username={"Bret"}
          email={"Sincere@april.biz"}
          status={"Banido"}
        />
        <ListItem
          name={"Leanne Graham"}
          username={"Bret"}
          email={"Sincere@april.biz"}
          status={"Banido"}
        />
      </Box>
    </Box>
  );
};

export default HomeList;
