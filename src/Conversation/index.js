import { Box, Stack } from "@mui/material";
import React from "react";

const Conversation = () => {
  return (
    <Stack height="100%" maxHeight={"100vh"} width={"auto"}>
      <Box
        sx={{
          height: 100,
          width: "100%",
          backgroundColor: "#f8faff",
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ width: "100%", height: "100%" }}
        >
          <Stack direction={"row"} spacing={2}></Stack>
        </Stack>
      </Box>
      <Box width={"100%"} sx={{ flexGrow: 1 }}></Box>
      <Box
        sx={{
          height: 100,
          width: "100%",
          backgroundColor: "#f8faff",
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      ></Box>
    </Stack>
  );
};

export default Conversation;
