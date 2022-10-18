import styled from '@emotion/styled';
export const NavList = styled.ul`
  list-style: none;
  display: flex;
`;
export const NavListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
