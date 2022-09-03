import styled from 'styled-components';

export const InfoContainer = styled.div`
  transform: translateY(-58%);
  padding: 2rem;
  
  border-radius: 10px;
  background: ${props => props.theme['profile']};

  h2 {
    margin-top: 1.25rem;
    margin-bottom: .5rem;

    line-height: 130%;
  }

  @media (max-width: 900px) {
    transform: translateY(-28%);

    h2 {
      margin-block: 1rem;
    }
  }
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  a {
    border-bottom: 1px solid transparent;
    font-size: .75rem;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme['blue']};

    :hover {
      border-color: ${props => props.theme['blue']};
    }
    
    :first-child {
      svg {
        margin-right: .5rem;
      }
    }
    
    :last-child {
      svg {
        margin-left: .5rem;
      }
    }
  }


`;

export const InfoBar = styled.div`
  display: flex;
  gap: 2rem;

  div {
    color: ${props => props.theme['span']};

    svg {
      margin-right: .5rem;
      color: ${props => props.theme['label']};
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
  }
`;  