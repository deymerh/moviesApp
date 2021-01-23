import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Header } from '../header/Header';
import { Spiner } from '../loading/Spiner';
import { Menulist } from '../menulist/Menulist';
import { CardMovie } from '../movie-Item/CardMovie';
import { Slider } from '../slider/Slider';

import { ContainerMovies } from './style';

export const AllMovies = () => {
  const urlImg = 'https://image.tmdb.org/t/p/w500';
  const { loading, data } = useFetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=a724f2ea4c6c46898861f4ea2bdf664c&language=en-US&page=10`);

  return loading ? <Spiner /> : (
    <>
      <Header />
      <Slider />
      <Menulist />
      <ContainerMovies>
        {
          data?.results.map(movie => (
            <CardMovie
              id={movie.id}
              img={`${urlImg}${movie.backdrop_path}`}
              key={movie.id}
              title={movie.title}
            />
          ))
        }
      </ContainerMovies>
    </>
  );
};
