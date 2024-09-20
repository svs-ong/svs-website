import React from 'react';
import { Container, Typography, useTheme } from '@mui/material';
import '/src/theme';

interface HeroSectionProps {
  title: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
  //   const theme = useTheme();
  return (
    <Container
      style={{
        backgroundColor: 'blue',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', //not working yaay !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      }}
      /* Nu pot adauga la backgroundColor: theme.palette.primary.main !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    Error: Cannot access palette.background on the server. You cannot dot into a client module from a server component.
    You can only pass the imported name through.
    */
    >
      <Typography
        variant="h3"
        color="background.paper"
        align="center"
        textAlign={'center'}
        fontStyle={'montserrat'} //cred ca ceva nu e bine aici pentru ca nu se schimba intre roboto si montserrat
      >
        {/* {title} !!!!!!!!!!!!!!!!!!!!!!*/}
        Despre noi
      </Typography>
    </Container>
  );
};
