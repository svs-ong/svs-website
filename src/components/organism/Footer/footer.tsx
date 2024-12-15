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
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent={{ xs: "center", sm: "space-between" }}
          alignItems={"start"}
          spacing={4}
        >
          <Linkuri />
          <Contacteaza />
          <Resurse />
        </Stack>
        <Icons />
      </Stack>
    </Section>
  );
};

export default Footer;
