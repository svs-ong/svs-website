"use client";
import React from "react";
import { Typography } from "@mui/material";
import { Section } from "@/components/atomic/Section/Section";
import { SectionVariants } from "@/components/atomic/Section/types";
import { ImageData } from "@/model/imageData";

interface HeroSectionProps {
  title: string;
  backgroundImage?: ImageData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, backgroundImage }) => {
  return (
    <Section variant={SectionVariants.primary} backgroundImage={backgroundImage}>
      <Typography variant="h3" color="background.paper" align="center" textAlign={"center"}>
        {title}
      </Typography>
    </Section>
  );
};
