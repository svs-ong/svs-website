'use client';
import React from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import { TextStack } from '@/components/atomic/TextStack/TextStack';
import { Image } from '@/components/atomic/Image/Image';
import { Section } from '@/components/atomic/Section/Section';
import { SectionVariants } from '@/components/atomic/Section/types';
import { StaticImageData } from 'next/image';

interface GenericSectionProps {
  title: string;
  description: string[];
  image: string | StaticImageData;
  altImage: string;
}

export const GenericSection: React.FC<GenericSectionProps> = ({
  title,
  description,
  image,
  altImage,
}) => {
  const theme = useTheme();

  return (
    <Section variant={SectionVariants.white}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} gap="20px">
        <Image
          src={image}
          alt={altImage}
          width={{
            xs: '100%',
            sm: '100%',
            md: '147%',
          }}
          height={{
            xs: 250,
            sm: 350,
            md: 438,
          }}
        />

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
