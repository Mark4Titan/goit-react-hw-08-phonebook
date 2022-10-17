import { StyledLabel, StyledImput } from './Filter.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/filterSlice';
import { useGetContactsQuery } from 'redux/contacts/createApi';
import { StyledButton } from '../../../../GlobalStyles.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const inputHandler = e => {
    const { value } = e.currentTarget;
    dispatch(filterContact(value));
  };

  const filter = useSelector(state => state.filter);
  const Сlean = () => dispatch(filterContact(''));

  const { data: contacts } = useGetContactsQuery();

  return (
    <>
      {contacts?.length !== 0 ? (
        <>
          <h2>Contacts:</h2>
          <StyledLabel>
            Find my contacts by name
            <StyledImput
              type="text"
              name="filter"
              value={filter}
              onChange={inputHandler}
            />
          </StyledLabel>
          {filter && (
            <StyledButton  type="button" onClick={Сlean}>
              Сlean up
            </StyledButton>
          )}
        </>
      ) : (
        <h2>Contact list is empty:</h2>
      )}
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  contacts: PropTypes.array,
};
