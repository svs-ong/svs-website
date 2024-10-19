import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { ImageData } from "@/model/imageData";
import NextImage from "next/image";

interface ImageProps {
  image?: ImageData;
  children?: ReactNode;
}

export const Image: React.FC<ImageProps> = ({ image, children }) => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {image && (
        <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
          <NextImage src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
        </Box>
      )}
      <Box sx={{ position: "relative" }}>{children}</Box>
    </Box>
  );
};
