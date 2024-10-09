'use client';
import React from 'react';
import { Section } from '@/components/atomic/Section/Section';
import { SectionVariants } from '@/components/atomic/Section/types';
import { TextStack } from '@/components/atomic/TextStack/TextStack';
import { Image } from '@/components/atomic/Image/Image';
import { Stack, Typography } from '@mui/material';

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  altImage: string;
}

export const EventCard: React.FC<EventCardProps> = ({ title, description, image, altImage }) => {
  return (
    <Section variant={SectionVariants.primary} >
      <Stack direction="row" spacing={2}>
        <Image src={image} alt={altImage} />
        <Stack direction="column" spacing={2}>
          <Typography variant="h6" color="primary" align="left">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </Stack>
      </Stack>
    </Section>
  );
};
