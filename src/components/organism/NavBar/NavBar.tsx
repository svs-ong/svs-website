"use client";
import React from "react";
import { AppBar, Typography, Stack, IconButton, Button, useMediaQuery, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Logo from "@/components/svsLogo.png";
import ElevationScroll from "./NavBarComponents/ElevationScroll";
import NavConfig from "@/components/organism/NavBar/NavBarComponents/NavConfig";
import NavDrawer from "./NavBarComponents/Drawer";

const NavBar: React.FC = () => {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTabletOrNormal = (isTablet && !isMobile) || (!isMobile && !isTablet);
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
            {isMobile && <NavDrawer />}
            <>
              <Link href="/" sx={{ alignContent: "center" }}>
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
            </>
            {isTabletOrNormal && (
              <Link href="/" underline="none" sx={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  Studenti Pentru Viitori Studenti
                </Typography>
              </Link>
            )}
          </Stack>
          {!isMobile && (
            <Stack
              alignContent="center"
              direction={"row"}
              justifyContent={"space-between"}
              spacing={3}
            >
              {NavConfig.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={item.variant}
                    sx={{
                      color: "white",
                      textTransform: "none",
                      fontSize: isTablet ? "14px" : "inherit",
                      height: isTablet ? "42px" : "inherit",
                    }}
                  >
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
