import { Header } from 'components/App/App.styled';
import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { NavList, NavListItem } from './SharedLayout.styled';

const CustomLink = styled(NavLink)`
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
`;

export default function SharedLayout() {
  return (
    <div>
      <Header>
        <nav>
          <NavList>
            <NavListItem>
              <CustomLink to="/">Home</CustomLink>
            </NavListItem>
            <NavListItem>
              <CustomLink to="/movies">Search a movie</CustomLink>
            </NavListItem>
          </NavList>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
