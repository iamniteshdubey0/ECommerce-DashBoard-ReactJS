import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// --jonquil: #f9c80eff;
// --giants-orange: #f86624ff;
// --teal: #087e8bff;
// --onyx: #3c3c3cff;
// --white-smoke: #f5f5f5ff;
// --success:#48E5C2;
// --error:#F44174,
// --warning:#F46036;

// --oxford-blue: #001d3d;
// --bright-pink-crayola: #ef476f;
// --sunglow: #ffd166;
// --emerald: #06d6a0;
// --neon-blue: #4361ee;

export const tokens = (mode) => ({
  ...(mode === "light"
    ? {
        secondary: {
          100: "#fef4cf",
          200: "#fde99f",
          300: "#fbde6e",
          400: "#fad33e",
          500: "#f9c80e",
          600: "#c7a00b",
          700: "#957808",
          800: "#645006",
          900: "#322803",
        },
        primary: {
          100: "#fee0d3",
          200: "#fcc2a7",
          300: "#fba37c",
          400: "#f98550",
          500: "#f86624",
          600: "#c6521d",
          700: "#953d16",
          800: "#63290e",
          900: "#321407",
        },
        teal: {
          100: "#cee5e8",
          200: "#9ccbd1",
          300: "#6bb2b9",
          400: "#3998a2",
          500: "#087e8b",
          600: "#06656f",
          700: "#054c53",
          800: "#033238",
          900: "#02191c",
        },
        oxfordBlue: {
          100: "#ccd2d8",
          200: "#99a5b1",
          300: "#66778b",
          400: "#334a64",
          500: "#001d3d",
          600: "#001731",
          700: "#001125",
          800: "#000c18",
          900: "#00060c",
        },
        whiteSmoke: {
          100: "#fdfdfd",
          200: "#fbfbfb",
          300: "#f9f9f9",
          400: "#f7f7f7",
          500: "#f5f5f5",
          600: "#c4c4c4",
          700: "#939393",
          800: "#626262",
          900: "#313131",
        },
        success: {
          100: "#dafaf3",
          200: "#b6f5e7",
          300: "#91efda",
          400: "#6deace",
          500: "#48e5c2",
          600: "#3ab79b",
          700: "#2b8974",
          800: "#1d5c4e",
          900: "#0e2e27",
        },
        error: {
          100: "#fdd9e3",
          200: "#fbb3c7",
          300: "#f88dac",
          400: "#f66790",
          500: "#f44174",
          600: "#c3345d",
          700: "#922746",
          800: "#621a2e",
          900: "#310d17",
        },
        warning: {
          100: "#fddfd7",
          200: "#fbbfaf",
          300: "#f8a086",
          400: "#f6805e",
          500: "#f46036",
          600: "#c34d2b",
          700: "#923a20",
          800: "#622616",
          900: "#31130b",
        },
      }
    : {
        secondary: {
          100: "#322803",
          200: "#645006",
          300: "#957808",
          400: "#c7a00b",
          500: "#f9c80e",
          600: "#fad33e",
          700: "#fbde6e",
          800: "#fde99f",
          900: "#fef4cf",
        },
        primary: {
          100: "#321407",
          200: "#63290e",
          300: "#953d16",
          400: "#c6521d",
          500: "#f86624",
          600: "#f98550",
          700: "#fba37c",
          800: "#fcc2a7",
          900: "#fee0d3",
        },
        teal: {
          100: "#02191c",
          200: "#033238",
          300: "#054c53",
          400: "#06656f",
          500: "#087e8b",
          600: "#3998a2",
          700: "#6bb2b9",
          800: "#9ccbd1",
          900: "#cee5e8",
        },
        oxfordBlue: {
          100: "#00060c",
          200: "#000c18",
          300: "#001125",
          400: "#001731",
          500: "#001d3d",
          600: "#334a64",
          700: "#66778b",
          800: "#99a5b1",
          900: "#ccd2d8",
        },
        whiteSmoke: {
          100: "#313131",
          200: "#626262",
          300: "#939393",
          400: "#c4c4c4",
          500: "#f5f5f5",
          600: "#f7f7f7",
          700: "#f9f9f9",
          800: "#fbfbfb",
          900: "#fdfdfd",
        },
        success: {
          100: "#0e2e27",
          200: "#1d5c4e",
          300: "#2b8974",
          400: "#3ab79b",
          500: "#48e5c2",
          600: "#6deace",
          700: "#91efda",
          800: "#b6f5e7",
          900: "#dafaf3",
        },
        error: {
          100: "#310d17",
          200: "#621a2e",
          300: "#922746",
          400: "#c3345d",
          500: "#f44174",
          600: "#f66790",
          700: "#f88dac",
          800: "#fbb3c7",
          900: "#fdd9e3",
        },
        warning: {
          100: "#31130b",
          200: "#622616",
          300: "#923a20",
          400: "#c34d2b",
          500: "#f46036",
          600: "#f6805e",
          700: "#f8a086",
          800: "#fbbfaf",
          900: "#fddfd7",
        },
      }),
});

// MUI theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.teal[700],
              main: colors.teal[500],
              light: colors.teal[100],
            },
            whiteSmoke: {
              dark: colors.whiteSmoke[700],
              main: colors.whiteSmoke[500],
              light: colors.whiteSmoke[100],
            },
            success: {
              dark: "#049570",
              main: "#06d6a0",
              light: "#37deb3",
            },
            error: {
              dark: "#a7314d",
              main: "#ef476f",
              light: "#f26b8b",
            },
            warning: {
              dark: "#b29247",
              main: "#ffd166",
              light: "#ffda84",
            },
            neonBlue: {
              dark: "#2e43a6",
              main: "#4361ee",
              light: "#6880f1",
            },
            oxfordBlue: {
              dark: colors.oxfordBlue[700],
              main: colors.oxfordBlue[500],
              light: colors.oxfordBlue[100],
            },
            background: {
              default: colors.whiteSmoke[500],
            },
          }
        : {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.teal[700],
              main: colors.teal[500],
              light: colors.teal[100],
            },
            whiteSmoke: {
              dark: colors.whiteSmoke[700],
              main: colors.whiteSmoke[500],
              light: colors.whiteSmoke[100],
            },
            success: {
              dark: "#049570",
              main: "#06d6a0",
              light: "#37deb3",
            },
            error: {
              dark: "#a7314d",
              main: "#ef476f",
              light: "#f26b8b",
            },
            warning: {
              dark: "#b29247",
              main: "#ffd166",
              light: "#ffda84",
            },
            neonBlue: {
              dark: "#2e43a6",
              main: "#4361ee",
              light: "#6880f1",
            },
            oxfordBlue: {
              dark: colors.oxfordBlue[700],
              main: colors.oxfordBlue[500],
              light: colors.oxfordBlue[100],
            },
            background: {
              default: colors.oxfordBlue[500],
            },
          }),
    },
    typography: {
      fontFamily: ["Ubuntu", "Arial"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Ubuntu", "Arial"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Ubuntu", "Arial"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Ubuntu", "Arial"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Ubuntu", "Arial"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Ubuntu", "Arial"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Ubuntu", "Arial"].join(","),
        fontSize: 14,
      },
    },
  };
};

// Context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
