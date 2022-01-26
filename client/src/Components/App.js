import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Company from "./Company";
import Home from "./Home";
import NavBar from "./NavBar";
import Profile from "./Profile";
import AddCompanyForm from "./AddCompanyForm";



function App() {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([])
  const [company, setCompany] = useState([])


  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, []);

  useEffect(() => {
    fetch("/api/companies")
      .then((r) => r.json())
      .then(setCompany);

  }, []);


  function handleAddCompany(newCompany) {
    setCompany((company) => [...company, newCompany]);
  }


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
              <Route path="/profile" element={<Profile user={user} />}>
              </Route>
              <Route path="/new" element={<AddCompanyForm onAddCompany={handleAddCompany} />}>
              </Route>
        </Routes>
      </main>
      <div className="flex-wrapper">
      <footer>
        <div className="footer">
            <p className="footernote">Thank you for visiting my application!</p>
            <br></br>
            <p className="followme" >Follow me at the links below:</p>
            <br></br>
            <div className="footerlinks">
            <a className="github" href="https://github.com/bude711">Github</a> &nbsp;|&nbsp;
            <a className="linkedin" href="https://www.linkedin.com/in/brandi-ude-25767b153/">Linkedin</a>
            </div>
         </div>
      </footer>
      </div>
    </>
  );
}

export default App;