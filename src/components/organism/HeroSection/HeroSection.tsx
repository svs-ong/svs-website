'use client';
import React from 'react';
import { Container, Typography, useTheme } from '@mui/material';
import theme from '@/theme';
import { Section } from '@/components/atomic/Section/Section';
import { SectionVariants } from '@/components/atomic/Section/types';
import {Image} from '@/components/atomic/Image/Image'
import { StaticImageData } from 'next/image';

interface HeroSectionProps {
  title: string;
  image_url?: string | StaticImageData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title, image_url }) => {
  const backgroundImage = typeof image_url === 'string' ? image_url : image_url?.src; // Use .src for StaticImageData

  return (
    <Section
      variant={SectionVariants.primary}
      backgroundImage={backgroundImage} // Pass the background image as a string
    >
      <Typography variant="h3" color="background.paper" align="center" textAlign={'center'}>
        {title}
      </Typography>
    </Section>
  )
};
