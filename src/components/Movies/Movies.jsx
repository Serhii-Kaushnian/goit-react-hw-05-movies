import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Poster from '../../img/poster.png';

import Loader from 'components/Loader/Loader.jsx';
import { Link, useSearchParams } from 'react-router-dom';
import {
  GalleryItemImage,
  GalleryItemWrapper,
  GalleryWrapper,
  LoadMoreButton,
  MovieTitle,
} from './Movies.styled';
import Form from 'components/Form/Form.jsx';
import styled from '@emotion/styled';

const APP_KEY = `8fcb73b25bea8ff19ff1e6b792856201`;
const BASE_URL = `https://api.themoviedb.org/3/`;
const CustomLink = styled(Link)`
  color: black;
  font-weight: 800;
  font-size: 20px;
  text-decoration: none;
`;
export default function Movies() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (query.length > 0) {
      let url = `${BASE_URL}search/movie?api_key=${APP_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`;
      sendGetRequest(url);
      setLoader(true);
    } else if (query === '' && searchParams.get('q')) {
      let url = `${BASE_URL}search/movie?api_key=${APP_KEY}&language=en-US&page=${page}&include_adult=false&query=${searchParams.get(
        'q'
      )}`;
      sendGetRequest(url);
      setLoader(true);
    } else {
      return;
    }

    async function sendGetRequest(link) {
      try {
        const resp = await axios.get(link);
        if (resp.data.results.length === 0 && page !== 1) {
          toast.info(`You reached last page`);
        } else if (resp.data.results.length === 0) {
          toast.info(`Search request ${query} is not found. Please  try again`);
        }
        setResponse(prev => [...prev, ...resp.data.results]);
        setLoader(false);
      } catch (err) {
        console.error(err);
      }
    }
  }, [page, query, searchParams]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  const handleQuery = data => {
    if (data === query) {
      toast.info(`Search request ${data} is already chosen`);

      return;
    }
    setResponse([]);
    setPage(1);
    setQuery(data);
    setSearchParams({ q: data });
  };
  return (
    <div>
      <Form onSubmit={handleQuery} />

      {response.length > 0 ? (
        <GalleryWrapper>
          {response.map(value => (
            <GalleryItemWrapper key={value.id}>
              <CustomLink to={`${value.id}`}>
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
