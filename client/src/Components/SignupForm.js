import React, { useState } from "react";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        first_name: firstName,
        last_name: lastName,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
      <div className="signup-form">
     <form onSubmit={handleSubmit}>
        <h3>First Name</h3>
        <input
          type="text"
          id="firstName"
          autoComplete="off"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="input-text-signup"
        />
      <br/>
      <p></p>
        <h3>Last Name</h3>
       
        <input
          type="text"
          id="lastName"
          autoComplete="off"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="input-text-signup"
        />
        <br/>
      <p></p>
        <h3>Email</h3>
        
          <input
            type="text"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-text-signup"
          />
        <br/>
      <p></p>
        <h3>Username</h3>
       
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-text-signup"
        />
      <br/>
      <p></p>
        <h3>Password</h3>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          className="input-text-signup"
        />
      <br/>
      <p></p>
        <h3>Password Confirmation</h3>
       
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
          className="input-text-signup"
        />
        <br/>
      <p></p>
    
      <br/>
      <button className="signup-button" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}

    </form>
    </div>
  );
}

export default SignUpForm;