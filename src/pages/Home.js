import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import { AllMovies } from '../components/all-movies/AllMovies';
import { IdMovie } from '../components/id-movie/IdMovie';
import { PopularMovies } from '../components/popular/PopularMovies';
import { RecomendationsMovie } from '../components/recomendations/RecomendationsMovie';
import { TrendsMovies } from '../components/trends/TrendsMovies';

export const Home = () => {
  return (
    < BrowserRouter >
      <Switch>
        <Route exact path='/' component={AllMovies} />
        <Route exact path='/popular' component={PopularMovies} />
        <Route exact path='/trends' component={TrendsMovies} />
        <Route exact path='/recomendations' component={RecomendationsMovie} />
        <Route exact path='/movie/:id' component={IdMovie} />
      </Switch>
    </BrowserRouter >
  );
};
