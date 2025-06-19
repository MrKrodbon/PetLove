import css from "./Input.module.css";

const Input = ({ placeholder }) => {
  return <input className={css.input} placeholder={placeholder} />;
};

export default Input;
