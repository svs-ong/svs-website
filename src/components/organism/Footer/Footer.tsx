"use client";
import React from "react";
import {
  Typography,
  Stack,
  IconButton,
  Box,
} from "@mui/material";
;
import Link from "next/link";
// import Image from "next/image";
// import Logo from "@/components/svsLogo.png";
import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';


import { useTheme } from "@mui/material/styles"
const Footer: React.FC = () => {
    const theme = useTheme();
    {/* Please find a way to split your code. You can make subcomponents of Footer */}
    return (
        <Box 
        sx={{
          height: "200px",
          margin: "0",
          bottom: "0",
          padding: " 0 178px",
          backgroundColor: theme.palette.primary.main,
        }}
        >

        
        <Stack
          direction="column"
          justifyContent="space-between"
          paddingLeft="160px"
        >
          <Typography variant="body1" sx={{ alignContent: "center", paddingBottom: "14px", paddingRight: "47px" }}>Linkuri</Typography>
          <Link href={"/proiecte"}>
          <Typography variant="body2">Proiecte</Typography>
          </Link>
          <Link href={"/about_us"}>
          <Typography variant="body2">Despre noi</Typography>
          </Link>
          <Link href={"/redirect"}>
          <Typography variant="body2">Redirectionaza 3.5%</Typography>
          </Link>
        </Stack>

        <Stack
        direction="column"
        justifyContent="space-between"
        >
          <Typography variant="body1" sx={{ alignContent: "center", paddingBottom: "14px", paddingRight: "47px" }}>CONTACTREAZA_NE</Typography>
          <Typography variant="body2">contatc@svs.ong</Typography>
        </Stack>

        <Stack
        direction="column"
        justifyContent="space-between"
        >
        <Typography variant="body1" sx={{ alignContent: "center", paddingBottom: "14px" }}>Resurse</Typography>
          <Link href={"/statut"}>
          <Typography variant="body2">Statut</Typography>
          </Link>
          <Link href={"/join_us"}>
          <Typography variant="body2">Intra in echipa nostra</Typography>
          </Link>
        </Stack>


        <Stack
        paddingRight="160px"
        direction="row"
        justifyContent="space-between"
        >
          <Link href="https://www.instagram.com/studentipentruviitoristudenti/">
        <IconButton color="primary" sx={{
                padding: "0",
                height: "auto",
                width: "auto",
            
              }}>
                {/* Use this instead of image */}
                <InstagramIcon/>

                
              {/* <Image
                src={InstagramIcon}
                alt={""}
                height={20}
                width={20}
              /> */}
              


              </IconButton>
              </Link>

              <Link href="https://www.facebook.com/studenti.pentru.viitori.studenti">
        <IconButton color="primary" sx={{
                padding: "0",
                height: "auto",
                width: "auto",
              }}>
              
              {/* 
              
              <Image
                src={FacebookIcon}
                alt={""}
                height={20}
                width={20}
              /> */}
              </IconButton>
              </Link>

              <Link href="https://www.youtube.com/@SVS-ONG">
        <IconButton color="primary" sx={{
                padding: "0",
                height: "auto",
                width: "auto",
              }}>

              {/* <Image
                src={YoutubeIcon}
                alt={""}
                height={20}
                width={20}
              /> */}
              </IconButton>
              </Link>

              <Link href="https://www.linkedin.com/company/asociatia-svs/">
            <IconButton color="primary" sx={{
                padding: "0",
                height: "auto",
                width: "auto",
              }}>
              {/* <Image
                src={LinkedInIcon}
                alt={""}
                height={20}
                width={20}
              /> */}
              </IconButton>
              </Link>
        </Stack>
      </Box>
    )
}

export default Footer;