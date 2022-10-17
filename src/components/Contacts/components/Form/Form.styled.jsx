import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { StyledButton } from 'components/Contacts/components/Button/Button.Styled';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  border: 1px solid wheat;
  border-radius: 4px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.3);
`;
export const Item = styled(Field)`
  display: flex;
  flex-direction: column;
  width: 250px;
  border-radius: 4px;
`;

export const FormBox = styled.div`

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  border-radius: 10px;
  padding-top: 40px;
  width: 150px;
`;

export const CloseButton = styled(StyledButton)`
  width: 40px;
  position: absolute;
  color: #3e3e3e;

  top: -5px;
  right: 5px;
  &:hover,
  :focus {
    background-color: red;
    color: white;
    padding: 8px;
  }
`;
