import { useState } from "react";
import { PrimaryButton, StyledInput } from "../../ui-kit";
import styles from "./Popup.module.css";
import { useSelector, useDispatch } from "react-redux";
import { togglePopup } from "../../core/redux/features/popup/popupSlice";
import {
  createPost,
  uploadImage,
} from "../../core/redux/features/post/postSlice";
import { getAllPosts } from "../../core/redux/features/allPosts/allPostsSlice";
import { getUserFromLocalStorage } from "../../core/lib/utils/localStorage";
const initialState = {
  title: "",
  image: "",
  username: getUserFromLocalStorage(),
};
const Popup = () => {
  const dispatch = useDispatch();
  const [post, setPost] = useState(initialState);
  const { blur, btnWrap } = styles;
  const { isVisible } = useSelector((state) => state.popup);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let reader = new FileReader();
    reader.readAsDataURL(e.target[1].files[0]);
    const data = new FormData(e.target.form);
    const { title, username } = post;
    await data.append("picture", reader.result);
    const result = await dispatch(createPost({ title, username }, data));
    const imageId = result.payload.result.id;
    console.log(data);

    dispatch(uploadImage(imageId, data));
    dispatch(getAllPosts());
    dispatch(togglePopup(isVisible));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPost({ ...post, [name]: value });
  };

  return (
    <div className={blur}>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <StyledInput text="Title:" name="title" onChange={handleChange} />
          <StyledInput
            text="Image:"
            name="image"
            type="file"
            onChange={handleChange}
            accept="image/*"
          />
          <div className={btnWrap}>
            <PrimaryButton
              onClick={() => dispatch(togglePopup(isVisible))}
              text="Cancel"
            />
            <PrimaryButton type="submit" text="Create post" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
