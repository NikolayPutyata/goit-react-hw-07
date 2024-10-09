import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Layout from "./components/Layout/Layout";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectContactsState } from "./redux/store";
import Loader from "./components/Loader/Loader";

const App = () => {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(selectContactsState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <ContactForm />
        {isLoading && <Loader />}
        {error && <h1>{error}</h1>}
        {items.length > 0 && (
          <>
            <SearchBox />
            <ContactList />
          </>
        )}
      </Layout>
    </>
  );
};

export default App;
