import { useEffect } from "react";
import { getUserFromLocalStorage } from "../../core/lib/utils/localStorage";
import styles from "./ApplicationPage.module.css";
import { DisplayPosts, Header, SearchSection } from "../../components";
import { useNavigate } from "react-router";

const ApplicationPage = () => {
  const { dashboard, wrap } = styles;

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
    </div>
  );
};
export default ApplicationPage;
