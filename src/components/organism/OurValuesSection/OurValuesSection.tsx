'use client';
import React from 'react';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import theme from '@/theme';

interface OurValuesSectionProps {
    title: string;
    image: string[];
    values_title: string[];
    values_tesxt: string[];
}

export const OurValuesSection: React.FC<OurValuesSectionProps> = ({ title }) => {
    return (
        <Container
            maxWidth={false}
            sx={{
                backgroundColor: theme.palette.background.paper,
                height: '300px'
            }}
        >
            <Stack paddingBottom='164px'>

                <Typography
                    variant="h4"
                    color="primary.main"
                    align="center"
                    textAlign={'center'}
                    paddingBottom='45px'
                >
                    {title}
                </Typography>


                <Stack
                    direction='row'
                    spacing={20} // 160px spacing (20 * 8px) on both sides
                >
                    <Container
                        maxWidth={false}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: '400px',
                            width: '300px',
                        }}
                    >
                    </Container>
                    <Container
                        maxWidth={false}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: '400px',
                            width: '300px',
                        }}
                    >
                    </Container>
                    <Container
                        maxWidth={false}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            height: '400px',
                            width: '300px',
                        }}
                    >
                    </Container>
                </Stack>
            </Stack>
        </Container>
    );
};