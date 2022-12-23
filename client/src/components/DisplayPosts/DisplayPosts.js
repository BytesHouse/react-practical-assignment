import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../core/redux/features/postsSlice/postsSlice";
import { PostCard } from "../../ui-kit";
import styles from "./DisplayPosts.module.css";

const DisplayPosts = () => {
  const { section } = styles;
  const dispatch = useDispatch();
  const { results, isLoading } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <section className={section}>
      <PostCard />
      <PostCard />
      <PostCard />
    </section>
  );
};

export default DisplayPosts;
