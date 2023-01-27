/** @jsx jsx */
import { jsx } from "theme-ui";

import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, Transition } from "framer-motion";
import { blobs } from "../svgs";

const BLOB_RATIO = 0.25;
const BLOB_TRANSITION: Transition = {
  repeatType: "reverse",
  repeat: Infinity,
  duration: 30,
  rotate: 20,
  ease: "linear",
};

const blobVariations = [
  {
    color: "watermelon",
    startX: "20vw",
    startY: "0vh",
    endX: "100vw",
    endY: "100vh",
  },
  {
    color: "spiroDiscoBall",
    startX: "20vw",
    startY: "100vh",
    endX: "80vw",
    endY: "0vh",
    ease: "easeInOut",
  },
  {
    color: "verdigris",
    startX: "80vw",
    startY: "60vh",
    endX: "20vw",
    endY: "0vh",
  },
  {
    color: "darkTopaz",
    startX: "0vw",
    startY: "30vh",
    endX: "95vw",
    endY: "20vh",
  },
];

export const AnimatedBackground: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const blobHeight = height * BLOB_RATIO;

  useLayoutEffect(() => {
    if (ref.current) {
      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      if (ref.current) {
        setWidth(ref.current.clientWidth);
        setHeight(ref.current.clientHeight);
        console.log(height);
        console.log(width);
      }
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      ref={ref}
      sx={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        left: 0,
        top: 0,
        overflow: "hidden",
      }}
    >
      {blobs.map((Blob, index) => {
        const { color, startX, startY, endX, endY, ease } =
          blobVariations[index];
        return (
          <motion.div
            style={{
              position: "absolute",
              maxWidth: "fit-content",
            }}
            initial={{
              x: startX || "0vw",
              y: startY || "0vh",
            }}
            animate={{
              x: endX || "100vw",
              y: endY || "100vh",
              transition: BLOB_TRANSITION,
            }}
            transition={{
              repeatType: "reverse",
              repeat: Infinity,
              duration: 30,
              rotate: 20,
              ease: ease || "linear",
            }}
          >
            <Blob sx={{ height: blobHeight, color }} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedBackground;
