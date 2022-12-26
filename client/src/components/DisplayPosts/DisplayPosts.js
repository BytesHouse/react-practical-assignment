import { useSelector } from "react-redux";
import { PostCard } from "../../ui-kit";
import styles from "./DisplayPosts.module.css";

const DisplayPosts = () => {
  const { section, noResults } = styles;
  const { results } = useSelector((state) => state.allPosts);

  return (
    <section className={section}>
      {results.length ? (
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
        })
      ) : (
        <div className={noResults}>
          <h3>No results</h3>
        </div>
      )}
    </section>
  );
};

export default DisplayPosts;
