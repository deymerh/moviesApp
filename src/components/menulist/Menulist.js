import React from 'react';
import { Link } from 'react-router-dom';
import { MenuListMovies } from './style';

export const Menulist = () => {
  return (
    <MenuListMovies>
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/">New Release</Link>
        </li>
        <li>
          <Link to="/">Most popular</Link>
        </li>
        <li>
          <Link to="/">Trends</Link>
        </li>
        <li>
          <Link to="/">Recomendations</Link>
        </li>
      </ul>
    </MenuListMovies>
  );
};
