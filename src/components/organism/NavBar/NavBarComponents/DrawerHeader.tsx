'use client';
import React from 'react';
import { Typography, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface DrawerHeaderProps {
  handleDrawerClose: () => any;
}

const DrawerHeader: React.FC<DrawerHeaderProps> = ({ handleDrawerClose }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding : "20px",
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <Typography variant="h6" sx={{ color: 'white' }}>
        Menu
      </Typography>
      <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
};
export default DrawerHeader;
