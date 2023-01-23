/** @jsx jsx */
import { jsx } from "theme-ui";

import { FC } from "react";
import { motion } from "framer-motion";
import { Blob1, Blob2, Blob3, Blob4 } from "../svgs";

export const AnimatedBackground: FC = () => (
  <div
    sx={{
      left: 0,
      zIndex: 1,
      position: "absolute",
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
    }}
  >
    <motion.div
      style={{
        position: "absolute",
        x: 200,
        y: 800,
      }}
      animate={{
        x: -100,
        y: -500,
        transition: {
          repeatType: "reverse",
          repeat: Infinity,
          duration: 30,
          rotate: 20,
          ease: "linear",
        },
      }}
    >
      <Blob1 sx={{ height: 400, color: "watermelon" }} />
    </motion.div>
    <motion.div
      style={{
        position: "absolute",
        x: -200,
        y: 400,
      }}
      animate={{
        x: 800,
        y: 500,
        transition: {
          repeatType: "reverse",
          repeat: Infinity,
          duration: 30,
          rotate: 20,
          ease: "linear",
        },
      }}
    >
      <Blob2 sx={{ height: 300, color: "spiroDiscoBall" }} />
    </motion.div>
    <motion.div
      style={{
        position: "absolute",
        x: 1000,
        y: 1000,
      }}
      animate={{
        x: 1000,
        y: 0,
        transition: {
          repeatType: "reverse",
          repeat: Infinity,
          duration: 30,
          rotate: 20,
          ease: "linear",
        },
      }}
    >
      <Blob3 sx={{ height: 400, color: "verdigris" }} />
    </motion.div>
    <motion.div
      style={{
        position: "absolute",
        x: 200,
        y: -400,
      }}
      animate={{
        x: 200,
        y: 800,
        transition: {
          repeatType: "reverse",
          repeat: Infinity,
          duration: 30,
          rotate: 20,
          ease: "linear",
        },
      }}
    >
      <Blob4 sx={{ height: 450, color: "darkTopaz" }} />
    </motion.div>
  </div>
);

export default AnimatedBackground;
