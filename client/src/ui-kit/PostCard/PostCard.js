import { DislikeIcon, LikeIcon } from "../../assets/icons";
import styles from "./PostCard.module.css";
const PostCard = () => {
  const { post } = styles;
  return (
    <div className={post}>
      <h4>Title</h4>
      <img src="" alt="test" />
      <p>comment</p>
      <LikeIcon />
      <DislikeIcon />
    </div>
  );
};
export default PostCard;
