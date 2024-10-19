import React from "react";
import { Stack } from "@mui/material";
import { GenericSection } from "@/components/organism/GenericSection/GenericSection";
import { HeroSection } from "@/components/organism/HeroSection/HeroSection";
import { OurValuesSection } from "@/components/organism/OurValuesSection/OurValuesSection";
import { ImageData } from "@/model/imageData";

const OUR_VISION_TITLE_TEXT: string = "Viziunea Noastră";
const OUR_VISION_TEXT: string[] = [
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
const OUR_VISION_IMAGE: ImageData = {
  src: `/images/about/Our-Vision-Image.jpg`,
  alt: "svs-our-vision-image",
};

const HERO_SECTION_TITLE: string = "Despre Noi";
const HERO_SECTION_IMAGE: ImageData = {
  src: `/images/about/Our-Vision-Image.jpg`,
  alt: "svs-hero-section-background-image",
};
const HomePage: React.FC = () => {
  return (
    <Stack>
      <HeroSection title={HERO_SECTION_TITLE} backgroundImage={HERO_SECTION_IMAGE} />
      <GenericSection
        title={OUR_VISION_TITLE_TEXT}
        description={OUR_VISION_TEXT}
        image={OUR_VISION_IMAGE}
      />
      <OurValuesSection title={"Valorile Noastre"} />
    </Stack>
  );
};

export default HomePage;
