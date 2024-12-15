"use client";
import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Links } from "./types";
import { useTheme } from "@mui/material/styles";


const Linkuri: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack direction="column" justifyContent="space-between">
      <Typography
        variant="body1"
        color="common.white"
        sx={{ alignContent: "center", paddingBottom: "4px", fontWeight: "bold" }}
      >
        Linkuri
      </Typography>

      {Links.map((item) => (
        <Link key={item.href} href={item.href}>
          <Typography sx={{ color: theme.palette.grey[400] }}>{item.text}</Typography>
        </Link>
      ))}
    </Stack>
  );
};

export default Linkuri;