import SearchInput from "../../ui-kit/SearchInput/SearchInput";
import styles from "./SearchSection.module.css";
const SearchSection = () => {
  const { section } = styles;
  return (
    <section className={section}>
      <SearchInput />
    </section>
  );
};
export default SearchSection;
