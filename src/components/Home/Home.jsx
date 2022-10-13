import { useState, useEffect } from 'react';

export default function Home({ response }) {
  console.log(response);
  return (
    <div>
      <ul>
        {response &&
          response.map(value => (
            <li key={value.id}>
              <p>{value.title ? value.title : value.name}</p>
              <img
                src={`https://image.tmdb.org/t/p/original/${value.poster_path}`}
                alt={value.title ? value.title : value.name}
                width="400px"
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
