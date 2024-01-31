import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { ToggleSideBar, UpdateSideBarType } from "../redux/slices/app";
import { CaretLeft, X } from "phosphor-react";

const SharedMessage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
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
      </Stack>
    </Box>
  );
};

export default SharedMessage;