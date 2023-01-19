/** @jsx jsx */
import { jsx } from "theme-ui";

import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Link from "../components/link";

const Profile: React.FC<PageProps> = () => {
  return (
    <main
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <h1>Keith Fung</h1>
      <h2>Software Developer • Tech Enthusiast • Late Night Gamer</h2>
      <p>
        Oops! You must be lost...
        <br />
        <Link to="/">Get back home</Link>
      </p>
    </main>
  );
};

export default Profile;
