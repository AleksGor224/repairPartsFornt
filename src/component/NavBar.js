import {Link} from "react-router-dom";
import React from "react";
import "./css/NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <div className={"NavBar"}>
                <div className={"NavButton"}><Link to={"/"}>Phones</Link></div>
                <div className={"NavButton"}><Link to={"/deleted"}>Last deleted</Link></div>
                <div className={"NavButton"}><Link to={"/phone/new"}>Add new phone</Link></div>
            </div>
        </nav>
    )
}

export default NavBar;



