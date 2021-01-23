import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Header } from '../header/Header';
import { MovieId } from './style';
export const IdMovie = () => {

  const urlImg = 'https://image.tmdb.org/t/p/w500';
  let { id } = useParams();
  const { data } = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=a724f2ea4c6c46898861f4ea2bdf664c&language=es-ES`);

  return (
    <>
      <Header />
      <MovieId>
        <div className="container__img">
          <img src={`${urlImg}${data?.backdrop_path}`} alt={data?.title} />
        </div>
        <div>
          <h1>{data?.original_title}</h1>
          <p>{data?.overview}</p>
        </div>
      </MovieId>
    </>
  )
}
