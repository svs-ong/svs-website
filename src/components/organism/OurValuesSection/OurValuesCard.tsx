'use client';
import React from 'react';
import { Section } from '@/components/atomic/Section/Section';
import { SectionVariants } from '@/components/atomic/Section/types';
import { TextStack } from '@/components/atomic/TextStack/TextStack';
import { Image } from '@/components/atomic/Image/Image';
import { Box, Stack, Typography } from '@mui/material';
import { StaticImageData } from 'next/image';
import AutenticitateImage from '../../../../public/images/about/Autenticitate-image.png';
import theme from '@/theme';

interface OurValuesCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
}

export const OurValuesCard: React.FC<OurValuesCardProps> = ({ title, description, image }) => {
  return (
    <Stack
      sx={{
        backgroundColor: theme.palette.secondary.main,
        height: '400px',
        flexGrow: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        spacing: 2,
      }}
    >
      <Image src={image} alt={''} width={300}></Image>
      {title}
      {description}
    </Stack>
  );
};

export default OurValuesCard;
