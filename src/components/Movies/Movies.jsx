import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import Loader from 'components/Loader/Loader.jsx';
import { Link } from 'react-router-dom';
import {
  GalleryItemImage,
  GalleryItemWrapper,
  GalleryWrapper,
  LoadMoreButton,
  MovieTitle,
} from './Movies.styled';
import Form from 'components/Form/Form.jsx';

const APP_KEY = `8fcb73b25bea8ff19ff1e6b792856201`;
const BASE_URL = `https://api.themoviedb.org/3/`;

export default function Home() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loader, setLoader] = useState(false);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    let url = '';
    if (query === '') {
      url = `${BASE_URL}trending/movie/day?api_key=${APP_KEY}&page=${page}`;
    } else {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${APP_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`;
    }
    setLoader(true);

    async function sendGetRequest(link) {
      try {
        const resp = await axios.get(link);
        if (resp.data.results.length === 0) {
          toast.info(`Search request ${query} is not found. Please  try again`);
        }
        setResponse(prev => [...prev, ...resp.data.results]);

        setLoader(false);
      } catch (err) {
        console.error(err);
      }
    }
    sendGetRequest(url);
  }, [page, query]);

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
  };
  return (
    <div>
      <Form onSubmit={handleQuery} />

      {response.length > 0 ? (
        <GalleryWrapper>
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
