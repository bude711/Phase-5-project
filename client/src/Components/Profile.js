import React from "react";
import { useState, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const values = Object.values(user);

  return (
    <>
    <div className="App">
          <br></br>
          First Name:{values[1]}
          <br />
          Last Name: {values[2]}
          <br />
          Username:{values[3]}
          <br />
          Email: {values[5]}
          <br></br>
    </div>
    </>
  );
}

export default Profile;