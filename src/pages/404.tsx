/** @jsx jsx */
import { jsx } from "theme-ui";

import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Link from "../components/link";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={{ height: "100%" }}>
      <h1
        sx={{
          // this uses the value from `theme.space[4]`
          fontSize: 3,
          padding: 4,
        }}
      >
        <span sx={{ fontSize: 4 }}>404</span>Page not found
      </h1>
      <p>
        Oops! You must be lost...
        <br />
        <Link to="/">Get back home</Link>
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
