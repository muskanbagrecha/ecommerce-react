import { useNavigate } from "react-router-dom";
import { useTitle } from "../../CustomHooks";
export const NotFound = () => {
  const navigate = useNavigate();
  useTitle("404");
  return (
    <div className="sub-container flex-col-center">
      <h1>404</h1>
      <p>Uh Oh, Page Not Found! :(</p>
      <button
        onClick={() => navigate("/")}
        className="btn btn-primary margin-top-2"
      >
        Go Home
      </button>
    </div>
  );
};
