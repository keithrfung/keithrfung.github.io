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
    alt: "Spotify Icon",
    ariaLabel: "Spotify Profile",
    Icon: SpotifyIcon,
    hoverColor: "verdigris",
  },
  {
    order: 3,
    href: "https://instagram.com/keith.r.fung",
    alt: "Instagram Icon",
    ariaLabel: "Instagram Profile",
    Icon: InstagramIcon,
    hoverColor: "darkTopaz",
  },
  {
    order: 2,
    href: "https://github.com/keithrfung",
    alt: "Github Icon",
    ariaLabel: "Github Profile",
    Icon: GitHubIcon,
    hoverColor: "darkLavender",
  },
  {
    order: 1,
    href: "https://linkedin.com/in/keithrfung",
    alt: "LinkedIn Icon",
    ariaLabel: "LinkedIn Profile",
    Icon: LinkedInIcon,
    hoverColor: "spiroDiscoBall",
  },
];

export const Header: FC = () => (
  <header
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 9999,
    }}
  >
    <Link
      to="/"
      aria-label="keithrfung.dev"
      sx={{
        color: "text",
        verticalAlign: "center",
        fontFamily: "body",
        fontWeight: "bold",
        fontSize: [4, 5, 5],
        ":hover": { color: "secondary" },
      }}
    >
      keithrfung.dev
    </Link>
    <Box>
      {links
        .sort((a, b) => a.order - b.order)
        .map(({ href, alt, Icon, hoverColor, ariaLabel }, index) => (
          <Shaker style={{ marginLeft: 10 }} key={`nav-icon-link-${index}`}>
            <a href={href} aria-label={ariaLabel}>
              <Icon
                alt={alt}
                sx={{
                  height: ICON_SIZE,
                  width: ICON_SIZE,
                  color: "text",
                  ":hover": {
                    color: hoverColor || "primary",
                  },
                }}
              />
            </a>
          </Shaker>
        ))}
    </Box>
  </header>
);

export default Header;
