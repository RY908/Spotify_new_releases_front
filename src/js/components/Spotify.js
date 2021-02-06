export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:8080/callback";
const clientId = process.env.CLIENT_ID;
const scopes = [
    "user-read-recently-played",
    "user-read-private",
    "playlist-modify-public",
    "user-follow-read"
]
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
