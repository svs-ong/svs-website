"use client";
import React from "react";
import theme from "@/theme";
import { Box, Container } from "@mui/material";
import { SectionVariants } from "./types";

interface SectionProps {
  variant: SectionVariants;
  children?: React.ReactNode;
}
/*
Ensures that every section content is positioned the same.

* `Section` component renders a section with a configurable background color and centered content.
 * It ensures consistent layout and styling for each section on the page.
 *
 * @param {SectionVariants} variant - The background color variant. Can be `white` or `primary`.
 * *******Be sure each bit of content is wrapped in a section.*******
 * @param {React.ReactNode} children - The content to display inside the section. Optional.
 *
 * @returns {React.ReactElement} The rendered section with a dynamic background and centered content.

*/
export const Section: React.FC<SectionProps> = ({ variant, children }) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case SectionVariants.white:
        return theme.palette.common.white;
      case SectionVariants.primary:
        return theme.palette.primary.main;
      case SectionVariants.gray:
        return theme.palette.grey[300];
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <Box sx={{ flexgrow: 1, backgroundColor: getBackgroundColor(), padding: "20px" }}>
      <Container sx={{ alignContent: "center", justifyContent: "center" }}>{children}</Container>
    </Box>
  );
};
