import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2rem;
  transform: translateY(-48%);
  padding: 2rem;
  
  border-radius: 10px;
  box-shadow: 0 0 28px #00000014;
  background: ${props => props.theme['profile']};

  > div {   
    p {
       margin-block: .5rem 1.5rem;
    }
  }
  
  @media (max-width: 900px) {
    flex-direction: column;    
    align-items: center;
    transform: translateY(-18%);
    
    > div {
      p {
        text-align: center;
      }
    }
  }
`;

export const Avatar = styled.img`
  width: 148px;
  height: 148px;

  border-radius: 8px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
  }

  a { 
    font-size: .75rem;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    color: ${props => props.theme['blue']};
    
    svg {
      margin-left: .5rem;
    }
    
    :hover {
      border-color: ${props => props.theme['blue']};
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;

    a {
      margin-top: .5rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    color: ${props => props.theme['subtitle']};

    svg {
      margin-right: .5rem;
      color: ${props => props.theme['label']};
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;