import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from '../Home/Home.jsx';
import Movies from 'components/Movies/Movies.jsx';
import { Header } from './App.styled.js';
import MovieDetails from 'components/MovieDetails/MovieDetails.jsx';

const APP_KEY = `8fcb73b25bea8ff19ff1e6b792856201`;
const BASE_URL = `https://api.themoviedb.org/3/`;

export const App = () => {
  const [response, setResponse] = useState([]);
  const [homeResponse, setHomeResponse] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [loader, setLoader] = useState(false);
  const [firstRender, setFirstRender] = useState(false);

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
        setFirstRender(true);

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
  const homeResponseHandler = resp => {
    setHomeResponse(resp);
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
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Search a movie</NavLink>
            </li>
          </ul>
        </nav>
      </Header>
      <Routes>
        <Route
          path="/"
          element={<Home handleResponse={homeResponseHandler} />}
        />
        {firstRender && (
          <Route
            path="/:id"
            element={<MovieDetails response={homeResponse} />}
          />
        )}
        <Route
          path="/movies"
          element={
            <Movies
              handleQuery={handleQuery}
              loader={loader}
              onClick={loadMore}
              response={response}
            />
          }
        />
        {firstRender && (
          <Route
            path="/movies/:id"
            element={<MovieDetails response={response} />}
          />
        )}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
