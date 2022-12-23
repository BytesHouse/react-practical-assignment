import styles from "./SearchInput.module.css";
const SearchInput = () => {
  const { inp } = styles;
  return <input className={inp} placeholder="Search/Filter"></input>;
};
export default SearchInput;
