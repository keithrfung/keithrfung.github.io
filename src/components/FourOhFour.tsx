/** @jsx jsx */
import { Box, jsx, Text } from "theme-ui";
import { FC } from "react";
import { Shaker } from "./Shaker";

export const FourOhFour: FC = () => (
  <Shaker>
    <Box sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
      <Text
        sx={{ textAlign: "center", fontSize: [9, 9, 10], color: "darkTopaz" }}
      >
        <span
          sx={{
            color: "verdigris",
          }}
        >
          4
        </span>
        0<span sx={{ color: "watermelon" }}>4</span>
      </Text>
    </Box>
  </Shaker>
);

export default FourOhFour;
