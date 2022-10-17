import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


export const ViewContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4b4e62;
  transition: 800ms;
  :hover {
    text-decoration: underline;
    color: black;
  }
`;

export const StyledButton = styled(Button)`
  min-width: 100px;
  background-color: #3e3e3e;
  margin-top: 10px;
  color: #fff;

  &:hover,
  :focus {
    background-color: #000000;
  }
`;
