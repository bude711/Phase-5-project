import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div >
      <h1 className="setpage">transparency</h1>
      {showLogin ? (
        <div className="loginpage">
          <LoginForm onLogin={onLogin} />
          <br />
          <p className="donthaveanaccount">
            Don't have an account? &nbsp;
            <button as={Link} to="/companies" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </div>
      ) : (
        <div className="signuppage">
          <SignupForm onLogin={onLogin} />
          <br />
          <p>
            Already have an account? &nbsp;
            <button className="login-button" as={Link} to="/companies" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </div>
      )}
    </div>
  );
}



export default Login;