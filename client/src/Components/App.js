import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
// import CompanyList from "./CompanyList";
import Company from "./Company";
import Home from "./Home";
import NavBar from "./NavBar"



function App() {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, []);

  function handleDeleteReview(id) {
    setReviews((reviews) =>
      reviews.filter((review) => review.id !== id));
  }

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
              <Route path="/companies/:id" element={<Company  onDeleteReview={handleDeleteReview} user={user}/>}>
              </Route>
              <Route path="/" element={<Home user={user} />}>
              </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;