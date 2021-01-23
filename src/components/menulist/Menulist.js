import React from 'react';
import { NavLink } from 'react-router-dom';
import { MenuListMovies } from './style';

export const Menulist = () => {
  return (
    <MenuListMovies>
      <ul>
        <li>
          <NavLink to="/" activeClassName="activated">All</NavLink>
        </li>
        <li>
          <NavLink to="/popular" activeClassName="activated">Most popular</NavLink>
        </li>
        <li>
          <NavLink to="/trends" activeClassName="activated">Trends</NavLink>
        </li>
        <li>
          <NavLink to="/recomendations" activeClassName="activated">Recomendations</NavLink>
        </li>
      </ul>
    </MenuListMovies>
  );
};
