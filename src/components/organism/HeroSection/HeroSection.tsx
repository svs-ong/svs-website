"use client";
import React from "react";
import { Container, Typography, useTheme } from "@mui/material";
import theme from "@/theme";
import { Section } from "@/components/atomic/Section/Section";
import { SectionVariants } from "@/components/atomic/Section/types";

interface HeroSectionProps {
  title: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
  return (
    <Section variant={SectionVariants.primary}>
      <Typography variant="h3" color="background.paper" align="center" textAlign={"center"}>
        {title}
      </Typography>
    </Section>
  );
};
