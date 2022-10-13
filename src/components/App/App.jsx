import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from '../Home/Home.jsx';
import { Routes, Route, NavLink } from 'react-router-dom';
import Movies from 'components/Movies/Movies.jsx';
import { Header } from './App.styled.js';
import Form from 'components/Form/Form.jsx';

const APP_KEY = `8fcb73b25bea8ff19ff1e6b792856201`;
// const GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APP_KEY}&language=en-US`;
// `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
export const App = () => {
  const [response, setResponse] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const resp = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${APP_KEY}&page=${page}`
        );
        setResponse(prev => [...prev, ...resp.data.results]);
      } catch (err) {
        console.error(err);
      }
    };
    sendGetRequest();
  }, [page]);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div>
      <Header>
        <button onClick={loadMore} type="button">
          Load more0
        </button>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home0</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Search a movie</NavLink>
            </li>
          </ul>
        </nav>
        <Form />
      </Header>
      <Routes>
        {response && <Route path="/" element={<Home response={response} />} />}

        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
