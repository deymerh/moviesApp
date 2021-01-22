import React from 'react';
import { useFetch } from '../../hooks/useFetch';

export const AllMovies = () => {
  const { loading, error, data } = useFetch(`http://www.omdbapi.com/?apikey=6a733d07&s=inception`);

  console.log(loading);
  console.log(error);
  console.log(data?.Search)

  return (
    <div>
      Todas las Pelis!
    </div>
  );
};
