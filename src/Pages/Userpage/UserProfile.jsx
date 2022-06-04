import { useNavigate } from "react-router-dom";
import { useAuth, useToast, useCart, useWishlist } from "../../CustomHooks/";

export const UserProfile = () => {
  const { addInfoToast } = useToast();
  const navigate = useNavigate();
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
    addInfoToast("Logged out successfully");
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
