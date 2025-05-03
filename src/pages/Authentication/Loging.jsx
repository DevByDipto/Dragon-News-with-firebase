import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";

const Loging = () => {

const {logIn} = useContext(AuthContext)
const navigate = useNavigate()
const {state} = useLocation()
// console.log(state);


  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email,password)
    .then((result)=>{
        // console.log(result.user);
        navigate(state ? state : '/')
    }).catch((err)=>{
console.log(err);
    })



  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center">Login now!</h1>

      <div className="card-body">
        <form className="form" onSubmit={handleLogin}>

           {/* email */}
           <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />

          {/* password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button  type="submit" className="btn btn-neutral mt-4 w-full">Login</button>
          <p className="mt-2">
            Dont’t Have An Account ?{" "}
            <NavLink to="/auth/register">
              <span className="text-secondary">Register</span>
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Loging;
