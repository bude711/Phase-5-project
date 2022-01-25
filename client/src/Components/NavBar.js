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

          {/* <h1>transparency</h1> */}
           {/* <div className="navbar-buttons">  */}
        
                <Link to="/" className="homebutton"><button>Home</button></Link>
                
                <Link to="/new" className="addcompanybutton"><button>Add A Company</button></Link>

                <Link to="/profile" className="profilebutton"><button>Profile</button></Link>
                
                <button className="logoutbutton" onClick={handleLogoutClick}>Logout</button>
                
          {/* </div> */}
    
    </header>

    )
}

export default NavBar;
