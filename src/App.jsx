import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Layout from "./components/Layout/Layout";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  return (
    <>
      <Layout>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </Layout>
    </>
  );
};

export default App;
