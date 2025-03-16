import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          primary: {value: "#3CBEDB"},
          secondary: {value: "#6A7B88"},
          light: {value: "#E6E9EC"},
          dark: {value: "#666666"},
          surface: {value: "#FAFAFA"},
          background: {value: "#EBEDF5"},
          black: {value: "#222222"},
          gray: {value: "#CECECE"},
          50: { value: "#e6f2ff" }, // Backgrounds for hover states, very light highlights.
          100: { value: "#e6f2ff" }, // Backgrounds for subtle elements or hover states.
          200: { value: "#EBEDF5" }, // Background for inactive elements like sliders or progress bars.
          300: { value: "#99caff" },
          400: { value: "#66b3ff" },
          500: { value: "#ED654E" }, // Orange, The primary color used for solid buttons, links, active elements, and prominent UI accents.
          600: { value: "#0073e6" }, // Hover states for active elements like buttons or links.
          700: { value: "#ED654E" }, // Active states or pressed buttons.
          800: { value: "#003f80" }, // Dark blue
          900: { value: "#00264d" }, // Dark text on light backgrounds or subtle accents on dark themes.
          950: { value: "#6A7B88" }, // Rarely used, but for very dark UI elements or text on light backgrounds.
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.100}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)