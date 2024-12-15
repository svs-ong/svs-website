"use client";
import { useTheme } from "@mui/material/styles";
import { Stack, IconButton } from "@mui/material";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Icons: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        justifyContent: "flex-end",
        alignItems: "flex-start",
      }}
    >
      <Link href="https://www.instagram.com/studentipentruviitoristudenti/">
        <IconButton
          color="info"
          sx={{
            height: "auto",
            width: "auto",
          }}
        >
          <InstagramIcon />
        </IconButton>
      </Link>

      <Link href="https://www.facebook.com/studenti.pentru.viitori.studenti">
        <IconButton
          color="info"
          sx={{
            height: "auto",
            width: "auto",
          }}
        >
          <FacebookIcon />
        </IconButton>
      </Link>

      <Link href="https://www.youtube.com/@SVS-ONG">
        <IconButton
          color="info"
          sx={{
            height: "auto",
            width: "auto",
          }}
        >
          <YouTubeIcon />
        </IconButton>
      </Link>

      <Link href="https://www.linkedin.com/company/asociatia-svs/">
        <IconButton
          color="info"
          sx={{
            paddingRight: 0,
            height: "auto",
            width: "auto",
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Link>
    </Stack>
  );
};

export default Icons;