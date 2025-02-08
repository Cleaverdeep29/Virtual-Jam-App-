import axios from 'axios';

const SPOTIFY_API_URL = 'https://api.spotify.com/v1';
const ACCESS_TOKEN = process.env.SPOTIFY_ACCESS_TOKEN; // Ensure to set this in your environment variables

// Function to search for tracks
export const searchTracks = async (query) => {
  try {
    const response = await axios.get(`${SPOTIFY_API_URL}/search`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      params: {
        q: query,
        type: 'track',
      },
    });
    return response.data.tracks.items;
  } catch (error) {
    console.error('Error searching tracks:', error);
    throw error;
  }
};

// Function to get user's playlists
export const getUserPlaylists = async () => {
  try {
    const response = await axios.get(`${SPOTIFY_API_URL}/me/playlists`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Error retrieving playlists:', error);
    throw error;
  }
};

// Function to add a track to a playlist
export const addTrackToPlaylist = async (playlistId, trackUri) => {
  try {
    await axios.post(`${SPOTIFY_API_URL}/playlists/${playlistId}/tracks`, {
      uris: [trackUri],
    }, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
  } catch (error) {
    console.error('Error adding track to playlist:', error);
    throw error;
  }
};
