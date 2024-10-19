"use client";
import React from "react";
import theme from "@/theme";
import { Box, Container } from "@mui/material";
import { Image } from "@/components/atomic/Image/Image";
import { SectionVariants } from "./types";
import { ImageData } from "@/model/imageData";

interface SectionProps {
  variant: SectionVariants;
  children?: React.ReactNode;
  backgroundImage?: ImageData;
}

export const Section: React.FC<SectionProps> = ({ variant, children, backgroundImage }) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case SectionVariants.white:
        return theme.palette.common.white;
      case SectionVariants.primary:
        return theme.palette.primary.main;
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <Box sx={{ flexgrow: 1, backgroundColor: getBackgroundColor() }}>
      <Image image={backgroundImage}>
        <Container>{children}</Container>
      </Image>
    </Box>
  );
};
