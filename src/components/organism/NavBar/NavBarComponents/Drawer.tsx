'use client';
import React, { useState } from 'react';
import { Stack, Button, Drawer, Box, Divider, useTheme, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import DrawerHeader from '@/components/organism/NavBar/NavBarComponents/DrawerHeader';
import NavConfig from '@/components/organism/NavBar/NavBarComponents/NavConfig';

const NavDrawer: React.FC<any> = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <DrawerHeader handleDrawerClose={handleDrawerToggle} />
        <Divider sx={{ color: 'white' }} variant="fullWidth" textAlign="center" />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: theme.palette.primary.main,
            height: '100%',
          }}
        >
          <Stack
            alignContent="center"
            direction={'column'}
            justifyContent={'flex-start'}
            spacing={3}
            sx={{ paddingTop: '25px', flexGrow: 1 }}
          >
            {NavConfig.map((item) => (
              <Link key={item.href} href={item.href} passHref>
                <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
                  {item.label}
                </Button>
              </Link>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};
export default NavDrawer;
