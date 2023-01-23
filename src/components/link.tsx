/** @jsx jsx */
import { jsx } from "theme-ui";

import { Link as GatsbyLink } from "gatsby";

// (property) color?: StylePropertyValue<Property.Color | undefined>

export default function Link(props: any) {
  return (
    <GatsbyLink
      {...props}
      sx={{
        color: "diamond",
        textDecoration: "none",
        ":hover": { color: "secondary" },
      }}
    >
      {props.children}
    </GatsbyLink>
  );
}
