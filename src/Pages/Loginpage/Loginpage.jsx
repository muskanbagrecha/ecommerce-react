import LoginForm from "./LoginForm";
import { useTitle } from "../../CustomHooks";
import "./Loginpage.css";

export const Loginpage = () => {
  useTitle("Login");
  return (
    <div className="sub-container">
      <LoginForm />
    </div>
  );
};
