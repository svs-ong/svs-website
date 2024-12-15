import React from 'react';
import { GenericSection } from '@/components/organism/GenericSection/GenericSection';
import { HeroSection } from '@/components/organism/HeroSection/HeroSection';
import { OurValuesSection } from '@/components/organism/OurValuesSection/OurValuesSection';
import TeamSection from '@/app/about/components/TeamSection/team-component';
import { Stack } from '@mui/material';
import VisionImage from '../../../public/images/about/Our-Vision-Image.jpg';
import VText from '@/app/about/VisionText.json';

const VISION_TEXT = VText.VisionText;

const HomePage: React.FC = () => {
  return (
    <Stack>
      <HeroSection title={'Despre Noi'} />
      <GenericSection
        title="Viziunea Noastră"
        description={VISION_TEXT}
        image={VisionImage}
        altImage="SvS-Vision-Image"
      />
      <OurValuesSection title="Valorile Noastre" />
      <TeamSection description="" imageUrl=""></TeamSection>
    </Stack>
  );
};

export default HomePage;
