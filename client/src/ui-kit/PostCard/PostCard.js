import {
  CommentIcon,
  DislikeIcon,
  EditIcon,
  LikeIcon,
  TrashIcon,
} from "../../assets/icons";
import styles from "./PostCard.module.css";
import lorem from "../../assets/images/lorem.png";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../../core/redux/features/post/postSlice";
import { getAllPosts } from "../../core/redux/features/allPosts/allPostsSlice";
const PostCard = ({
  title,
  username,
  likes,
  dislikes,
  date,
  comments,
  img = lorem,
  id,
}) => {
  const {
    post,
    title_style,
    image,
    comment,
    usersActions,
    content,
    author,
    edit,
    iconsWrapper,
  } = styles;
  const dt = new Date(+date);
  const dispatch = useDispatch();
  const newDate = `${dt.getDate()} ${+dt.getMonth() + 1} ${dt.getFullYear()}`;
  const { user } = useSelector((state) => state.user);
  const handlerDeletePost = async () => {
    await dispatch(deletePost(id));
    dispatch(getAllPosts());
  };

  return (
    <div className={post}>
      <img className={image} src={img} alt="test" />
      <h4 className={title_style}>{title}</h4>
      <div className={content}>
        <p>
          Author: <span className={author}>{username}</span>
        </p>

        <div className={usersActions}>
          <div>
            <LikeIcon />
            <span> {likes.length}</span>
          </div>
          <div>
            <DislikeIcon />
            <span> {dislikes.length}</span>
          </div>
          <div className={comment}>Comments: {comments.length}</div>
        </div>

        <div className={edit}>
          <div>Date: {newDate}</div>
          <div className={iconsWrapper}>
            {user === username && (
              <button onClick={() => handlerDeletePost()}>
                <TrashIcon />
              </button>
            )}
            {user === username && (
              <button>
                <EditIcon />
              </button>
            )}
            <button>
              <CommentIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
