/** @jsx jsx */
import { Box, jsx, Text } from "theme-ui";

import { FC } from "react";
import Link from "./link";

export const Footer: FC = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      fontSize: [2, 3, 3],
      padding: [3, 4, 4],
    }}
  >
    <Text>
      Designed & Developed by{" "}
      <Link href="https://keithrfung.dev">Keith Fung</Link> © 2023
    </Text>
    <Text>
      Icons by{" "}
      <Link href="https://freeicons.io/profile/823" alt="Muhammad Haq Profile">
        Muhammad Haq
      </Link>{" "}
      from{" "}
      <Link href="https://freeicons.io/" alt="Freeicons.io">
        freeicons.io
      </Link>
    </Text>
  </Box>
);

export default Footer;
