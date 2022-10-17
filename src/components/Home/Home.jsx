import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

import {
  GalleryItemImage,
  GalleryItemWrapper,
  GalleryWrapper,
  LoadMoreButton,
  MovieTitle,
} from './Home.styled';
import Loader from 'components/Loader/Loader.jsx';
const APP_KEY = `8fcb73b25bea8ff19ff1e6b792856201`;
const BASE_URL = `https://api.themoviedb.org/3/`;
export default function Home() {
  const [response, setResponse] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const url = `${BASE_URL}trending/movie/day?api_key=${APP_KEY}&page=${page}`;
    async function sendGetRequest(link) {
      try {
        const resp = await axios.get(link);
        setResponse(prev => [...prev, ...resp.data.results]);
        setLoader(false);
      } catch (err) {
        console.error(err);
      }
    }
    sendGetRequest(url);
  }, [page]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div>
      {response.length > 0 ? (
        <GalleryWrapper>
          <Outlet />
          {response.map(value => (
            <Link to={`${value.id}`}>
              <GalleryItemWrapper key={value.id}>
                <GalleryItemImage
                  src={`https://image.tmdb.org/t/p/original/${value.poster_path}`}
                  alt={value.title ? value.title : value.name}
                  width="350px"
                />
                <MovieTitle>
                  {value.title ? value.title : value.name}
                </MovieTitle>
              </GalleryItemWrapper>
            </Link>
          ))}
        </GalleryWrapper>
      ) : null}
      {loader && <Loader />}

      <LoadMoreButton onClick={loadMore} type="button">
        Load more
      </LoadMoreButton>
    </div>
  );
}
