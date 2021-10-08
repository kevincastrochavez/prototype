import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './index.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromResponse } from './spotify';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token, user }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';
    const _token = hash.access_token;

    console.log(_token);

    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists,
        });
      });
    }
  }, [token, dispatch]);

  console.log(user);

  console.log(`token: ${token}`);

  return <div className='App'>{token ? <Player /> : <Login />}</div>;
}

export default App;
