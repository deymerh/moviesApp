import React from 'react';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';
import { AllMovies } from '../components/all-movies/AllMovies';
import { Header } from '../components/header/Header';
import { Menulist } from '../components/menulist/Menulist';
import { Slider } from '../components/slider/Slider';

export const Home = () => {
  return (
    < BrowserRouter >
      <Header />
      <Slider />
      <Menulist />
      <Switch>
        <Route exact path='/' component={AllMovies} />
      </Switch>
    </BrowserRouter >
  );
};
