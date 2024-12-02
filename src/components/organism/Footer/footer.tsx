"use client";
import React from "react";
import { Stack, Box } from "@mui/material";
import { Section } from "@/components/atomic/Section/Section";
import { SectionVariants } from "@/components/atomic/Section/types";
import { useTheme } from "@mui/material/styles";
import Contacteaza from "./FooterComponents/Contact";
import Icons from "./FooterComponents/Icons";
import Linkuri from "./FooterComponents/Links";
import Resurse from "./FooterComponents/Resources";

const Footer: React.FC = () => {
  const theme = useTheme();
  return (
    <Section variant={SectionVariants.primary}>
      <Box
        sx={{
          height: "200px",
          margin: "0",
          bottom: "0",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          paddingTop="20px"
          justifyContent={{ xs: "center", sm: "space-between" }}
          alignItems={"start"}
        >
          <Linkuri />
          <Contacteaza />
          <Resurse />
          <Box sx={{ flexGrow: 1, alignContent: "start" }} />
          <Icons />
        </Stack>
      </Box>
    </Section>
  );
};

export default Footer;
