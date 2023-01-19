const COLORS = {
  cultured: "#f8f8f8",
  spaceCadet: "#212650",
  purpleHeart: "#724e96",
  darkLavender: "#724e96",
  diamond: "#c1e5f3",
  spiroDiscoBall: "#1abbee",
  topaz: "#fcd379",
  darkTopaz: "#f6b058",
  Verdigris: "#4cbbab",
  Watermelon: "#ea618c",
};

const theme = {
  colors: {
    text: COLORS.cultured,
    background: COLORS.spaceCadet,
    primary: COLORS.purpleHeart,
    secondary: COLORS.spiroDiscoBall,
    accent: "#609",
    muted: "#f6f6f6",
  },
  fonts: {
    body: "-apple-system, Roboto, sans-serif, serif",
    heading: "-apple-system, Roboto, sans-serif, serif",
    monospace: "-apple-system, Roboto, sans-serif, serif",
  },
  fontSizes: [
    "0.75rem",
    "0.875rem",
    "1rem",
    "1.125rem",
    "1.5rem",
    "2rem",
    "3rem",
    "4rem",
    "4.5rem",
    "8rem",
  ],

  styles: {
    // the keys used here reference elements in MDX
    h1: {
      display: "flex",
      justifyContent: "center",
      fontFamily: "heading",
      fontSize: [8, 8, 9],
    },
    h2: {
      display: "flex",
      justifyContent: "center",
      fontFamily: "heading",
    },
    p: {
      display: "flex",
      flex: 1,
      margin: 3,
      maxWidth: 700,
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "body",
    },
    a: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "body",
      color: COLORS.muted,
      textStyle: "none",
      textDecoration: "none",
    },
  },
};

export default theme;
