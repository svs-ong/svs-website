'use client';
import React from 'react';
import { useScrollTrigger } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface ElevationProps {
  window?: () => Window;
  children?: React.ReactElement<any>;
}

const ElevationScroll: React.FC<ElevationProps> = ({ children, window }) => {
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children!, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger ? theme.palette.common.black : theme.palette.primary.main,
      transition: 'background-color 0.3s ease',
    },
  });
};

export default ElevationScroll;