/** @jsx jsx */
import { Box, jsx } from "theme-ui";

import { FC } from "react";

import { InstagramIcon, SpotifyIcon, GitHubIcon, LinkedInIcon } from "../svgs";
import Link from "./link";
import { Shaker } from "./Shaker";

const ICON_SIZE = [24, 32, 36];

const links = [
  {
    order: 4,
    href: "https://open.spotify.com/user/4mallyintroduced?si=05351fa14606442e",
    alt: "Spotify Profile",
    Icon: SpotifyIcon,
  },
  {
    order: 3,
    href: "https://instagram.com/keith.r.fung",
    alt: "Instagram Profile",
    Icon: InstagramIcon,
  },
  {
    order: 2,
    href: "https://github.com/keithrfung",
    alt: "Github Profile",
    Icon: GitHubIcon,
  },
  {
    order: 1,
    href: "https://linkedin.com/in/keithrfung",
    alt: "LinkedIn Profile",
    Icon: LinkedInIcon,
  },
];

export const Header: FC = () => (
  <div
    sx={{
      height: 50,
      padding: [3, 4, 4],
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <span sx={{ fontFamily: "body", fontWeight: "bold", fontSize: [4, 5, 5] }}>
      keithrfung.dev
    </span>
    <Box>
      {links
        .sort((a, b) => a.order - b.order)
        .map(({ href, alt, Icon }) => (
          <Shaker style={{ marginRight: 10 }}>
            <Link href={href} alt={alt}>
              <Icon
                sx={{ height: ICON_SIZE, width: ICON_SIZE, color: "text" }}
              />
            </Link>
          </Shaker>
        ))}
    </Box>
  </div>
);

export default Header;
