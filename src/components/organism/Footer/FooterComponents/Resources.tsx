"use client";
import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LinkPaths, LinkProps } from "./types";

const Resources: LinkProps[] = [
  { text: "Statut", href: LinkPaths.Statut },
  { text: "Intra in echipa noastra", href: LinkPaths.JoinUs },
];

const Resurse: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack direction="column">
      <Typography
        variant="body1"
        color={theme.palette.common.white}
        sx={{ alignContent: "center", paddingBottom: "14px", fontWeight: "bold" }}
      >
        Resurse
      </Typography>
      {Resources.map((item) => (
        <Link key={item.href} href={item.href} underline="hover">
          <Typography sx={{ color: theme.palette.grey[400] }}>{item.text}</Typography>
        </Link>
      ))}
    </Stack>
  );
};
export default Resurse;