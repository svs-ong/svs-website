import React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import { Roboto } from 'next/font/google';
import { Box } from '@mui/material';
import { GenericSection } from '@/components/organism/GenericSection/GenericSection';
import { HeroSection } from '@/components/organism/HeroSection/HeroSection';
import TeamCard from "@/app/team-component";

const VISION_TEXT: string[] = [
  `Viziunea Noastră Visăm la o lume în care învățăm împreună, punând un accent deosebit pe educație. 
      Viziunea noastră extinde educația dincolo de școli și universități, cultivând curiozitatea, gândirea 
      critică și promovând învățarea continuă pe tot parcursul vieții.`,
  `Ne propunem să organizăm evenimente în care elevii și studenții pot beneficia de experiența profesională a voluntarilor noștri din diverse 
      domenii, oferindu-le sfaturi și îndrumări valoroase pentru dezvoltarea carierei lor. Alături de 
      profesori, părinți, școli și alte instituții, dorim să implicăm cat mai mult societatea in educația 
      tinerilor.`,
  `Suntem conștienți că exemplul pe care îl dăm în calitate de membri și voluntari ai SVS este 
      esențial pentru a influența și inspira pe cei din jurul nostru. Ne străduim să fim modele autentice, 
      trăind valorile pe care le promovăm și implicându-ne activ în comunitate.`,
  `Ne angajăm să fim un factor de schimbare pozitivă în educație. Alătură-te nouă în această călătorie și să fim împreună forța 
      care schimbă viitorul educației în România!`,
];
const VISION_IMAGE: string = `/images/about/Our-Vision-Image.jpg`;
const VISION_TITLE_TEXT: string = `Viziunea Noastră`;
const HomePage: React.FC = () => {
  return (
    // <Stack sx={{ flex: 1, minWidth: '100vh' }}>
    <>
      <HeroSection title={'Despre Noi'} />
      <GenericSection
        title={VISION_TITLE_TEXT}
        description={VISION_TEXT}
        image={VISION_IMAGE}
        altImage="SvS-Vision-Image"
      />
      <TeamCard description='Andrei' imageUrl=''></TeamCard>
    </>
    // </Stack>
  );
};

export default HomePage;
