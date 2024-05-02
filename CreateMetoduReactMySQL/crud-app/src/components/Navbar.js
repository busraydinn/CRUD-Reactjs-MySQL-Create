import React from "react";
import {Link,Outlet} from "react-router-dom"
import "../style/Navbar.css";
function Navbar(){
    return(
        <div className="navbarContainer">
            <nav>
                <Link to="/"></Link>
                <Link to="/create"></Link>
            </nav>
            <div className="navbarBody">
            <Outlet/>
            </div>
        </div>
    )
}
export default Navbar;