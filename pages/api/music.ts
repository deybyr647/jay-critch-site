// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  getAlbum,
  getTopTracks,
  authorizeClient,
  ISong,
  shuffle,
} from "../../components/spotify";

const spotifyEndpoint = async (req: NextApiRequest, res: NextApiResponse) => {
  await authorizeClient();

  const ctTracks: ISong[] = await getAlbum("0zNGd4zx2YBSeJwVlndyIF");
  const swlTracks: ISong[] = await getAlbum("685WVtJgKtEdGCGkf4tzgv");
  const hfTracks: ISong[] = await getAlbum("2Ony9dUqmqed29IPo8fsxv");
  const topTracks: ISong[] = await getTopTracks();

  const allTracks: ISong[] = [
    ...topTracks,
    ...ctTracks,
    ...hfTracks,
    ...swlTracks,
  ].filter((track: ISong) => {
    const { previewURL, id } = track;
    return previewURL !== null && id !== "2HZ4WqI3pE4HKRigjA6tii";
  });

  res.status(200).json([...shuffle(allTracks)]);
};

export default spotifyEndpoint;
