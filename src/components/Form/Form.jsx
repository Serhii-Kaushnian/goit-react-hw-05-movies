import { useEffect, useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FormButton,
  Input,
  Label,
  FormWrapper,
  Container,
} from './Form.styled';

export default function Form({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (searchParams.get('q')) {
      setInputValue(searchParams.get('q'));
    }
  }, [searchParams]);
  const getMoviesBySearch = e => {
    e.preventDefault();
    onSubmit(inputValue);
  };
  const inputHandler = e => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <Container>
      <FormWrapper onSubmit={getMoviesBySearch}>
        <Input
          onChange={inputHandler}
          value={inputValue}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <FormButton type="submit">
          <ImSearch />
          <Label></Label>
        </FormButton>
      </FormWrapper>
    </Container>
  );
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
