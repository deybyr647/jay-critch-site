// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  availableAlbums,
  getAlbum,
  getTopTracks,
  getRandInt,
  authorizeClient,
} from "../../components/spotify";

const spotifyEndpoint = async (req: NextApiRequest, res: NextApiResponse) => {
  await authorizeClient();

  const albumTracks = await getAlbum(
    availableAlbums[getRandInt(0, availableAlbums.length - 1)]
  );

  const topTracks = await getTopTracks();

  res.status(200).json([...topTracks, ...albumTracks]);
};

export default spotifyEndpoint;
