import { PrimaryButton, StyledInput } from "../../ui-kit";
import styles from "./SignInForm.module.css";
const SignInForm = () => {
  const { wrap, account, box, form } = styles;
  return (
    <section className={wrap}>
      <div className={box}>
        <h2 className={account}>Login to your dashboard</h2>
        <hr />
        <form className={form} action="#">
          <StyledInput
            text={"Enter user name"}
            required={true}
            id="userName"
            minLength={5}
            maxLength={10}
          />
          <PrimaryButton text="Enter" />
        </form>
      </div>
    </section>
  );
};
export default SignInForm;
