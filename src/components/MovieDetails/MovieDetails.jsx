import { Link, Outlet, useParams } from 'react-router-dom';
import { MovieDetailsWrapper } from './MovieDetails.styled';
import Poster from '../../img/poster.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

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
      {movie && (
        <MovieDetailsWrapper>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : Poster
            }
            alt={movie?.title ? movie?.title : movie?.name}
            width="300px"
          />
          <p>{movie?.title ? movie?.title : movie?.name}</p>
        </MovieDetailsWrapper>
      )}
      <Link to="reviews">Review</Link>
      <Link to="cast">Cast</Link>
      <Outlet />
    </>
  );
}
