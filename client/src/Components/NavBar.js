import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ setUser }) {
const navigate = useNavigate();

    function handleLogoutClick() {
        fetch("http://localhost:4000/api/logout", {method: "DELETE"}).then((r) => {
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
           <div> 

                <Link to="/"><button>Home</button></Link>
                <Link to="/new"><button>Add A Company</button></Link>
                <Link to="/profile"><button>Profile</button></Link>
                <button onClick={handleLogoutClick}>Logout</button>
                
          </div>
      
          </>
        
      </div>
    </header>

    )
}

export default NavBar;
