"use client";
import React, { useState } from "react";
import {
  AppBar,
  Typography,
  useScrollTrigger,
  Stack,
  IconButton,
  Button,
  Drawer,
  useMediaQuery,
  Box,
  Divider,
  List,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/svsLogo.png";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<any>;
}

enum RoutePaths {
  Home = "/",
  Projects = "/projects",
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
  { label: "Proiecte", href: RoutePaths.Projects, variant: "text" },
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

interface DrawerHeaderProps {
  handleDrawerClose: () => any;
}

const DrawerHeader: React.FC<DrawerHeaderProps> = ({ handleDrawerClose }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: (theme) => theme.spacing(1),
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Typography variant="h6" sx={{ color: "white" }}>
        Menu
      </Typography>
      <IconButton onClick={handleDrawerClose} sx={{ color: "white" }}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

const NavBar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const drawer = (
    <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
      <DrawerHeader handleDrawerClose={handleDrawerClose} />
      <Divider light={true} variant="fullWidth" textAlign="center" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          backgroundColor: theme.palette.primary.main,
          height: "100%",
        }}
      >
        <Stack
          alignContent="center"
          direction={"column"}
          justifyContent={"flex-start"}
          spacing={3}
          sx={{ paddingTop: "25px", flexGrow: 1 }}
        >
          {navConfig.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <Button variant="text" sx={{ color: "white", textTransform: "none" }}>
                {item.label}
              </Button>
            </Link>
          ))}
        </Stack>
      </Box>
    </Drawer>
  );

  return (
    <ElevationScroll>
      <AppBar
        position="sticky"
        sx={{
          height: "64px",
          margin: "0",
          padding: "0 40px",
          justifyItems: "center",
        }}
      >
        <Stack direction="row" alignItems={"center"} height="64px" justifyContent={"space-between"}>
          <Stack direction={"row"} alignItems="center" spacing={3}>
            {isMobile && (
              <>
                <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
                {drawer}
              </>
            )}
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
          {!isMobile && (
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
          )}
        </Stack>
      </AppBar>
    </ElevationScroll>
  );
};

export default NavBar;
