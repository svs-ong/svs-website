'use client';
import React from 'react';
import { Box, Container, Stack, Typography, useTheme } from '@mui/material';
import theme from '@/theme';
import { OurValuesCard } from './OurValuesCard';
import { StaticImageData } from 'next/image';
import AutenticitateImage from '../../../../public/images/about/Autenticitate-image.png';
import ComunitateImage from '../../../public/images/about/Comunitate-image.png';
import InclusivitateImage from '../../../public/images/about/Inclusivitate-image.png';

interface OurValuesSectionProps {
  title: string;
}

const AUTENTICITATE_TEXT: string[] = [
  'Perspectivele pe care le ofermim sunt reale și autentice, bazate pe experiențele noastre personale și profesionale. Credem în sinceritate și transparență în tot ceea ce facem.',
];

const INCLUSIVIATE_TEXT: string[] = [
  'Promovăm egalitatea în oportunități și ne angajăm să creăm un mediu în care toți tinerii, indiferent de origine, gen sau mediu socio-economic, să se simtă incluși și apreciați.',
];

const COMUNITATE_TEXT: string[] = [
  'Ne concentrăm pe formarea legăturilor umane puternice. Lucrăm împreună cu membrii și voluntarii noștri pentru a construi o comunitate unită și solidară, în care să învățăm unii de la alții. ',
];

export const OurValuesSection: React.FC<OurValuesSectionProps> = ({ title }) => {
  return (
    <Container
      sx={{
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Stack paddingBottom="164px">
        <Typography
          variant="h4"
          color="primary.main"
          align="center"
          textAlign={'center'}
          paddingBottom="45px"
        >
          {title}
        </Typography>

        <Stack
          direction="row"
          spacing={2} // 160px spacing (20 * 8px) on both sides
          justifyContent={'space-between'}
        >
          {[1, 2, 3].map(() => {
            return <OurValuesCard title={'pla'} description={'pla pla pla'} image={AutenticitateImage}></OurValuesCard>;
          })}
        </Stack>
      </Stack>
    </Container>
  );
};
