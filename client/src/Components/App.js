import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";



function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    // auto-login
    fetch("api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, []);



  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      {/* <NavBar user={user} setUser={setUser} /> */}
      <main>
        <Routes>

          <Route >

          </Route>

        </Routes>
      </main>
    </>
  );
}

export default App;