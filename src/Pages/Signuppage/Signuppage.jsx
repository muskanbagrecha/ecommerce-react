import Signupform from "./Signupform";
import { useTitle } from "../../CustomHooks";
export const Signuppage = () => {
  useTitle("Signup");
  return (
    <div className="sub-container signup__container">
      <Signupform />
    </div>
  );
};
