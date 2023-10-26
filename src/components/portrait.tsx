/** @jsx jsx */
import { Box, jsx } from "theme-ui";

import { FC } from "react";
import { motion } from "framer-motion";

export const Portrait: FC = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <motion.img
      animate={{ width: ["0%", "40%"] }}
      transition={{ duration: 0.5 }}
      sx={{ width: "40%", clipPath: "circle(50% at center)" }}
      src="https://1.gravatar.com/avatar/2ed0a4ec4005392d9eb57e61d9efbbb2?size=800"
      alt="Artistic Portrait of Keith Fung"
    />
  </Box>
);

export default Portrait;
