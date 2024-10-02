'use client'

import React from 'react';
import Grid2 from '@mui/material/Grid';
import { HeroSection } from '@/components/organism/HeroSection/HeroSection';
import TeamCard from '@/app/team-component'; // Adjust the import according to your file structure
import theme from '@/theme';
import { Typography, Container } from '@mui/material';

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


const TeamSection: React.FC<data> = ({ description, imageUrl }) => {
    return (
        
        <Grid2 
            container 
            spacing={2} 
            sx={{
                backgroundColor:theme.palette.primary.main,  
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'top', 
                height: '100vh' // Ensures the container takes the full height of the viewport
            }}
        >
            <Grid2>
            <Container
                maxWidth={false}
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    height: '10px',
                }}
                >
                <Typography
                    variant="h3"
                    color="background.paper"
                    align="center"
                    textAlign={'center'}
                >
                    Echipa Noastra
                </Typography>
            </Container>
            </Grid2>
            <Grid2 item xs={2}>
                <TeamCard description='Andrei' imageUrl=''/>
            </Grid2>
            <Grid2 item xs={2}>
                <TeamCard description='Andrei' imageUrl=''/>
            </Grid2>
            <Grid2 item xs={2}>
                <TeamCard description='Andrei' imageUrl=''/>
            </Grid2>
            <Grid2 item xs={2}>
                <TeamCard description='Andrei' imageUrl=''/>
            </Grid2>
        </Grid2>
    );
}

export default TeamSection;