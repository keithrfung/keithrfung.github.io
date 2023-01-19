import React, { FC } from "react";
import { motion } from "framer-motion";

export const Layout: FC<{ children: any }> = ({ children }) => (
  <motion.div
    animate={{ height: ["0%", "100%"] }}
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
    style={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <motion.div
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
    />
    <div>{children}</div>
  </motion.div>
);

export default Layout;
