import styled from 'styled-components';

export const InputContainer = styled.input`
  width: 100%;
  padding: .75rem 1rem;

  border-radius: 6px;
  background: ${props => props.theme['input']};
  border: 1px solid ${props => props.theme['border']};

  ::placeholder {
    color: ${props => props.theme['label']};
  }

  :focus {
    box-shadow: none;
    
    border-color: ${props => props.theme['blue']};
  }
`;