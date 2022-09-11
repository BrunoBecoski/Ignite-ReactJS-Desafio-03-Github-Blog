import styled from 'styled-components';

export const LoadingContainer = styled.div`
  width: 100%;
  height: 200px;
  transform: translateY(-50%);


  border-radius: 10px;
  color: transparent;
  background-size: 400%;
  background-image: linear-gradient(90deg,  ${props => props.theme['profile']} 40%, ${props => props.theme['post']}, ${props => props.theme['profile']} 60%);

  animation-duration: 1s;
  animation-name: loading;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes loading {
    to {
      background-position:  0;
    }
    
    from {
      background-position: 100%;
    }
  }
`;