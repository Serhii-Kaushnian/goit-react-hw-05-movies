import SharedLayout from 'components/SharedLayout/SharedLayout.jsx';
import { useState } from 'react';
import { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../Home/Home.jsx'));
const Movies = lazy(() => import('components/Movies/Movies.jsx'));
const MovieDetails = lazy(() =>
  import('components/MovieDetails/MovieDetails.jsx')
);
const Cast = lazy(() => import('components/Cast/Cast.jsx'));
const Review = lazy(() => import('components/Review/Review.jsx'));

export const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);

  function handlePopularMovies(data) {
    if (!data) {
      return;
    }
    setPopularMovies(data);
  }
  function handleSearchMovies(data) {
    if (!data) {
      return;
    }
    setSearchMovies(data);
  }
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

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<Home handleResponse={handlePopularMovies} />}
          />
          <Route
            path="/:id"
            element={<MovieDetails response={popularMovies} />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>

          <Route
            path="/movies"
            element={<Movies handleResponse={handleSearchMovies} />}
          />
          <Route
            path="/movies/:id"
            element={<MovieDetails response={searchMovies} />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
