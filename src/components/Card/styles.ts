import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardContainer = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem; 
  
  text-decoration: none;
  background: ${props => props.theme['post']};
  border: 1px solid ${props => props.theme['post']};
  border-radius: 10px;

  h3 {
    font-size: 1.25rem;
  }

  :hover {
    transition: box-shadow .5s;

    box-shadow: 0 0 5px ${props => props.theme['blue']};
    border-color: ${props => props.theme['label']};
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
`;