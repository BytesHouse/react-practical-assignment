import { DislikeIcon, LikeIcon } from "../../assets/icons";
import styles from "./PostCard.module.css";
const PostCard = () => {
  const { post, title, image, comment } = styles;
  return (
    <div className={post}>
      <h4 className={title}>Title</h4>
      <img className={image} src="" alt="test" />
      <p className={comment}>comment</p>
      <LikeIcon />
      <DislikeIcon />
    </div>
  );
};
export default PostCard;
