
'use client';
import React from "react";
import { AppBar, Typography, useScrollTrigger, Toolbar, Stack, IconButton, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

interface Props {
    window?: () => Window;
    children?: React.ReactElement<any>;
}

function ElevationScroll(props: Props) {
    const { children, window } = props;

    const theme = useTheme();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children!, {
        elevation : trigger ? 4 : 0,
        style: {
            backgroundColor: trigger
                ? theme.palette.background.default
                : theme.palette.primary.main,
            transition: "background-color 0.3s ease",
        },
    });
}

const NavBar: React.FC = () => {
    return (
        <ElevationScroll>
            <AppBar position="sticky"
                sx={{
                    height: '64px',
                    margin: '0 auto',
                    padding: ' 0 40px',
                    justifyItems: "center",
                }}>
                <Stack direction="row"
                    alignItems={"center"}
                    height='64px'
                    justifyContent={'space-between'}>

                    <Stack
                        alignContent="center"
                        direction={"row"}
                        justifyContent={"space-between"}
                        spacing={3}
                    >
                        <Link href='/' passHref style={{ textDecoration: 'none', alignContent:"center"}}>
                            <IconButton  color="primary" sx={{ alignContent: "center" }}>
                                <img src="https://www.svgrepo.com/show/520508/student.svg" height={"50px"} width={"50px"}>
                                </img>
                            </IconButton>
                        </Link>
                        <Typography variant="body1" sx={{alignContent:"center"}}>
                            Studenti Pentru Viitori Studenti
                        </Typography>

                    </Stack>

                    <Stack alignContent="center"
                        direction={"row"}
                        justifyContent={"space-between"}
                        spacing={3}
                    >
                        <Link href="#" passHref style={{ textDecoration: 'none', alignContent:"center"}}>
                            <Typography variant="body1" color="background.paper">
                                Acasa
                            </Typography>
                        </Link>
                        <Link href="/" passHref style={{ textDecoration: 'none', alignContent:"center"}}>
                            <Typography variant="body1" color="background.paper">
                                Proiecte
                            </Typography>
                        </Link>
                        <Link href="/" passHref style={{ textDecoration: 'none', alignContent:"center"}}>
                            <Typography variant="body1" color="background.paper">
                                Despre noi
                            </Typography>
                        </Link>
                        <Link href="/" passHref style={{ textDecoration: 'none', alignContent:"center"}}>
                            <Typography variant="body1" color="background.paper">
                                Redirectioneaza 3.5%
                            </Typography>
                        </Link>
                        <Link href='/join-us' passHref style={{ textDecoration: 'none', alignContent:"center"}}>
                            <Button variant="outlined" color="inherit" sx={{color:"white"}}>
                                Join Us
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </AppBar>
        </ElevationScroll>
    );
};

export default NavBar;
