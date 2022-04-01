import { FaCheck, FaExclamation } from "react-icons/fa";
import { useAlert } from "../../../CustomHooks";
import "./Alert.css";
const Alert = () => {
  const { showAlert } = useAlert();
  const text = showAlert.alertMessage;
  const type = showAlert.type;
  const alertClass = type === "error" ? "alert-error" : "alert-success";

  return (
    <div className={`alert ${alertClass}`}>
      <span>{type === "error" ? <FaExclamation /> : <FaCheck />}</span>
      <span>{text}</span>
    </div>
  );
};

export default Alert;
