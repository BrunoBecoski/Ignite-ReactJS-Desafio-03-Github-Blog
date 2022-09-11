import styled from 'styled-components';

export const UserContainer = styled.main``;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  padding-block: 2rem;

  .loading {
    width: calc(50% - 1rem);
    transform: translateX(0);
  }

  @media (max-width: 900px) {
    .loading {
      width: 100%;
    }
  }
`;