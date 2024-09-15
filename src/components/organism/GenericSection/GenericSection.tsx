import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import { Roboto } from "next/font/google";
import { Box } from "@mui/material";
import { Interface } from "readline";
import { title } from "process";
import Image from "next/image";
import { TextStack } from "@/components/atomic/TextStack/TextStack";

interface GenericSectionProps {
  title: string;
  description: string[];
  image: string;
}

export const GenericSection: React.FC<GenericSectionProps> = ({ title, description, image }) => {
  return (
    <Container>
      <Stack
      direction="row"
      spacing={2}
      gap="20px"
    >
      <Image
      src={image}
      width={500}
      height={500}
      alt="Picture of the author"
      />
      <Stack
        direction="column"
        spacing={2}
      >
        <Typography variant="h4" color="primary" align="left">
          {title}
        </Typography>
        <TextStack paragraphs={description} gap={2}/>
      </Stack>

    </Stack>
    </Container>
  );
};
