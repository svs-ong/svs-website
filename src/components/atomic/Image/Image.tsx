import React from "react";
import { Box } from "@mui/material";
import NextImage, { StaticImageData } from "next/image";

interface ImageProps {
  src: string | StaticImageData;
  alt: string;
  height?: any;
  width?: number;
}

export const Image: React.FC<ImageProps> = ({ src, alt, height, width }) => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <NextImage height={height} width={width} src={src} alt={alt} objectFit="cover" />
    </Box>
  );
};
