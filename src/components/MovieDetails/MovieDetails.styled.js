import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieDetailsWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  padding: 10px;
`;
export const MovieCustomLinksWrapper = styled.div`
  display: flex;
  padding: 10px;
`;
export const MovieTitle = styled.h2`
  text-align: center;
`;
export const PosterWrapper = styled.div`
  margin-right: 10px;
`;
export const CustomLink = styled(Link)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background-color: #cbcbc8;
  padding: 10px;
  min-width: 90px;
  color: black;
  font-weight: 800;
  font-size: 20px;
  border-radius: 10px;
  transition: background-color 250ms ease;

  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover,
  &:focus {
    background-color: #adadad;
  }
`;
export const GoBackLink = styled.button`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background-color: #cbcbc8;
  padding: 10px;
  min-width: 90px;
  color: black;
  font-weight: 800;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 10px;
  margin-top: 10px;
  border: none;
  transition: background-color 250ms ease;

  &:hover,
  &:focus {
    background-color: #adadad;
  }
`;
