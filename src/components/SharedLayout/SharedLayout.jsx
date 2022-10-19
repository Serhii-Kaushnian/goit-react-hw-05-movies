import { Header } from 'components/App/App.styled';
import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { NavList, NavListItem, CustomLink } from './SharedLayout.styled';

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
