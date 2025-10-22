import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userimg from "../assets/user.png";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { user,logOut} = use(AuthContext);

    const handleLogout = () => {
        logOut()
        .then(() => {
            alert('Logout Successfully');
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="flex justify-between items-center gap-5">
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-5 text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img className="w-10 rounded-full" src={`${user ? user.photoURL : userimg}`} alt="" />
                
                {
                    user ? <button onClick={handleLogout} className="btn btn-primary px-7">Logout</button> : <Link to="/auth/login" className="btn btn-primary px-7">
                    Login
                </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
