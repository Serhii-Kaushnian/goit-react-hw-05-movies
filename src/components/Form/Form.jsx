import { useState } from 'react';
import { ImSearch } from 'react-icons/im';

import {
  FormButton,
  Input,
  Label,
  FormWrapper,
  Container,
} from './Form.styled';

export default function Form({ getResponse, onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const getMoviesBySearch = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
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
