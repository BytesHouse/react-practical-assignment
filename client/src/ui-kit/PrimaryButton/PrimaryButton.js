import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ text, onClick }) => {
  const { btn } = styles;
  return (
    <button className={btn} onClick={onClick}>
      {text}
    </button>
  );
};
export default PrimaryButton;
