import React from "react";
import { Box } from "@mui/material";
import NextImage from "next/image";

interface ImageProps {
    src: string;
    alt : string;
}

export const Image : React.FC<ImageProps> = ({src , alt}) =>{
    return (
        <Box sx={{position: "relative", width: "100%"}}>
            <NextImage
                src={src} 
                alt = {alt}
                layout="fill"
                objectFit="cover"
            />
        </Box>
    )
}