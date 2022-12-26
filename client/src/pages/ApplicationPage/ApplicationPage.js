import { useEffect } from "react";
import { getUserFromLocalStorage } from "../../core/lib/utils/localStorage";
import styles from "./ApplicationPage.module.css";
import { getAllPosts } from "../../core/redux/features/allPosts/allPostsSlice";

import {
  DisplayPosts,
  Footer,
  Header,
  Popup,
  SearchSection,
} from "../../components";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../assets/icons";

const ApplicationPage = () => {
  const dispatch = useDispatch();
  const { dashboard, wrap } = styles;
  const { isVisible } = useSelector((state) => state.popup);
  const { isLoading } = useSelector((state) => state.allPosts);
  const navigate = useNavigate();

  useEffect(() => {
    if (!getUserFromLocalStorage()) {
      navigate("/");
    }
    dispatch(getAllPosts());
  }, []);

  return (
    <div className={dashboard}>
      <Header />
      <div className={wrap}>
        <SearchSection />
        {isLoading ? <Loading /> : <DisplayPosts />}
      </div>
      <Footer />
      {isVisible && <Popup />}
    </div>
  );
};
export default ApplicationPage;
