import React, { Component } from "react";
import { Link } from "react-router-dom";
const NavStyle = {
    marginLeft: "7rem",
  };
  
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand" style={NavStyle}>MERN Crud</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto" >
                        <li className="navbar-item ">
                            <Link to="/" className="nav-link" >Exercises</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Exercise</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;