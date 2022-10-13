import { useState } from 'react';

export default function Form({ getResponse }) {
  const [inputValue, setInputValue] = useState('');
  const [, setQuery] = useState('');
  const getMoviesBySearch = e => {
    e.preventDefault();
    setQuery(inputValue);
    setInputValue('');
  };
  const inputHandler = e => {
    setInputValue(e.currentTarget.value);
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
