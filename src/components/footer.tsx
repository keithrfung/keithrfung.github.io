/** @jsx jsx */
import { jsx, Text } from "theme-ui";

import { FC } from "react";

const linkStyle = { color: "spiroDiscoBall", textDecoration: "none" };

export const Footer: FC = () => (
  <footer
    sx={{
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      fontSize: [2, 3, 3],
      zIndex: 9999,
    }}
  >
    <Text>
      Designed & Developed by{" "}
      <a href="https://keithrfung.dev" sx={linkStyle}>
        Keith Fung
      </a>{" "}
      © 2023
    </Text>
    <Text sx={{ fontSize: [1, 2, 2] }}>
      Icons by{" "}
      <a
        href="https://freeicons.io/profile/823"
        aria-label="Muhammad Haq Profile"
        sx={linkStyle}
      >
        Muhammad Haq
      </a>{" "}
      from{" "}
      <a href="https://freeicons.io/" aria-label="Freeicons.io" sx={linkStyle}>
        freeicons.io
      </a>
    </Text>
  </footer>
);

export default Footer;
