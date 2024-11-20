"use client";
import { Montserrat, Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

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
    main: "#06255b",
    light: "#3e485a",
    dark: "#22375a",
  },
  secondary: {
    main: "#f8af7a",
    light: "#f9d5bc",
    dark: "#f56100",
  },
  common: {
    white: "#ffffff",
    black: "#000000",
  },
  grey: {
    300: "#ebebeb",
    900: "#212121",
  },
  info: {
    main: "#e9f9ff",
  },
};
const typography = {
  h3: {
    fontSize: 49,
    fontWeight: 500,
    fontFamily: roboto.style.fontFamily,
  },
  h4: {
    fontSize: 35,
    fontWeight: 500,
    fontFamily: roboto.style.fontFamily,
  },
  h5: {
    fontSize: 24,
    fontWeight: 500,
    fontFamily: roboto.style.fontFamily,
  },
  body1: {
    fontSize: 16,
    fontFamily: roboto.style.fontFamily,
  },
};
const theme = createTheme({
  palette: colorPalette,
  typography: typography,
  components: {
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 11,
          height: "40px",
        },

        text: {
          color: colorPalette.common.white,
          fontSize: "16px",
          "&:hover": {
            color: colorPalette.secondary.dark,
            backgroundColor: "transparent",
          },
        },

        outlined: {
          borderColor: colorPalette.common.white,
          color: colorPalette.common.white,
          fontSize: "16px",
          "&:hover": {
            color: colorPalette.secondary.dark,
            borderColor: colorPalette.secondary.dark,
          },
        },

        contained: {
          backgroundColor: colorPalette.primary.main,
          color: colorPalette.common.white,
          fontSize: "16px",
          "&:hover": {
            backgroundColor: colorPalette.secondary.dark,
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: colorPalette.common.white,
          underline: "hover",
          alignContent: "center",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "50px 0px",
        },
      },
    },
  },
});

export default theme;
