import { Link, Outlet, useParams } from 'react-router-dom';
import {
  MovieCustomLinksWrapper,
  MovieDetailsWrapper,
  MovieTitle,
} from './MovieDetails.styled';
import Poster from '../../img/poster.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import styled from '@emotion/styled';
import Loader from 'components/Loader/Loader';

const CustomLink = styled(Link)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background-color: #cbcbc8;
  padding: 10px;
  min-width: 90px;
  color: black;
  font-weight: 800;
  font-size: 20px;
  border-radius: 10px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const APP_KEY = `8fcb73b25bea8ff19ff1e6b792856201`;
const BASE_URL = `https://api.themoviedb.org/3/`;
export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    sendGetRequest(id);
    async function sendGetRequest(movieId) {
      setLoader(true);
      try {
        const resp = await axios.get(
          `${BASE_URL}movie/${movieId}?api_key=${APP_KEY}&language=en-US`
        );
        console.log('resp: ', resp);
        if (resp.data.length === 0) {
          toast.info(`There is no reviews for this movie`);
          setLoader(false);

          return;
        }

        setMovie(resp.data);
        setLoader(false);
      } catch (err) {
        console.error(err);
      }
    }
  }, [id]);

  return (
    <>
      {loader && <Loader />}

      {movie && (
        <MovieDetailsWrapper>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : Poster
            }
            alt={movie?.title ? movie?.title : movie?.name}
            width="250px"
          />
          <MovieTitle>{movie?.title ? movie?.title : movie?.name}</MovieTitle>
        </MovieDetailsWrapper>
      )}
      <MovieCustomLinksWrapper>
        <CustomLink to="reviews">Review</CustomLink>
        <CustomLink to="cast">Cast</CustomLink>
      </MovieCustomLinksWrapper>
      <Outlet />
    </>
  );
}
