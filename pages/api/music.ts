// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  getAlbum,
  getTopTracks,
  authorizeClient,
  ISong,
  shuffle,
} from "../../components/spotify";

const musicEndpoint = async (req: NextApiRequest, res: NextApiResponse) => {
  await authorizeClient();

  const critchTapeTracks: ISong[] = await getAlbum("0zNGd4zx2YBSeJwVlndyIF");
  const signedWithLoveTracks: ISong[] = await getAlbum("685WVtJgKtEdGCGkf4tzgv");
  const topTracks: ISong[] = await getTopTracks();

  const allTracks: ISong[] = [...topTracks, ...critchTapeTracks, ...signedWithLoveTracks].filter(
    (track: ISong) => {
      const { previewURL, id } = track;
      return previewURL !== null && id !== "2HZ4WqI3pE4HKRigjA6tii";
    }
  );

  res.status(200).json([...shuffle(allTracks)]);
};

export default musicEndpoint;
