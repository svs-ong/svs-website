'use client';
import React from 'react';
import theme from '@/theme';
import { Box, Container, ContainerProps, Typography } from '@mui/material';
import { SectionVariants } from './types';

interface SectionProps {
  variant: SectionVariants;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ variant, children }) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case SectionVariants.white:
        return theme.palette.common.white;
      case SectionVariants.primary:
        return theme.palette.primary.main;
      default:
        return theme.palette.primary.main;
    }
  };

  return (
    <Box sx={{ flexgrow: 1, backgroundColor: getBackgroundColor(), padding: '20px'}}>
      <Container sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
        {children}
      </Container>
    </Box>
  );
};
