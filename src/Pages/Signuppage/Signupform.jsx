import { useState, useEffect } from "react";
import { Eye } from "../../Assets/Icons/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth, useModal, useAlert } from "../../CustomHooks";
import { Alert } from "../../Components/UI";
import axios from "axios";

const Signupform = () => {
  const intialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const initialErrorState = {
    error: false,
    message: "",
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
  };

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const [signupDetails, setSignupDetails] = useState(intialState);
  const { showAlert, setShowAlert } = useAlert();
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const [error, setError] = useState(initialErrorState);
  const { setShowModal } = useModal();
  const signupInputChangeHandler = (event) => {
    setSignupDetails({
      ...signupDetails,
      [event.target.name]: event.target.value,
    });
  };

  const showPasswordHandler = (key) => {
    setShowPassword({
      ...showPassword,
      [key]: !showPassword[key],
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } =
      signupDetails;
    setError(initialErrorState);

    if (password.length < 6) {
      setError({
        error: true,
        message: "Password must be at least 6 characters long",
        passwordError: true,
      });
      setSignupDetails({ ...signupDetails, password: "", confirmPassword: "" });
      return;
    }

    if (password.search(/\d/) === -1) {
      setError({
        error: true,
        message: "Password must contain at least one number",
        passwordError: true,
      });
      setSignupDetails({ ...signupDetails, password: "", confirmPassword: "" });
      return;
    }

    if (password.search(/[a-z]/) === -1) {
      setError({
        error: true,
        message: "Password must contain at least one lowercase letter",
        passwordError: true,
      });
      setSignupDetails({ ...signupDetails, password: "", confirmPassword: "" });
      return;
    }

    if (password.search(/[A-Z]/) === -1) {
      setError({
        error: true,
        passwordError: true,
        message: "Password must contain at least one Uppercase letter",
      });
      setSignupDetails({ ...signupDetails, password: "", confirmPassword: "" });
      return;
    }

    if (password !== confirmPassword) {
      setError({
        error: true,
        message: "Passwords do not match",
        confirmPasswordError: true,
        passwordError: true,
      });
      setSignupDetails({ ...signupDetails, password: "", confirmPassword: "" });
      return;
    }

    try {
      const response = await axios.post("/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      if (response.status === 201) {
        setSignupDetails(intialState);
        authDispatch({ type: "SIGNUP", payload: response.data });
        setShowAlert({
          showAlert: true,
          alertMessage: "Account created successfully!",
          type: "success",
        });
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 422) {
        setError({ error: true, message: "Account already exists" });
        setSignupDetails(intialState);
      } else {
        setError({ error: true, message: "Unexpected error" });
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowAlert({
        showAlert: false,
        message: null,
        type: null,
      });
      if (authState.isAuthenticated) {
        if (pathname === "/signup") {
          navigate("/products");
        }
        setShowModal(false);
      }
    }, 2000);
  }, [showAlert.showAlert]);

  return (
    <main className="signup__container">
      {showAlert.showAlert && <Alert />}
      <form className="input-form" autoComplete="on" onSubmit={submitHandler}>
        <h3>Signup</h3>
        <label className="label" htmlFor="first-name">
          First Name<span className="red">*</span>
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="John"
          required
          value={signupDetails.firstName}
          onChange={signupInputChangeHandler}
        />
        <label className="label" htmlFor="last-name">
          Last Name<span className="red">*</span>
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="Doe"
          required
          value={signupDetails.lastName}
          onChange={signupInputChangeHandler}
        />

        <label className="label" htmlFor="email">
          Email Id<span className="red">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="abc@gmail.com"
          required
          value={signupDetails.email}
          onChange={signupInputChangeHandler}
        />

        <label className="label" htmlFor="password">
          Password
        </label>
        <div>
          <input
            type={showPassword.password ? "text" : "password"}
            name="password"
            className={
              "password-input" + (error.passwordError ? " input-error" : "")
            }
            placeholder="*********"
            required
            value={signupDetails.password}
            onChange={signupInputChangeHandler}
          />
          <span
            onClick={() => {
              showPasswordHandler("password");
            }}
          >
            <Eye />
          </span>
        </div>

        <label className="label" htmlFor="confirm-password">
          Confirm Password
        </label>
        <div>
          <input
            type={showPassword.confirmPassword ? "text" : "password"}
            name="confirmPassword"
            className={
              "password-input" + (error.passwordError ? " input-error" : "")
            }
            placeholder="*********"
            required
            value={signupDetails.confirmPassword}
            onChange={signupInputChangeHandler}
          />
          <span
            onClick={() => {
              showPasswordHandler("confirmPassword");
            }}
          >
            <Eye />
          </span>
        </div>

        <div className="login__CTA">
          <button className="btn btn-primary">Signup</button>
          <Link className="btn btn-link-text align-center" to="/login">
            Existing user? Login.
          </Link>
        </div>
        {error.error && (
          <span className="red error-message">{error.message}</span>
        )}
      </form>
    </main>
  );
};

export default Signupform;
