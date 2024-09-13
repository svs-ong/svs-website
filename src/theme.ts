'use client';
import { Montserrat, Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#002459',
      light: '#1F3659',
      dark: '#3D4859',
    },
    background: {
      paper: '#FFFFFF',
      default: '#000',
    },
    secondary: {
      main: '#D9FCFA',
      light: '#EBFCFB',
      dark: '#C7FCF9',
    },
    action: {
      active: 'rgba(252,100,0,1)',
      hover: 'rgba(252,100,0,0.7)',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'Roboto', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
            borderRadius:11,
            height:'30px',
          '&:hover': {
            backgroundColor: 'rgba(252,100,0,1)',
            color: '#FFF',
            borderColor: 'rgba(252,100,0,1)',
          },
        },
      },
    },
    MuiLink: {
        styleOverrides: {
          root: {
            color: '#FFFFFF', 
            underline:'none' ,
            alignContent:'center',
          },
      },
    },
    MuiTypography:{
        styleOverrides:{
            root:{
                alignContent:'center',
            }
        }
    }
  },
});

export default theme;
