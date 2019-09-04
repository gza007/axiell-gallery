import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

library.add(faPalette);

const NavBar = () => (
    <div className="navBar">
      <div className="icon">
        <FontAwesomeIcon
          className="icon-logo"
          icon='palette'
        />
        AXIELL ART GALLERY
      </div>
      <ul className="nav">
        <Link className="item" to="/">Home</Link>
      </ul>
    </div>
  );

export default NavBar;
