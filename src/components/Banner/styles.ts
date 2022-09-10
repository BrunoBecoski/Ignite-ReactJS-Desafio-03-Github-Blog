import styled from 'styled-components';

export const InfoBannerContainer = styled.div`
  display: flex;
  gap: 2rem;


  transform: translateY(-50%);

  border-radius: 10px;
  box-shadow: 0 0 10px ${props => props.theme['profile']};
  background: ${props => props.theme['profile']};
  width: 100%;

  padding: 2rem;

  a {
    display: flex;
    align-items: center;
    gap: .5rem;

    line-height: 100%;

    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: .75rem;
    color: ${props => props.theme['blue']};
    
    border: 1px solid transparent;
    
    :hover {
      transition: border-color .2s;

      border-bottom-color: ${props => props.theme['blue']};
    }

  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

  }
`;

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;

  div{
    display: flex;
    align-items: baseline;
    gap: .5rem;

    color: ${props => props.theme['span']};
  }
  
`;