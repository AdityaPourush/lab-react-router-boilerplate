import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=> {
    return(
        <>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Link to={"/"}><h1>Kalvium</h1></Link>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <Link to={"/about"}> <h1>About</h1> </Link>
                    <Link to={"/contact"}><h1>Contact</h1></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;