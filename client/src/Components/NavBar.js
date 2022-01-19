import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ setUser }) {
const navigate = useNavigate();

    function handleLogoutClick() {
        fetch("http://localhost:4000/logout", {method: "DELETE"}).then((r) => {
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
           <div> 

                <Link to="/"><button>Home</button></Link>
                <button onClick={handleLogoutClick}>Logout</button>
                
          </div>
      
          </>
        
      </div>
    </header>

    )
}

export default NavBar;
