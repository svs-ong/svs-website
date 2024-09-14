"use client";
import { Montserrat, Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const colorPalette = {
  primary: {
    main: "#002459",
    light: "#1F3659",
    dark: "#3D4859",
  },
  background: {
    paper: "#FFFFFF",
    default: "#000000",
  },
  secondary: {
    main: "#D9FCFA",
    light: "#EBFCFB",
    dark: "#C7FCF9",
  },
  action: {
    active: "#fc6400",
    hover: "#fc6400",
  },
}
const theme = createTheme({

  palette: colorPalette,

  typography: {

    subtitle1: {
      fontSize: 12,
    },

    body1: {
      fontWeight: 500,
    },

    button: {
      fontStyle: 'bold',
    },

  },
  components: {

    MuiIconButton:{
      defaultProps  :{
        disableRipple:true,
      },
    },

    MuiButton: {

      defaultProps  :{
        disableRipple:true,
      },

      styleOverrides: {
        root: {
          borderRadius: 11,
          height: "40px",
        },

        text: {  
          color: colorPalette.primary.main,
          fontSize: "16px",
          '&:hover': {
            color: colorPalette.action.active,
            backgroundColor: "transparent",
          },
        },

        outlined: {
          borderColor: colorPalette.background.paper,
          color: colorPalette.background.paper,
          fontSize: "16px",
          '&:hover': {
            backgroundColor: colorPalette.action.hover,
            color: colorPalette.background.paper,
            borderColor: colorPalette.action.hover,
          },
        },

        contained: {
          backgroundColor: colorPalette.primary.main,
          color: colorPalette.background.paper,
          fontSize: "16px",
          '&:hover': {
            backgroundColor: colorPalette.action.active,
          },
        },

      },
    },

  MuiLink: {
  styleOverrides: {
    root: {
      color: colorPalette.background.paper,
      underline: "none",
      alignContent: "center",
    },
  },
},

  MuiTypography: {
  styleOverrides: {
    root: {
      alignContent: "center",
    },
  },
},

  },
});

export default theme;
