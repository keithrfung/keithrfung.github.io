/** @jsx jsx */
import { jsx } from "theme-ui";

import { Link as GatsbyLink } from "gatsby";

export default function Link(props: any) {
  return (
    <GatsbyLink
      {...props}
      sx={{
        // this uses the value from `theme.space[4]`
        height: 100,
        // these use values from `theme.colors`
        color: "primary",
        backgroundColor: "secondary",
        textDecoration: "none",
      }}
    >
      {props.children}
    </GatsbyLink>
  );
}
