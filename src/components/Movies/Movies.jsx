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

export default function Home({ handleQuery, response, onClick, loader }) {
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

      <LoadMoreButton onClick={onClick} type="button">
        Load more
      </LoadMoreButton>
    </div>
  );
}
