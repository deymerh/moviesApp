import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Spiner } from '../loading/Spiner';
import { CardMovie } from '../movie-Item/CardMovie';

import { ContainerMovies } from '../all-movies/style';
import { Header } from '../header/Header';
import { Slider } from '../slider/Slider';
import { Menulist } from '../menulist/Menulist';
export const TrendsMovies = () => {

  const urlImg = 'https://image.tmdb.org/t/p/w500';
  const { loading, data } = useFetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=a724f2ea4c6c46898861f4ea2bdf664c`);

  return loading ? <Spiner /> : (
    <>
      <Header />
      <Slider />
      <Menulist />
      <ContainerMovies>
        {
          data?.results.map(movie => (
            <CardMovie
              img={`${urlImg}${movie.backdrop_path}`}
              key={movie.id}
              title={movie.title}
            />
          ))
        }
      </ContainerMovies>
    </>
  );
}
