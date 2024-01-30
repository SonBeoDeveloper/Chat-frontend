import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import React from "react";
import { faker } from "@faker-js/faker";
import {
  CaretDown,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "phosphor-react";
import Header from "./Header";
import Footer from "./Footer";

const Conversation = () => {
  return (
    <Stack height="100%" maxHeight={"100vh"} width={"auto"}>
      <Box width={"100%"} sx={{ flexGrow: 1 }}>
        <Header />
      </Box>
      <Footer />
    </Stack>
  );
};

export default Conversation;
