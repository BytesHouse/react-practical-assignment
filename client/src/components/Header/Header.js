import { useDispatch, useSelector } from "react-redux";
import { LetterLogo } from "../../assets/icons";
import { logOutUser } from "../../core/redux/features/user/userSlice";
import { PrimaryButton } from "../../ui-kit";
import styles from "./Header.module.css";
import { useNavigate } from "react-router";
const Header = () => {
  const { header, userWrap } = styles;
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOutUser());
    navigate("/");
  };
  return (
    <header className={header}>
      <LetterLogo />
      <div className={userWrap}>
        <div>{user}</div>
        <PrimaryButton onClick={handleLogOut} text="Sign Out" />
      </div>
    </header>
  );
};
export default Header;
