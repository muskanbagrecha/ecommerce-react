import { useAuth } from "../../CustomHooks";
import { UserProfile } from "./UserProfile";
import "./Userpage.css";
const Userpage = () => {
  const {
    authState: { user },
  } = useAuth();

  return (
    <div className="sub-container">
      <h1 className="styled-title">Hi, {user.firstName}</h1>
      <div className="bordered-container user-container">
        <aside className="user-profile-aside">
          <ul className="no-list-style">
            <li>Profile</li>
            <li>Address</li>
            <li>Orders</li>
          </ul>
        </aside>
        <div>
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default Userpage;
