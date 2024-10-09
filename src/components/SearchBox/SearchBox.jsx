import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectContacts, selectNameFilter } from "../../redux/store";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const value = useSelector(selectNameFilter);

  return (
    <>
      <div className={s.searchBox}>
        <p>Finds contacts by name</p>
        <input
          type="text"
          value={value}
          placeholder="Write some..."
          onChange={(e) => dispatch(changeFilter(e.target.value))}
          name="query"
        />
        <p>Total contacts: {contacts.length}</p>
      </div>
    </>
  );
};

export default SearchBox;
