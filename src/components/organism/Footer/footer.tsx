"use client";

import React from "react";
import { Typography, Stack, IconButton, Box } from "@mui/material";
import Link from "next/link";
import NextLink from "next/link";
import Image from "next/image";
import { Link as MuiLink } from "@mui/material";
import Logo from "@/components/svsLogo.png";
import { Icon } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { useTheme } from "@mui/material/styles";

enum LinkPaths {
  Home = "/",
  Projects = "/projects",
  AboutUs = "/about",
  RedirectTax = "/redirect-tax",
  Statut = "https://drive.google.com/file/d/1Wx4yRM_A6Izm5tntvfalwEMRjL1nmPmr/view",
  JoinUs = "/join",
}

interface LinkCompProps {
  text: string;
  href: LinkPaths;
}

export const LinkComp: React.FC<LinkCompProps> = ({ text, href }) => {
  return (
    <NextLink href={href} passHref>
      <MuiLink>{text}</MuiLink>
    </NextLink>
  );
};

const Linkuri: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack direction="column" justifyContent="space-between" paddingLeft="160px">
      <Typography
        variant="body1"
        color="common.white"
        sx={{ alignContent: "center", paddingBottom: "14px", paddingRight: "47px" }}
      >
        Linkuri
      </Typography>
      <Typography variant="body2">
        <LinkComp text="Proiecte" href={LinkPaths.Projects} />
      </Typography>
      <Typography variant="body2">
        <LinkComp text="Despre noi" href={LinkPaths.AboutUs} />
      </Typography>
      <Typography variant="body2">
        <LinkComp text="Redirectioneaza 3.5%" href={LinkPaths.RedirectTax} />
      </Typography>
    </Stack>
  );
};
const Contacteaza: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack direction="column" sx={{ ml: 2 }}>
      <Typography
        variant="body1"
        color="common.white"
        sx={{ alignContent: "center", paddingBottom: "14px", paddingRight: "47px" }}
      >
        Contacteaza-ne
      </Typography>
      <Typography variant="body2" color="common.white">
        contact@svs.ong
      </Typography>
    </Stack>
  );
};

const Resurse: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack direction="column">
      <Typography
        variant="body1"
        color="common.white"
        sx={{ alignContent: "center", paddingBottom: "14px" }}
      >
        Resurse
      </Typography>
      <Typography variant="body2">
        <LinkComp text="Statut" href={LinkPaths.Statut} />
      </Typography>
      <Typography variant="body2">
        <LinkComp text="Intra in echipa noastra" href={LinkPaths.JoinUs} />
      </Typography>
    </Stack>
  );
};

const Icons: React.FC = () => {
  const theme = useTheme();
  return (
    <Stack paddingRight="160px" direction="row" alignContent="right">
      <Link href="https://www.instagram.com/studentipentruviitoristudenti/">
        <IconButton
          color="info"
          sx={{
            padding: "20",
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
            padding: "20",
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
            padding: "20",
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
            padding: "20",
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

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "200px",
        margin: "0",
        bottom: "0",
        padding: " 0 178px",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Stack direction="row" paddingTop="20px">
        <Linkuri />

        <Contacteaza />

        <Resurse />

        <Box sx={{ flexGrow: 1 }} />

        <Icons />
      </Stack>
    </Box>
  );
};

export default Footer;
