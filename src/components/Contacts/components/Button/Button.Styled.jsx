import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: block;
  width: 150px;
  margin-top: 10px;
  background-color: #3e3e3e;
  border-radius: 4px;
  color: #bebebe;
  transition: 350ms;
  padding: 15px;
  margin: 4px;
  &:hover,
  :focus {
    background-color: #000000;
    color: white;
    padding: 20px;
  }
`;
export const StyledLabel = styled.label`
  margin-top: 10px;
  border-radius: 4px;
  color: currentColor;
  transition: 350ms;
  padding: 5px;
  &:hover,
  :focus {
    background-color: #3e3e3e;
    color: white;
  }
`;
