import PropTypes from 'prop-types';


export const ContactListItems = ({ name, phone }) => {
  return (
    <>
      <span>{name} : </span>
      <span>{phone} </span>
    </>
  );
};

export default ContactListItems;

ContactListItems.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    handleDelete: PropTypes.func,
};