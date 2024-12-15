"use client";
import React from "react";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import theme from "@/theme";

interface OurValuesSectionProps {
  title: string;
}

export const OurValuesSection: React.FC<OurValuesSectionProps> = ({ title }) => {
  return (
    <Container
      sx={{
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Stack paddingBottom="164px">
        <Typography
          variant="h4"
          color="primary.main"
          align="center"
          textAlign={"center"}
          paddingBottom="45px"
        >
          {title}
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2} // 160px spacing (20 * 8px) on both sides
          justifyContent="center" // Center the squares
          alignItems="center"
        >
          {[1, 2, 3].map((_, index) => {
            return (
              <Box
                key={index}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  height: "400px",
                  width: "400px",
                  maxHeight: "560px",
                }}
              />
            );
          })}
        </Stack>
      </Stack>
    </Container>
  );
};