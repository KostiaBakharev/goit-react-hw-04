import css from "./ErrorMessage.module.css";
const ErrorMessage = ({
  message = "*Unfortunately, there was an error loading the data. Please refresh the page or try again later.",
}) => {
  return <p className={css.error}>{message}</p>;
};

export default ErrorMessage;
