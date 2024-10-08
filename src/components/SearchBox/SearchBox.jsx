import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/store";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <>
      <p>Finds contacts by name</p>
      <input
        type="text"
        value={value}
        placeholder="Write some..."
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        name="query"
      />
    </>
  );
};

export default SearchBox;
