import React from 'react';
import { useParams } from 'react-router-dom';
import { MovieDetailsWrapper } from './MovieDetails.styled';

export default function MovieDetails({ response }) {
  console.log(response);
  const { id } = useParams();
  getProductById();
  function getProductById() {
    let idNumber = Number(id);
    return response.find(value => value.id === idNumber);
  }
  let movieData = getProductById();

  return (
    <MovieDetailsWrapper>
      <img
        src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
        alt={movieData.title ? movieData.title : movieData.name}
        width="300px"
      />
      <p>{movieData.title ? movieData.title : movieData.name}</p>
    </MovieDetailsWrapper>
  );
}
