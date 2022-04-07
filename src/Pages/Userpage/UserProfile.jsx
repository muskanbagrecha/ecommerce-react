import { useNavigate } from "react-router-dom";
import { useAuth, useAlert, useCart, useWishlist } from "../../CustomHooks/";

export const UserProfile = () => {
  const navigate = useNavigate();
  const { setShowAlert } = useAlert();
  const {
    authState: {
      user: { firstName, lastName, email },
    },
    authDispatch,
  } = useAuth();

  const { resetCart } = useCart();
  const { resetWishlist } = useWishlist();

  const logoutHandler = () => {
    authDispatch({
      type: "LOGOUT",
    });
    localStorage.removeItem("user");
    setShowAlert({
      showAlert: true,
      alertMessage: "Logged out successfully!",
      type: "info",
    });
    resetCart();
    resetWishlist();
    navigate(-1);
  };

  return (
    <div className="user-profile">
      <h2>My Profile</h2>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              {firstName} {lastName}
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-black-no-br" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};
