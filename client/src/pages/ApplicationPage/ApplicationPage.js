import { useEffect } from "react";
import { getUserFromLocalStorage } from "../../core/lib/utils/localStorage";
import styles from "./ApplicationPage.module.css";
import {
  DisplayPosts,
  Footer,
  Header,
  Popup,
  SearchSection,
} from "../../components";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const ApplicationPage = () => {
  const { dashboard, wrap } = styles;
  const { isVisible } = useSelector((state) => state.popup);

  const navigate = useNavigate();

  useEffect(() => {
    if (!getUserFromLocalStorage()) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className={dashboard}>
      <Header />
      <div className={wrap}>
        <SearchSection />
        <DisplayPosts />
      </div>
      <Footer />
      {isVisible && <Popup />}
    </div>
  );
};
export default ApplicationPage;
