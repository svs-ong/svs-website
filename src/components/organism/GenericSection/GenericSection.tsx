import React from "react";
import { Stack, Typography } from "@mui/material";
import { TextStack } from "@/components/atomic/TextStack/TextStack";
import { Image } from "@/components/atomic/Image/Image";
import { Section } from "@/components/atomic/Section/Section";
import { SectionVariants } from "@/components/atomic/Section/types";
import { ImageData } from "@/model/imageData";

interface GenericSectionProps {
  title: string;
  description: string[];
  image: ImageData;
}

export const GenericSection: React.FC<GenericSectionProps> = ({ title, description, image }) => {
  return (
    <Section variant={SectionVariants.white}>
      <Stack direction="row" spacing={2} gap="20px">
        <Image image={image} />
        <Stack direction="column" spacing={2}>
          <Typography variant="h4" color="primary" align="left">
            {title}
          </Typography>
          <TextStack paragraphs={description} gap={2} />
        </Stack>
      </Stack>
    </Section>
  );
};
