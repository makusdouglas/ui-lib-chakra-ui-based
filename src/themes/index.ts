import {
  extendTheme,
  theme as chakraTheme,
  Theme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
const themes = {
  colors: {
    secondary: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
    zscan: {
      50: "#D0E6FF",
      100: "#B9DAFF",
      200: "#A2CDFF",
      300: "#7AB8FF",
      400: "#2E90FF",
      500: "#0078FF",
      600: "#0063D1",
      700: "#0052AC",
      800: "#003C7E",
      900: "#002C5C",
    },
  },
};

const theme = extendTheme(
  themes,
  withDefaultColorScheme({ colorScheme: "orange" })
);

export default theme;
