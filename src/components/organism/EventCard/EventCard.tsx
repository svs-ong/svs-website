"use client";
import React from "react";
import { Section } from "@/components/atomic/Section/Section";
import { SectionVariants } from "@/components/atomic/Section/types";
import { TextStack } from "@/components/atomic/TextStack/TextStack";
import { Image } from "@/components/atomic/Image/Image";
import { Box, Stack, Typography } from "@mui/material";
import theme from "@/theme";
import { StaticImageData } from "next/image";


interface EventCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  altImage: string;
  variant: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  image,
  altImage,
  variant,
}) => {
  return (
    <Section variant={variant as SectionVariants}>
      <Stack
        direction={{md:"row", xs:"column"}}
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "500px", height: "150px" }}>
          <Image src={image} alt={altImage} height = {{xs:"150px", md:"150"}} width={{xs:"500", md: "500"}} />
        </Box>
        <Stack direction="column" spacing={2}>
          <Typography variant="h5" color="primary.black" align="left">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Stack>
      </Stack>
    </Section>
  );
};
