import React, { use } from "react";
import { MdAccountCircle } from "react-icons/md";
import { NavLink, useLoaderData } from "react-router";
import ThemChange from "../ThemeChange/ThemChange";
import { AuthContext } from "../../Context/AuthProvider";

const Navber = () => {
  
  const {user, LogOut} = use(AuthContext);
 
  
const handleLogOut=()=>{
  LogOut().then(() => {
  }).catch((error) => {
console.log(error);
  });
}


  return (
    <nav className="flex justify-between items-center mt-5">
      <div></div>
      <div className="flex gap-5 text-accent items-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3 items-center">
        <ThemChange></ThemChange>
        {
          user?.photoURL ? <img className="h-10 w-10 rounded-full" src={user?.photoURL} alt="" /> :  <MdAccountCircle size={40} />
        }
      
               {user ? (
            // <NavLink to='/'>
              <button onClick={handleLogOut} className="btn btn-primary px-6">Log Out</button>
            // </NavLink>
          ) : (
            <NavLink to="/auth">
            <button className="btn btn-primary px-6">Log In </button>
            </NavLink>
          )}
     
      </div>
    </nav>
  );
};

export default Navber;
