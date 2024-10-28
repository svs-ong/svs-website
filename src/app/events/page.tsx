import React from 'react';
import { Stack } from '@mui/material';
import { HeroSection } from '@/components/organism/HeroSection/HeroSection';
import { EventCard } from '@/components/organism/EventCard/EventCard';

const OUR_PROJECTS_TITLE: string='Proiecte'
const OUR_PROJECTS_CARD_TITLE: string='SVS SESSIONS'
const OUR_PROJECTS_CARD_DESCRIPTION: string='SVS Sessions aduce în fața participanților studenți entuziaști și experimentați care împărtășesc povestea lor personală. Acești studenți vorbesc despre facultatea la care sunt înscrisi, descriind programele de studiu, materiile și opțiunile extracurriculare disponibile.'
const OUR_PROJECTS_CARD_IMAGE: string=''
const OUR_PROJECTS_CARD_IMAGE_ALT: string='Image not found'

const EventsPage: React.FC = () => {
  return (
    <Stack>
      <HeroSection title={OUR_PROJECTS_TITLE} />
      <EventCard title={OUR_PROJECTS_CARD_TITLE} image={OUR_PROJECTS_CARD_IMAGE} altImage={OUR_PROJECTS_CARD_IMAGE_ALT} description={OUR_PROJECTS_CARD_DESCRIPTION}></EventCard>
    </Stack>
  );
};

export default EventsPage;