import { useEffect } from "react";
import { SignInForm, Logo } from "../../components";
import styles from "./Login.module.css";
import { getUserFromLocalStorage } from "../../core/lib/utils/localStorage";
import { useNavigate } from "react-router";
const Login = () => {
  const { wrap, blur } = styles;

  const navigate = useNavigate();

  useEffect(() => {
    if (getUserFromLocalStorage()) {
      navigate("/posts");
    }
  }, [navigate]);

  return (
    <div className={wrap}>
      <div className={blur}>
        <Logo />
        <SignInForm />
      </div>
    </div>
  );
};
export default Login;
