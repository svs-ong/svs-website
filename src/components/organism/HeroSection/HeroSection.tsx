'use client';
import React from 'react';
import { Container, Typography, useTheme } from '@mui/material';
import theme from '@/theme';

interface HeroSectionProps {
  title: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: theme.palette.primary.main,
        height: '300px',
      }}
    >
      <Typography
        variant="h3"
        color="background.paper"
        align="center"
        textAlign={'center'}
      >
        {title}
      </Typography>
    </Container>
  );
};
