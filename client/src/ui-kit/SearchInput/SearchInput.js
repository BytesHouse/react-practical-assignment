import { useState } from "react";
import styles from "./SearchInput.module.css";
import { useDispatch } from "react-redux";
import {
  searchPosts,
  getAllPosts,
} from "../../core/redux/features/allPosts/allPostsSlice";
const SearchInput = ({ on }) => {
  const { inp, form } = styles;
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
    if (!e.target.value) {
      dispatch(getAllPosts());
    }
  };
  const submitSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPosts(value));
  };
  return (
    <>
      <form className={form} onSubmit={submitSubmit}>
        <input
          onChange={handleChange}
          className={inp}
          placeholder="Search/Filter"
        ></input>
      </form>
    </>
  );
};
export default SearchInput;
