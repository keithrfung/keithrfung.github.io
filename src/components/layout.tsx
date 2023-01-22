/** @jsx jsx */
import { Box, jsx } from "theme-ui";

import { FC } from "react";
import Header from "./header";
import Footer from "./footer";

export const Layout: FC<{ children: any }> = ({ children }) => (
  <Box style={{ height: "100vh", width: "100vw" }}>
    <Header />
    <Box
      sx={{
        height: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>{children}</Box>
    </Box>
    <Footer />
  </Box>
);

export default Layout;
