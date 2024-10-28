"use client";
import React from "react";
import { AppBar, Typography, useScrollTrigger, Stack, IconButton, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/svsLogo.png";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<any>;
}

enum RoutePaths {
  Home = "/",
  Events = "/events",
  AboutUs = "/about",
  RedirectTax = "/redirect-tax",
  JoinUs = "/join",
}

interface NavItem {
  label: string;
  href: RoutePaths;
  variant: "text" | "outlined";
}

const navConfig: NavItem[] = [
  { label: "Acasa", href: RoutePaths.Home, variant: "text" },
  { label: "Proiecte", href: RoutePaths.Events, variant: "text" },
  { label: "Despre noi", href: RoutePaths.AboutUs, variant: "text" },
  { label: "Redirectioneaza 3.5%", href: RoutePaths.RedirectTax, variant: "text" },
  { label: "Join Us", href: RoutePaths.JoinUs, variant: "outlined" },
];

function ElevationScroll(props: Props) {
  const { children, window } = props;

  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children!, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? theme.palette.common.black : theme.palette.primary.main,
      transition: "background-color 0.3s ease",
    },
  });
}

const NavBar: React.FC = () => {
  const theme = useTheme();
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
        <Stack direction="row" alignItems={"center"} height="64px" justifyContent={"space-between"}>
          <Stack
            alignContent="center"
            alignItems="center"
            direction={"row"}
            justifyContent={"space-between"}
            spacing={3}
          >
            <Link href="/" passHref style={{ alignContent: "center" }}>
              <IconButton
                color="primary"
                sx={{
                  padding: "0",
                  height: "auto",
                  width: "auto",
                }}
              >
                <Image priority src={Logo} alt={""} height={60} width={60}></Image>
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
                <Button variant={item.variant} sx={{ color: "white", textTransform: "none" }}>
                  {item.label}
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
