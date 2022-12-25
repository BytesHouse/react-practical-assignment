import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../core/redux/features/allPosts/allPostsSlice";
import { PostCard } from "../../ui-kit";
import styles from "./DisplayPosts.module.css";

const DisplayPosts = () => {
  const { section } = styles;
  const dispatch = useDispatch();
  const { results, isLoading } = useSelector((state) => state.allPosts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <section className={section}>
      {results.length &&
        results.slice(0, 3).map((item) => {
          const { id, title, username, likes, dislikes, date, comments } = item;
          return (
            <PostCard
              key={id}
              title={title}
              username={username}
              likes={likes}
              dislikes={dislikes}
              date={date}
              comments={comments}
            />
          );
        })}
    </section>
  );
};

export default DisplayPosts;
