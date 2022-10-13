import { useEffect, useState } from 'react';

export default function Form({ getResponse }) {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const getMoviesBySearch = e => {
    e.preventDefault();
    setQuery(inputValue);
    setInputValue('');
  };
  const inputHandler = e => {
    setInputValue(e.currentTarget.value);
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [response, setResponse] = useState([]);

  const getMovies = query => {
    console.log(query);
    setSearchQuery(query);
  };
  const loadMore = () => {
    setPage(state => state + 1);
  };

  return (
    <>
      <form onSubmit={getMoviesBySearch}>
        <label>
          <input
            onChange={inputHandler}
            value={inputValue}
            type="text"
            name="search"
          />
        </label>
        <button type="submit">Search a movie</button>
      </form>
    </>
  );
}
