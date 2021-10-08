import React from 'react';
import { Home, LibraryMusic, Search } from '@material-ui/icons';

import SideBarOption from './SideBarOption';
import { useStateValue } from './StateProvider';

import './SideBar.css';

function SideBar() {
  const [{ playlists }] = useStateValue();

  console.log(playlists);

  return (
    <div className='sidebar'>
      <img
        className='sitebar__logo'
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='Spotify'
      />

      <SideBarOption title='Home' Icon={Home} />
      <SideBarOption title='Search' Icon={Search} />
      <SideBarOption title='Your Library' Icon={LibraryMusic} />

      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SideBarOption key={playlist.name} title={playlist.name} />
      ))}
    </div>
  );
}

export default SideBar;
