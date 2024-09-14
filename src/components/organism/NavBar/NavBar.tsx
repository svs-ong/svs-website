"use client";
import React from "react";
import {
  AppBar,
  Typography,
  useScrollTrigger,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import Image from "next/image";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<any>;
}

const theme = useTheme();

enum RoutePaths {
  Home = "/",
  Projects = "/projects",
  AboutUs = "/about-us",
  RedirectTax = "/redirect-tax",
  JoinUs = "/join-us",
}

interface NavItem {
  label: string;
  href: RoutePaths;
  variant: "text" | "outlined";
}

const navConfig: NavItem[] = [
  { label: "Acasa", href: RoutePaths.Home, variant: "text" },
  { label: "Proiecte", href: RoutePaths.Projects, variant: "text" },
  { label: "Despre noi", href: RoutePaths.AboutUs, variant: "text" },
  { label: "Redirectioneaza 3.5%", href: RoutePaths.RedirectTax, variant: "text" },
  { label: "Join Us", href: RoutePaths.JoinUs, variant: "outlined" },
];



function ElevationScroll(props: Props) {
  const { children, window } = props;



  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children!, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger
        ? theme.palette.background.default
        : theme.palette.primary.main,
      transition: "background-color 0.3s ease",
    },
  });
}

const NavBar: React.FC = () => {
  return (
    <ElevationScroll>
      <AppBar
        position="sticky"
        sx={{
          height: "64px",
          margin: "0",
          padding: " 0 40px",
          justifyItems: "center",
        }}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          height="64px"
          justifyContent={"space-between"}
        >
          <Stack
            alignContent="center"
            direction={"row"}
            justifyContent={"space-between"}
            spacing={3}
          >
            <Link
              href="/"
              passHref
              style={{ textDecoration: "none", alignContent: "center" }}
            >
              <IconButton color="primary" sx={{ alignContent: "center" }}>
                <Image
                  src="https://www.svgrepo.com/show/520508/student.svg"
                  alt="Student Icon"
                  height={50}
                  width={50}
                />
              </IconButton>
            </Link>
            <Typography variant="body1" sx={{ alignContent: "center" }}>
              Studenti Pentru Viitori Studenti
            </Typography>
          </Stack>
          <Stack
            alignContent="center"
            direction={"row"}
            justifyContent={"space-between"}
            spacing={3}
          >
            {navConfig.map((item) => (
              <Link key={item.href} href={item.href} passHref>
                <Button
                  variant={item.variant}
                >
                </Button>
              </Link>
            ))}
          </Stack>
        </Stack>
      </AppBar>
    </ElevationScroll>
  );
};

export default NavBar;
