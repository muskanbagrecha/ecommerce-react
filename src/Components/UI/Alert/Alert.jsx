import { FaCheck, FaExclamation } from "react-icons/fa";
import { useAlert } from "../../../CustomHooks";
import "./Alert.css";
const Alert = () => {
  const { showAlert } = useAlert();
  const text = showAlert.alertMessage;
  const type = showAlert.type;
  const alertClass = type === "danger" ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertClass}`}>
      <span>{type === "danger" ? <FaExclamation /> : <FaCheck />}</span>
      <span>{text}</span>
    </div>
  );
};

export default Alert;
