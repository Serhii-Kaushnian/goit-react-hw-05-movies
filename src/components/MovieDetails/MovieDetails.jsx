import React from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetailsWrapper } from './MovieDetails.styled';

export default function MovieDetails({ response }) {
  const { id } = useParams();

  getMovieById();
  function getMovieById() {
    let idNumber = Number(id);
    return response.find(value => value.id === idNumber);
  }
  let movieData = getMovieById();

  return (
    <>
      {response && (
        <MovieDetailsWrapper>
          <img
            src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
            alt={movieData.title ? movieData.title : movieData.name}
            width="300px"
          />
          <p>{movieData.title ? movieData.title : movieData.name}</p>
        </MovieDetailsWrapper>
      )}
    </>
  );
}
