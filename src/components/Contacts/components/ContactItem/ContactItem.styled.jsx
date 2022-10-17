import styled from '@emotion/styled';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDeleteOutline, MdAutoDelete } from 'react-icons/md';
import { FaUserEdit } from 'react-icons/fa';

export const StyledItem = styled.li`
  display: flex;
  margin-top: 10px;
  transition: 500ms;
  border-radius: 4px;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  /* padding-right: 5px; */
  outline: none;
  align-items: center;

  cursor: pointer;

  &:hover {
    background-color: rgba(204, 204, 204, 0.65);
  }

  &.vissible {
    background-color: rgba(204, 204, 204, 0.45);
    transition: 500ms;
  }
`;
export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65%;
`;
export const StyledButton = styled.button`
  display: block;
  width: 70px;
  margin-left: 5px;
  background-color: transparent;
  border-color: transparent;
  border-radius: 4px;
  color: transparent;
  transition: 500ms;
  visibility: hidden;
  &[disabled] {
    border-color: gray !important;
    background-color: #f5deb385 !important;
  }
  &.show {
    visibility: visible;
    transition: 500ms;
    background-color: #726885;
    color: wheat;
    border-color: black;

    &:hover,
    :focus {
      background-color: #7f7197;
      color: white;
      border-color: wheat;
    }
  }
`;
export const DeleteIcon = styled(AiFillDelete)`
  height: 30px;
  width: 30px;
  fill: rgb(0 0 0 / 50%);
  transition: 500ms;
  border-radius: 50%;

  &:hover,
  :focus {
    fill: red;
  }
`;
export const EditIcon = styled(FaUserEdit)`
  height: 30px;
  width: 30px;
  fill: rgb(0 0 0 / 50%);
  transition: 500ms;

  &:hover,
  :focus {
    fill: red;
  }
`;
export const PreDeleteIcon = styled(MdDeleteOutline)`
  height: 22px;
  width: 22px;
  fill: rgb(0 0 0 / 50%);
`;
export const PreEditIcon = styled(AiFillEdit)`
  height: 25px;
  width: 25px;
  fill: rgb(0 0 0 / 50%);
`;
export const DeleteOnLoadIcon = styled(MdAutoDelete)`
  height: 25px;
  width: 25px;
  fill: #fff;
  margin-right: 35px;
`;

export const StyledDiv = styled.div`
  width: 510px;
  height: 50px;
  margin: 4px;
  border: 1px solid black;
  border-radius: 4px;
`;
