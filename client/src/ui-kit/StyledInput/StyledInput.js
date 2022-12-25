import styles from "./StyledInput.module.css";
const StyledInput = ({ value, id, type, text, req, min, max, onChange }) => {
  const { inp, label } = styles;
  return (
    <>
      {text && (
        <label className={label} for={id}>
          {text}
        </label>
      )}
      <input
        onChange={onChange}
        value={value}
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
