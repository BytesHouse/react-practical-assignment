import { SignInForm } from "../../components";
import styles from "./Login.module.css";
const Login = () => {
  const { wrap, blur, logo } = styles;
  return (
    <div className={wrap}>
      <div className={blur}>
        <h1 className={logo}>Granate</h1>
        <SignInForm />
      </div>
    </div>
  );
};
export default Login;
