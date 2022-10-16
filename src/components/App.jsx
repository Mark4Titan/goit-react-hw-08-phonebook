import { Box } from 'components/Box';
import { ContactForm } from './Phonebook/ContactForm/ContactForm';
import { Filter } from './Phonebook/Filter/Filter';
import { ContactList } from './Phonebook/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllItems } from '../redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contact.isLoading);
  const error = useSelector(state => state.contact.error);

  useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      {isLoading && !error && (
        <Box p={1} m={1}>
          {' '}
          Request in progress...
        </Box>
      )}
      <Box p={4} m={3} display="grid" border="1px solid" width="320px">
        <Filter />
        <ContactList />
      </Box>
    </>
  );
};
