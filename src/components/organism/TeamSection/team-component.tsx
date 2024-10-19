'use client'

import React from "react";
import {Stack, Typography,Box, Container} from "@mui/material";
import { Image } from "@/components/atomic/Image/Image";
import theme from "@/theme";


interface data {
    description: string;
    imageUrl: string;
}

const mockData = [
    {
        description: "This is a description for card 1.",
        imageUrl: "https://via.placeholder.com/240",
    },
    {
        description: "This is a description for card 2.",
        imageUrl: "https://via.placeholder.com/240",
    },
];

const TeamCard: React.FC<data> = ({ description, imageUrl }) => {
    return (
      <Box sx={{flexGrow:1}}>
        <Stack
          sx={{ width: 240, height: 300, justifyContent: 'center', alignItems: 'center' }}
          direction={'column'}
          spacing={1}
        >
          {/* <Image src={imageUrl} alt="Image not found!"/> */}
          <Box
            sx={{ width: 240, height: 240, backgroundColor: theme.palette.secondary.main }}
          ></Box>
          <Typography variant="h5">{description}</Typography>
        </Stack>
      </Box>
    );
}
export default TeamCard;