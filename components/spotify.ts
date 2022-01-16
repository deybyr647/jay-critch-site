import TrackObjectSimplified = SpotifyApi.TrackObjectSimplified;
import TrackObjectFull = SpotifyApi.TrackObjectFull;

const SpotifyWebApi = require("spotify-web-api-node");

const spotifyAPI = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

const availableAlbums: string[] = [
  "0zNGd4zx2YBSeJwVlndyIF", // Critch Tape
  "685WVtJgKtEdGCGkf4tzgv", // Signed With Love
  "2Ony9dUqmqed29IPo8fsxv", // Hood Favorite
];

const getRandInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const authorizeClient = async (): Promise<string> => {
  const req = await spotifyAPI.clientCredentialsGrant();
  console.log("The access token expires in " + req.body["expires_in"]);
  console.log("The access token is " + req.body["access_token"]);

  spotifyAPI.setAccessToken(req.body["access_token"]);
  return req.body["access_token"];
};

const getAlbum = async (
  albumID: string = "685WVtJgKtEdGCGkf4tzgv"
): Promise<object[]> => {
  const req = await spotifyAPI.getAlbum(albumID, {
    limit: 10,
    offset: getRandInt(0, 10),
  });

  //Truncating initial API response
  const { images, tracks } = req.body;
  const { items } = tracks;

  //Returning array of truncated track objects which only include essential data
  return items.map((track: TrackObjectSimplified) => {
    const { external_urls, name, preview_url } = track;
    const { spotify } = external_urls;

    return {
      spotifyURL: spotify,
      image: images[1],
      previewURL: preview_url,
      name,
    };
  });
};

const getTopTracks = async (
  artistID: string = "6Av6GMCOznZIlHuNcBWgf4"
): Promise<object[]> => {
  const req = await spotifyAPI.getArtistTopTracks(artistID, "US");

  //Truncating initial API response
  const { tracks } = req.body;

  //Returning array of truncated track objects which only include essential data
  return tracks.map((track: TrackObjectFull) => {
    const { album, preview_url, external_urls, name } = track;
    const { images } = album;
    const { spotify } = external_urls;

    return {
      spotifyURL: spotify,
      image: images[1],
      previewURL: preview_url,
      name,
    };
  });
};

export { authorizeClient, getAlbum, getTopTracks, getRandInt, availableAlbums };
