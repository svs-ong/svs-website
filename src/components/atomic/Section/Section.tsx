'use client';
import React from 'react';
import theme from '@/theme';
enum SectionVariants {
  white = 'white',
  black = 'black',
  primary = 'primary',
  secondary = 'secondary',
}

interface SectionProps {
  marginBottom: number;
  marginTop: number;
  variant: SectionVariants;
  bgColor?: string;
}

const Section: React.FC<SectionProps> = ({ marginBottom, marginTop, variant, bgColor }) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case SectionVariants.white:
        return theme.palette.common.white;

      case SectionVariants.black:
        return theme.palette.common.black;

      case SectionVariants.primary:
        return theme.palette.primary.main;

      case SectionVariants.secondary:
        return theme.palette.secondary.main;
      default:
        return bgColor || 'transparent';
    }
  };
  return <>GIT</>;
};
export default Section;
