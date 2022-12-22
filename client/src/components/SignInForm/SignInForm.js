import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../core/redux/features/user/userSlice";
import { PrimaryButton, StyledInput } from "../../ui-kit";
import styles from "./SignInForm.module.css";
import { useNavigate } from "react-router-dom";

const initialState = {
  isLoading: false,
  user: "",
};

const SignInForm = () => {
  const { wrap, account, box, form } = styles;
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setValues(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser("test"));
    navigate("/posts");
  };
  return (
    <section className={wrap}>
      <div className={box}>
        <h2 className={account}>Login to your dashboard</h2>
        <hr />
        <form className={form} onSubmit={onSubmit}>
          <StyledInput
            value={values.userName}
            onChange={(e) => handleChange(e)}
            text={"Enter user name"}
            required={true}
            id="userName"
            minLength={5}
            maxLength={10}
          />
          <PrimaryButton type="submit" text="Enter" />
        </form>
      </div>
    </section>
  );
};
export default SignInForm;
