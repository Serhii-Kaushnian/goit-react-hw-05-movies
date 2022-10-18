import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import Loader from 'components/Loader/Loader';

const APP_KEY = `8fcb73b25bea8ff19ff1e6b792856201`;
const BASE_URL = `https://api.themoviedb.org/3/`;
export default function Review() {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    sendGetRequest(id);
    async function sendGetRequest(link) {
      setLoader(true);
      try {
        const resp = await axios.get(
          `${BASE_URL}movie/${id}/reviews?api_key=${APP_KEY}&language=en-US&page=1`
        );
        if (resp.data.results.length === 0) {
          toast.info(`There is no reviews for this movie`);
          setLoader(false);

          return;
        }

        setReview(resp.data.results);
        setLoader(false);
      } catch (err) {
        console.error(err);
      }
    }
  }, [id]);

  return (
    <div>
      {loader && <Loader />}
      {review.length !== 0 && (
        <>
          {review.map(value => (
            <>
              <h3>{value.author}</h3>
              <p>{value.content}</p>
            </>
          ))}
        </>
      )}
    </div>
  );
}
