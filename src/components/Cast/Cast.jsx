import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from 'components/Loader/Loader';
import Placeholder from '../../img/unknown.png';
import { toast } from 'react-toastify';
import { CastList, CastListItem, CastWrapper } from './Cast.styled';
const APP_KEY = `8fcb73b25bea8ff19ff1e6b792856201`;
const BASE_URL = `https://api.themoviedb.org/3/`;
export default function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  const [loader, setLoader] = useState(false);
  useEffect(() => {
    sendGetRequest(id);
    async function sendGetRequest(link) {
      setLoader(true);
      try {
        const resp = await axios.get(
          `${BASE_URL}movie/${id}/credits?api_key=${APP_KEY}&language=en-US`
        );
        if (resp.data.cast.length === 0) {
          toast.info(`There is no cast for this movie`);
          setLoader(false);
          return;
        }

        setCast(resp.data.cast);
        setLoader(false);
      } catch (err) {
        console.error(err);
      }
    }
  }, [id]);

  return (
    <CastWrapper>
      {loader && <Loader />}
      {cast.length !== 0 && (
        <CastList>
          {cast.map(value => (
            <CastListItem key={value.id}>
              <h3>{value.name}</h3>
              <img
                src={
                  value.profile_path
                    ? `https://image.tmdb.org/t/p/original${value.profile_path}`
                    : Placeholder
                }
                alt={value.name}
                width="200"
              />
              <p>Character:{value.character}</p>
            </CastListItem>
          ))}
        </CastList>
      )}
    </CastWrapper>
  );
}
