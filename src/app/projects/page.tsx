import React from 'react';
import { Stack } from '@mui/material';
import { HeroSection } from '@/components/organism/HeroSection/HeroSection';
import { EventCard } from '@/components/organism/EventCard/EventCard';

const EventsPage: React.FC = () => {
  return (
    <Stack sx={{ flex: 1, minWidth: '100vh' }}>
      <HeroSection title={'Proiecte'} />
      <EventCard title={'SVS SESSIONS'} image='' altImage='Image not found' description={'SVS Sessions aduce în fața participanților studenți entuziaști și experimentați care împărtășesc povestea lor personală. Acești studenți vorbesc despre facultatea la care sunt înscrisi, descriind programele de studiu, materiile și opțiunile extracurriculare disponibile.'}></EventCard>
    </Stack>
  );
};

export default EventsPage;