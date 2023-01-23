/** @jsx jsx */
import { Box, jsx, Text } from "theme-ui";

import { FC } from "react";
import Link from "./link";

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
      <Link href="https://keithrfung.dev">Keith Fung</Link> © 2023
    </Text>
    <Text sx={{ fontSize: [1, 2, 2] }}>
      Icons by{" "}
      <Link href="https://freeicons.io/profile/823" alt="Muhammad Haq Profile">
        Muhammad Haq
      </Link>{" "}
      from{" "}
      <Link href="https://freeicons.io/" alt="Freeicons.io">
        freeicons.io
      </Link>
    </Text>
  </footer>
);

export default Footer;
