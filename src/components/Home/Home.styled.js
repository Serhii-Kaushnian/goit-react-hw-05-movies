import styled from '@emotion/styled';
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;
export const GalleryWrapper = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const GalleryItemWrapper = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  overflow: hidden;
`;
export const GalleryItemImage = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const MovieTitle = styled.p`
  margin: 10px;
  font-weight: 800;
  font-size: 20px;
  text-align: center;
`;
export const LoadMoreButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: #3f51b5;
  color: white;
  font-size: 25px;
  font-weight: 800;
  border: none;
  opacity: 0.8;
  transition: opacity 250ms ease;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;
