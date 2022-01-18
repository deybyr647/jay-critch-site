import TrackObjectSimplified = SpotifyApi.TrackObjectSimplified;
import TrackObjectFull = SpotifyApi.TrackObjectFull;
import ImageObject = SpotifyApi.ImageObject;
const SpotifyWebApi = require("spotify-web-api-node");

interface ISong {
  spotifyURL: string;
  image: {
    width: number;
    height: number;
    url: string;
  };
  previewURL: string;
  name: string;
  id?: string;
}

const spotifyAPI = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

//Fisher-Yates Shuffle
const shuffle = (array: any[]): any[] => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
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
): Promise<ISong[]> => {
  const req = await spotifyAPI.getAlbum(albumID);

  //Truncating initial API response
  const { images, tracks } = req.body;
  const { items } = tracks;

  //Returning array of truncated track objects which only include essential data
  return items.map((track: TrackObjectSimplified) => {
    const { external_urls, name, preview_url, id } = track;
    const { spotify } = external_urls;

    return {
      spotifyURL: spotify,
      image: images.find((img: ImageObject) => img.width === 300),
      previewURL: preview_url,
      name,
      id,
    };
  });
};

const getTopTracks = async (
  artistID: string = "6Av6GMCOznZIlHuNcBWgf4"
): Promise<ISong[]> => {
  const req = await spotifyAPI.getArtistTopTracks(artistID, "US");

  //Truncating initial API response
  const { tracks } = req.body;

  //Returning array of truncated track objects which only include essential data
  return tracks.map((track: TrackObjectFull) => {
    const { album, preview_url, external_urls, name, id } = track;
    const { images } = album;
    const { spotify } = external_urls;

    return {
      spotifyURL: spotify,
      image: images.find((img: ImageObject) => img.width === 300),
      previewURL: preview_url,
      name,
      id,
    };
  });
};

export { authorizeClient, getAlbum, getTopTracks, shuffle };
export type { ISong };
