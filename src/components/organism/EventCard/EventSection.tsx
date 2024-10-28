import React from "react";
import { EventCard } from "./EventCard";
import { Stack } from "@mui/material";
import { SectionVariants } from "@/components/atomic/Section/types";

interface EventSectionProps {
  title: string;
  description: string;
  image: string;
  altImage: string;
}

const EventsSection: React.FC<EventSectionProps> = ({ description, image, altImage, title }) => {
  return (
    <Stack>
      {[1, 2, 3, 4, 5, 6].map((_, index) => {
        const variant = index % 2 === 0 ? SectionVariants.white : SectionVariants.primary;

        return (
          <EventCard
            key={index}
            description={description}
            image={image}
            altImage={altImage}
            title={title}
            variant={variant}
          />
        );
      })}
    </Stack>
  );
};

export default EventsSection;
