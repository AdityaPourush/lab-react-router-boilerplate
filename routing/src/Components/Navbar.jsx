import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=> {
    return(
        <>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                <Link to={"/"} style={{padding : "2vh",  color: "black" , textDecoration: "none"}}><h1>Kalvium</h1></Link>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                    <Link to={"/about"} style={{padding : "2vh",  color: "black" , textDecoration: "none"}}> <h1>About</h1> </Link>
                    <Link to={"/contact"} style={{padding : "2vh",  color: "black" , textDecoration: "none"}}><h1>Contact</h1></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;