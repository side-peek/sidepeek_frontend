import { extendTheme } from "@chakra-ui/react"
import { StyleFunctionProps, mode } from "@chakra-ui/theme-tools"

import "./fonts/index.css"

const themeConfig = {
  config: { initialColorMode: "light", useSystemColorMode: false },
  components: {
    Button: {
      variants: {
        smooth: {
          p: "0.3rem",
        },
      },
      defaultProps: {
        variant: "smooth",
      },
    },
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      html: {
        width: "100%",
        height: "100%",
        fontSize: "62.5%",
      },

      body: {
        bg: mode("white", "black.300")(props),
        color: mode("black", "white")(props),
        fontFamily: "SCDream_Regular",
      },
    }),
  },

  colors: {
    default: "#ffffff",
    blue: {
      100: "#0C356A",
      200: "#0174BE",
      300: "#1AA7EC",
    },
    yellow: {
      100: "#FFC436",
      200: "#FFF0CE",
    },
    black: {
      100: "#000000",
      200: "#161C1C",
      300: "#1E1E20",
      400: "#222222",
    },
    red: {
      100: "#f1121f",
      200: "#c1121f",
    },
    grey: {
      100: "#F0F0F0",
      200: "#ECECEC",
      300: "#D9D9D9",
      400: "#D4D4D4",
      500: "#7a7a7a",
    },
    whiteSmoke: "#f5f5f5",
  },
  fontWeights: {
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "1.75rem",
    "2xl": "2rem",
    "3xl": "3rem",
    "4xl": "4rem",
    "5xl": "5rem",
  },
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 20,
    fixed: 29,
    sticky: 30,
    banner: 40,
    overlay: 50,
    modal: 60,
    popover: 70,
    skipLink: 80,
    toast: 90,
    tooltip: 100,
    checkbox: 110,
  },
  sizes: {
    headerHeight: "9.5rem",
    coverHeight: "25rem",
    footerHeight: "19rem",
  },
  semanticTokens: {},
}

export const theme = extendTheme(themeConfig)
