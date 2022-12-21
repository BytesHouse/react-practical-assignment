import styles from "./StyledInput.module.css";
const StyledInput = ({ id, type, text, req, min, max }) => {
  const { inp, label } = styles;
  return (
    <>
      {text && <label className={label} for={id}>{text}</label>}
      <input
        className={inp}
        type={type}
        id={id}
        required
        minLength={min}
        maxLength={max}
      ></input>
    </>
  );
};
export default StyledInput;
