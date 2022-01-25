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
        <header> transparency &nbsp; 

          
           <div className="navbar-buttons"> 
        
                <Link to="/" ><button className="homebutton" >Home</button></Link>
                
                <Link to="/new" ><button className="addcompanybutton" >Add A Company</button></Link>

                <Link to="/profile" ><button className="profilebutton" >Profile</button></Link>
                
                <button className="logoutbutton" onClick={handleLogoutClick}>Logout</button>
                
          </div>
    
    </header>

    )
}

export default NavBar;
