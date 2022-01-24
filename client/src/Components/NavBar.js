import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ setUser }) {
const navigate = useNavigate();

    function handleLogoutClick() {
        fetch("/api/logout", {method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUser(null);
                navigate("/")
            }
        });
    }
  

    return(
        <header>
     
      <div>
    
          <>
          <h1>transparency</h1>
           <div className="navbar-buttons"> 

                <Link to="/"><button>Home</button></Link>
                <Link to="/new"><button>Add A Company</button></Link>
                <Link to="/profile"><button>Profile</button></Link>
                <button className="logout-button" onClick={handleLogoutClick}>Logout</button>
                
          </div>
      
          </>
        
      </div>
    </header>

    )
}

export default NavBar;
