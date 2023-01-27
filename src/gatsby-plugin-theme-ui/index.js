const COLORS = {
  cultured: "#f8f8f8",
  spaceCadet: "#212650",
  purpleHeart: "#8957a0",
  darkLavender: "#724e96",
  diamond: "#c1e5f3",
  spiroDiscoBall: "#1abbee",
  topaz: "#fcd379",
  darkTopaz: "#f6b058",
  verdigris: "#4cbbab",
  watermelon: "#ea618c",
};

const theme = {
  colors: {
    text: COLORS.cultured,
    background: COLORS.spaceCadet,
    primary: COLORS.purpleHeart,
    secondary: COLORS.watermelon,
    ...COLORS,
  },
  fonts: {
    body: "Karla, sans-serif, serif",
    heading: "Montserrat, sans-serif, serif",
    monospace: "Karla, sans-serif, serif",
  },
  fontSizes: [
    "0.5rem",
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
  text: {
    default: {
      color: "text",
      fontFamily: "body",
    },
  },
  styles: {
    // the keys used here reference elements in MDX
    h1: {
      display: "flex",
      justifyContent: "center",
      fontFamily: "heading",
      fontSize: [6, 7, 8],
      margin: [2, 3, 3],
      marginBottom: 0,
    },
    h2: {
      display: "flex",
      justifyContent: "center",
      fontFamily: "heading",
      textAlign: "center",
      fontSize: [4, 5, 6],
      margin: [2, 3, 3],
    },
    h3: {
      display: "flex",
      justifyContent: "center",
      fontFamily: "heading",
      fontSize: [3, 4, 5],
    },
    p: {
      display: "flex",
      flex: 1,
      margin: "auto",
      maxWidth: 700,
      fontSize: [3, 4, 4],
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontFamily: "body",
    },
    a: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "body",
      color: COLORS.Verdigris,
      textStyle: "none",
      textDecoration: "none",
    },
  },
};

export default theme;
