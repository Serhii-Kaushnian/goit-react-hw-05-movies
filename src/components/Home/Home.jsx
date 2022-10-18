import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';
import Poster from '../../img/poster.png';
import styled from '@emotion/styled';

import {
  GalleryItemImage,
  GalleryItemWrapper,
  GalleryWrapper,
  LoadMoreButton,
  MovieTitle,
} from './Home.styled';
import Loader from 'components/Loader/Loader.jsx';
const CustomLink = styled(Link)`
  color: black;
  font-weight: 800;
  font-size: 20px;
  text-decoration: none;
`;
const APP_KEY = `8fcb73b25bea8ff19ff1e6b792856201`;
const BASE_URL = `https://api.themoviedb.org/3/`;
export default function Home() {
  const [response, setResponse] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

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
            <GalleryItemWrapper key={value.id}>
              <CustomLink to={`${value.id}`} state={{ from: location }}>
                <GalleryItemImage
                  src={
                    value.poster_path
                      ? `https://image.tmdb.org/t/p/original/${value.poster_path}`
                      : Poster
                  }
                  alt={value.title ? value.title : value.name}
                  width="350px"
                />
                <MovieTitle>
                  {value.title ? value.title : value.name}
                </MovieTitle>
              </CustomLink>
            </GalleryItemWrapper>
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
