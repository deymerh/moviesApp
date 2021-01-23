import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { Spiner } from '../loading/Spiner';
import { CardMovie } from '../movie-Item/CardMovie';

import { ContainerMovies } from '../all-movies/style';
import { Link } from 'react-router-dom';
import { Header } from '../header/Header';
import { Slider } from '../slider/Slider';
import { Menulist } from '../menulist/Menulist';

export const PopularMovies = () => {
  const urlImg = 'https://image.tmdb.org/t/p/w500';
  const { loading, data } = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=a724f2ea4c6c46898861f4ea2bdf664c&language=en-US&page=4`);
  return loading ? <Spiner /> : (
    <>
      <Header />
      <Slider />
      <Menulist />
      <ContainerMovies>
        {
          data?.results.map(movie => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <CardMovie
                img={`${urlImg}${movie.backdrop_path}`}
                title={movie.title}
              />
            </Link>
          ))
        }
      </ContainerMovies>
    </>
  );
}
