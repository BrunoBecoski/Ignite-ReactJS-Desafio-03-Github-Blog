import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled(NavLink)`
  max-width: 412px;
  max-height: 260px;
  padding: 2rem;

  text-decoration: none;
  border-radius: 10px;
  border: 2px solid transparent;
  background: ${props => props.theme['post']};

  :hover {
    border-color: ${props => props.theme['label']};
  }
  
  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1.25rem;
    
    h2 {
      flex: 1;
      font-size: 1.25rem;
    }
    
    span {
      font-size: .875rem;
      color: ${props => props.theme['span']}
    }
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;

    color: ${props => props.theme['text']};
  }
`;