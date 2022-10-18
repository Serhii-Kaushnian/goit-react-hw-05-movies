import styled from '@emotion/styled';
export const CastWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;
export const CastList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const CastListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.53);
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.53);
`;
