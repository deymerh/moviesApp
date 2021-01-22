import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNav } from './style';

import Logo from '../../assets/logo.png';


export const Header = () => {

  return (
    <HeaderNav>
      <div>
        <Link to="/">
          <img src={Logo} alt={Logo} />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Categories</Link>
          </li>
          <li>
            <Link to="/">My Favorities</Link>
          </li>
        </ul>
      </nav>
    </HeaderNav>
  )
}
