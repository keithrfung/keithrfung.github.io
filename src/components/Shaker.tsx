import React, { FC, ReactElement } from "react";
import { motion } from "framer-motion";

export interface ShakerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Shaker: FC<ShakerProps> = (props) => (
  <motion.div
    style={{ display: "inline-block", ...props.style }}
    animate={{
      rotate: [0, -8, 8, 0],
      transition: { duration: 0.2, repeat: 2, repeatType: "loop" },
    }}
  >
    {props.children}
  </motion.div>
);
