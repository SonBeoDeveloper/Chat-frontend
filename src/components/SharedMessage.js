import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { ToggleSideBar, UpdateSideBarType } from "../redux/slices/app";
import { CaretLeft, X } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { SHARED_DOC, SHARED_LINK } from "../data";
import { DocMsg, LinkMsg } from "../Conversation/MsgTypes";

const SharedMessage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction={"row"}
            alignItems={"center"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSideBarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subTitle2">Shared Messages</Typography>
          </Stack>
        </Box>
        <Tabs
          sx={{ px: 2, pt: 2 }}
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={value === 1 ? 1 : 3}
        >
          {(() => {
            switch (value) {
              case 0:
                return (
                  <Grid item xs={4}>
                    <img
                      src={faker.image.avatar()}
                      alt={faker.name.fullName()}
                    />
                  </Grid>
                );
              case 1:
                return SHARED_LINK.map((el) => <LinkMsg el={el} />);
              case 2:
                return SHARED_DOC.map((el) => <DocMsg el={el} />);
              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharedMessage;
