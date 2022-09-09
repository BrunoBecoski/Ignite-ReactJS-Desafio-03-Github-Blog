import styled from 'styled-components';

export const InfoBannerContainer = styled.div`

  transform: translateY(-50%);

  border-radius: 10px;
  box-shadow: 0 0 10px ${props => props.theme['profile']};
  background: ${props => props.theme['profile']};
  width: 100%;

  padding: 2rem;
`;