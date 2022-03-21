import { useNavigate } from "react-router-dom";

const NotFound = (props) => {
  const navigate = useNavigate();

  return (
    <div className="sub-container">
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

export default NotFound;
