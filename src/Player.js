import React from 'react';

import Sidebar from './SideBar.jsx';
import Body from './Body.jsx';
import Footer from './Footer.jsx';

import './Player.css';

function Player() {
  return (
    <div className='player'>
      <div className='player__body'>
        <Sidebar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default Player;
