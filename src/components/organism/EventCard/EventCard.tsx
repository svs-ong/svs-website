"use client";
import React from "react";
import { Section } from "@/components/atomic/Section/Section";
import { SectionVariants } from "@/components/atomic/Section/types";
import { TextStack } from "@/components/atomic/TextStack/TextStack";
import { Image } from "@/components/atomic/Image/Image";
import { Box, Stack, Typography } from "@mui/material";
import theme from "@/theme";

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  altImage: string;
}

export const EventCard: React.FC<EventCardProps> = ({ title, description, image, altImage }) => {
  return (
    <Section variant={SectionVariants.white}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/*  */}
        <Box sx={{ width: '500px', height: '150px', backgroundColor: theme.palette.secondary.main }}><Image src={image} alt={altImage}/></Box>
        <Stack direction="column" spacing={2}>
          <Typography variant="h5" color="primary" align="left">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Stack>
      </Stack>
    </Section>
  );
};
