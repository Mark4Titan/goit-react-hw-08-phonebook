import './PhoneBook.styled.jsx';
import { Container } from 'components/Contacts/PhoneBook.styled';
import { Contacts } from 'components/Contacts/components/Contacts/Contacts.jsx';
import { Filter } from 'components/Contacts/components/Filter/Filter.jsx';
import { NavBar } from 'components/Contacts/components/NavBar/NavBar.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { StyledDiv} from './PhoneBook.styled.jsx';

const PhoneBook = () => {
  return (
    <Container>
      <NavBar />
      <StyledDiv>
      <Filter />
      <Contacts />
      </StyledDiv>
    </Container>
  );
};
export default PhoneBook;
