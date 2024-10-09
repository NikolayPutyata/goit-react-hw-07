import Contact from "/src/components/Contact/Contact.jsx";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/store";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul className={s.conList}>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} phone={number} id={id} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
