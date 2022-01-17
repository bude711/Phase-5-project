import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div >
      <h1>App name here</h1>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <br />
          <p>
            Don't have an account? &nbsp;
            <button as={Link} to="/companies" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignupForm onLogin={onLogin} />
          <br />
          <p>
            Already have an account? &nbsp;
            <button as={Link} to="/companies" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}



export default Login;