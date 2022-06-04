import { useToast } from "../../../CustomHooks";
import "./Toast.css"
import {
    Success,
    Info,
    Danger,
    Warning,
    Cancel
  } from "../../../Assets/Icons/icons";
export const Toast = () => {
  const { toastList, deleteToast } = useToast();

  const getToastIcon = (type) => {
    switch (type) {
      case "SUCCESS":
        return <Success />;
      case "DANGER":
        return <Danger />;
      case "INFO":
        return <Info />;
      case "WARNING":
        return <Warning />;
      default:
        return <></>;
    }
  };

  return (
    <div className="toast__container">
      {toastList?.map(({ id, type, title, message }) => (
        <div className={`toast toast-${type.toLowerCase()}`} key={id}>
          <div className="toast__icon">{getToastIcon(type)}</div>
          <div className="toast__content">
            <p className="toast__title">{title}</p>
            <p className="toast__message">{message}</p>
          </div>
          <div className="toast__CTA" onClick={() => deleteToast(id)}>
            <Cancel />
          </div>
        </div>
      ))}
    </div>
  );
};
