import { FaCheck, FaExclamation } from "react-icons/fa";
import "./Alert.css";
const Alert = ({ text, type }) => {
  const alertClass = type === "error" ? "alert-error" : "alert-success";

  return (
    <div className={`alert ${alertClass}`}>
      <span>{type === "error" ? <FaExclamation /> : <FaCheck />}</span>
      <span>{text}</span>
    </div>
  );
};

export default Alert;
