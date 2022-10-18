import { Outlet, useParams, useLocation, useNavigate } from 'react-router-dom';
import {
  MovieCustomLinksWrapper,
  MovieDetailsWrapper,
  MovieTitle,
  PosterWrapper,
  CustomLink,
} from './MovieDetails.styled';
import Poster from '../../img/poster.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import Loader from 'components/Loader/Loader';

const APP_KEY = `8fcb73b25bea8ff19ff1e6b792856201`;
const BASE_URL = `https://api.themoviedb.org/3/`;
export default function MovieDetails() {
  const { id } = useParams();
  const location = useLocation();

  console.log('location: ', location);
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

      <CustomLink to={location.state?.from || '/'}>Go back</CustomLink>

      {movie && (
        <MovieDetailsWrapper>
          <PosterWrapper>
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
          </PosterWrapper>
          <div>
            <h4>Genres</h4>
            <div>
              <ul>
                {movie.genres &&
                  movie.genres.map(value => (
                    <li key={value.id}>
                      <p>{value.name}</p>
                    </li>
                  ))}
              </ul>
            </div>
            <h4>User rating: {`${Math.round(movie.vote_average * 10)}%`}</h4>
            <div>
              <h4>Overview</h4>
              <p>{movie.overview}</p>
            </div>
          </div>
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
