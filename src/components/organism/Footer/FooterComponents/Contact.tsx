"use client";
import { useTheme } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import React from "react";

const Contacteaza: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack direction="column" sx={{ ml: 2 }}>
      <Typography
        variant="body1"
        color="common.white"
        sx={{
          alignContent: "center",
          paddingBottom: "14px",
          paddingRight: "47px",
          fontWeight: "bold",
        }}
      >
        Contacteaza-ne
      </Typography>
      <Typography variant="body2" sx={{ color: theme.palette.grey[400] }}>
        contact@svs.ong
      </Typography>
    </Stack>
  );
};

export default Contacteaza;
