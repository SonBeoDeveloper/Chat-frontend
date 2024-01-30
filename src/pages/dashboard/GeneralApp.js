import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../Conversation";

const GeneralApp = () => {
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Stack direction="row" sx={{ width: "100%" }}>
        <Chats />
        <Box
          sx={{
            height: "100%",
            width: "calc(100vw - 420px)",
            backgroundColor: "#fff",
          }}
        >
          <Conversation />
        </Box>
      </Stack>
    </Stack>
  );
};

export default GeneralApp;
