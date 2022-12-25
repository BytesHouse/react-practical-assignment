import SearchInput from "../../ui-kit/SearchInput/SearchInput";
import styles from "./SearchSection.module.css";
import { PrimaryButton } from "../../ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { togglePopup } from "../../core/redux/features/popup/popupSlice";
const SearchSection = () => {
  const { section } = styles;
  const dispatch = useDispatch();
  const { isVisible } = useSelector((state) => state.popup);
  return (
    <section className={section}>
      <SearchInput />
      <PrimaryButton
        onClick={() => dispatch(togglePopup(isVisible))}
        text="Add post"
      />
    </section>
  );
};
export default SearchSection;
