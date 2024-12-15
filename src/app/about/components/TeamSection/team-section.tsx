'use client';

import React from 'react';
import { Grid2 } from '@mui/material';
import TeamCard from '@/app/about/components/TeamSection/team-component';
import theme from '@/theme';
import { Typography, Container, Box, Stack } from '@mui/material';
import { Section } from '@/components/atomic/Section/Section';
import { SectionVariants } from '@/components/atomic/Section/types';

interface data {
  description: string;
  imageUrl: string;
}

const mockData = [
  {
    description: 'This is a description for card 1.',
    imageUrl: 'https://via.placeholder.com/240',
  },
  {
    description: 'This is a description for card 2.',
    imageUrl: 'https://via.placeholder.com/240',
  },
];

const TeamSection: React.FC<data> = ({ description, imageUrl }) => {
  return (
    <Section variant={SectionVariants.primary}>
      <Stack gap="100px">
        <Typography variant="h3" color="black" align="center" textAlign={'center'}>
          Echipa Noastra
        </Typography>
        <Grid2
          container
          spacing={2}
          sx={{
            justifyContent: '',
          }}
          direction={'row'}
        >
          {[1, 2, 3, 4, 5, 6].map((_, index) => {
            return (
              <Grid2>
                <TeamCard key={index} description="Andrei" imageUrl="" />
              </Grid2>
            );
          })}
        </Grid2>
      </Stack>
    </Section>
  );
};

export default TeamSection;
