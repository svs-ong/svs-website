import React from "react";
import { Box } from "@mui/material";
import NextImage, { StaticImageData } from "next/image";

interface ImageProps {
  src: string | StaticImageData;
  alt: string;
  height?: any;
  width?: number;
}

/*
Ensures consistency and propper scailing with image components.
Be sure to use the image component when working with images.

* `Image` component renders an optimized and responsive image using Next.js's `NextImage` component.
 * It ensures proper scaling and layout for images while maintaining a flexible container.
 *
 * @param {Object} props - The component props.
 * @param {string | StaticImageData} props.src - The source of the image, either a URL (string) or static image data.
 * @param {string} props.alt - The alternative text for the image, important for accessibility.
 * @param {any} [props.height] - The optional height of the image. If not provided, the image scales automatically.
 * @param {number} [props.width] - The optional width of the image. If not provided, the image scales automatically.
 *
 * @returns {React.ReactElement} The rendered image wrapped in a `Box` container with proper scaling and responsiveness.
 */

export const Image: React.FC<ImageProps> = ({ src, alt, height, width }) => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <NextImage height={height} width={width} src={src} alt={alt} objectFit="cover" />
    </Box>
  );
};
