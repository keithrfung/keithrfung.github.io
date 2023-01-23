/** @jsx jsx */
import { Box, jsx } from "theme-ui";

import { FC } from "react";
import Header from "./header";
import Footer from "./footer";
import AnimatedBackground from "./AnimatedBackground";

export const Layout: FC<{ children: any }> = ({ children }) => (
  <Box
    sx={{
      minHeight: "100vh",
      maxWidth: "100vw",
      position: "relative",
    }}
  >
    <AnimatedBackground />
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        maxWidth: "100vw",
        padding: [3, 4, 4],
      }}
    >
      <Header />
      <main
        sx={{
          zIndex: 9999,
          width: "100%",
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </Box>
      </main>
      <Footer />
    </Box>
  </Box>
);

export default Layout;
