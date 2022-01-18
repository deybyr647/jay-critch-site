// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const about = {
    jaycritch: {
      name: "Jason Cole Critchlow",
      stageName: "Jay Critch",
      birthday: "February 25th, 1998",
      birthplace: "Clinton Hill, Brooklyn, NY",
      albums: ["Hood Favorite", "Signed With Love", "Critch Tape"],
      socialMedia: {
        twitter: "@jaycritch",
        instagram: "@jaycritch",
        facebook: "Jay Critch",
      },
      musicLinks: {
        spotify: "https://open.spotify.com/artist/6Av6GMCOznZIlHuNcBWgf4",
        soundcloud: "https://soundcloud.com/JAYCRITCH",
        appleMusic: "https://music.apple.com/us/artist/jay-critch/1180942034",
      },
      recordLabel: "Talk Money Entertainment",
      ethnicity: "British & Caribbean",
      sites: [
        "https://www.jaycritchhoodfav.com/",
        "https://www.talkmoneytme.net/",
      ],
    },
    developer: {
      name: "Deyby Rodriguez",
      website: "https://www.deybyr647.com",
      gitHub: "https://github.com/deybyr647",
      favJayCritchTracks: [
        "Money Calling (unreleased)",
        "Donuts (unreleased)",
        "Sweepstakes",
        "Are You Dumb? (unreleased)",
        "Brown Hair",
        "Speak Up",
        "Built For This",
        "Been That",
        "8 Ball (unreleased)",
        "Ball Like This (unreleased)",
      ],
    },
    project: {
      name: "Jay Critch Site",
      repository: "https://github.com/deybyr647/jay-critch-site",
      liveSite: "https://jay-critch-site.vercel.app/",
      hostingProvider: "Vercel",
      createdWith: [
        "Next.js",
        "TypeScript",
        "Bootstrap",
        "Sass",
        "React",
        "spotify-web-api-node",
      ],
    },
  };

  res.status(200).json(about);
}
