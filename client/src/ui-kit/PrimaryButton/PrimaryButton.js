import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ text, type, onClick }) => {
  const { btn } = styles;
  return (
    <button type={type} className={btn} onClick={onClick}>
      {text}
    </button>
  );
};
export default PrimaryButton;
