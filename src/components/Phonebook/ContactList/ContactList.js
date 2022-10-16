import { Box } from 'components/Box';
import styles from './ContactList.module.css';
import { ContactListItems } from './ContactListItems';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../../redux/operations';



export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact.items);
  const filter = useSelector(state => state.filters.status);

  const contactSearch = filter === '' ? contacts :
    contacts.filter(cont => cont.name.toLowerCase().includes(filter.toLowerCase()));  


  const handleDelete = itemId => dispatch(deleteItem(itemId));
  

  return (
    <Box as="ul" px={1}>
      {contactSearch.map(el => (
        <li className={styles.Li} key={el.id}>
          <ContactListItems name={el.name} phone={el.phone} />
          <button
            id={el.id}
            type="button"
            onClick={event => handleDelete(event.target.id)}
          >
            Delate
          </button>
        </li>
      ))}
    </Box>
  );
};

export default ContactList;

