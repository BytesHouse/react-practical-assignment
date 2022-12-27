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
import { post } from "../../api/fetchRequests/baseRequest";
const initialState = {
  title: "",
  image: "",
  username: getUserFromLocalStorage(),
};
const Popup = () => {
  const dispatch = useDispatch();
  const [postState, setPost] = useState(initialState);
  const [file, setFile] = useState(null);
  const { blur, btnWrap } = styles;
  const { isVisible } = useSelector((state) => state.popup);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    const { title, username } = postState;
    await data.append("picture", file);

    const result = await dispatch(createPost({ title, username }));
    const imageId = result.payload.result.id;
    await post(`post/${imageId}/picture`, data);
    dispatch(getAllPosts());
    dispatch(togglePopup(isVisible));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPost({ ...postState, [name]: value });
  };

  const handlerUpload = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
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
            onChange={handlerUpload}
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
