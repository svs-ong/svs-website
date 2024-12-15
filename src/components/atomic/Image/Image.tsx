import React from 'react';
import { Box } from '@mui/material';
import NextImage, { StaticImageData } from 'next/image';

interface ImageProps {
  src: string | StaticImageData;
  alt: string;
  height?: number | string | { [key: string]: number | string };
  width?: number | string | { [key: string]: number | string };
}

export const Image: React.FC<ImageProps> = ({ src, alt, height = 'auto', width = '100%' }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: typeof width === 'object' ? width : { xs: '100%', md: width },
        height: typeof height === 'object' ? height : { xs: 'auto', md: height },
        overflow: 'hidden',
      }}
    >
      <NextImage src={src} alt={alt} layout="fill" objectFit="cover" />
    </Box>
  );
};
