import { useState } from "react";
import { PrimaryButton, StyledInput } from "../../ui-kit";
import styles from "./Popup.module.css";
import { useSelector, useDispatch } from "react-redux";
import { togglePopup } from "../../core/redux/features/popup/popupSlice";
import { createPost } from "../../core/redux/features/post/postSlice";
import { getUserFromLocalStorage } from "../../core/lib/utils/localStorage";
const initialState = {
  title: "",
  image: "",
  username: getUserFromLocalStorage(),
};
const Popup = () => {
  const { blur, btnWrap } = styles;
  const [post, setPost] = useState(initialState);
  const handleSubmit = () => {
    const { title, username } = post;
    dispatch(createPost({ title, username }));
    dispatch(togglePopup(isVisible));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPost({ ...post, [name]: value });
  };
  const { isVisible } = useSelector((state) => state.popup);
  const dispatch = useDispatch();
  return (
    <div className={blur}>
      <div>
        Title:
        <StyledInput name="title" onChange={handleChange} />
        Image:
        <StyledInput
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
          <PrimaryButton onClick={() => handleSubmit()} text="Create post" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
