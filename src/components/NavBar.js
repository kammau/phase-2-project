
import React from "react";
import {NavLink} from "react-router-dom";

const linkStyles = {
    text: "center",
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "gray",
    textDecoration: "none",
    color: "black",
    font: "Abel",
}

function NavBar() {
    return (
        <div className="links">
            <NavLink to="/" exact style={linkStyles}><img className="icon" src="https://freeiconshop.com/wp-content/uploads/edd/shopping-bag-outline.png" alt="shopping bag icon"/>Shop</NavLink>
            <NavLink to="/sell" exact style={linkStyles}><img className="icon" src="https://static.vecteezy.com/system/resources/previews/014/455/861/original/illustration-of-give-money-icon-on-transparent-background-free-png.png" alt="hand in money icon"/>Sell</NavLink>
            <NavLink to="/cart" exact style={linkStyles}><img className="icon" src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="icon of shopping cart"/>Cart</NavLink>
        </div>
    )
}

export default NavBar;