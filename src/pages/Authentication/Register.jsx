import React, { use, useContext } from 'react'
import { NavLink } from 'react-router'
import {AuthContext} from '../../Context/AuthProvider.jsx'

const Register = () => {

const {signUp,profileUpdate} = useContext(AuthContext)

const handleRestretion=(e)=>{
e.preventDefault()

const email = e.target.email.value
const password = e.target.password.value
const name = e.target.name.value
const photoUrl = e.target.photoUrl.value
// console.log(email,password);

signUp(email,password)
.then((result)=>{
  // console.log(result?.user);

  profileUpdate({displayName:name,photoURL:photoUrl})
  .then(()=>{

  }).catch((err)=>{
// console.log(err);

  })



  })
.catch((err)=>{
// console.log(err);
})


}

  return (
   
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-3xl font-bold text-center">Register now!</h1>

      <div className="card-body">
        <form className="form" onSubmit={handleRestretion}>
          {/* name */}
          <label className="label">Name</label>
          <input type="name" name='name' className="input" placeholder="name" />

          {/* url */}
          <label className="label">Photo url</label>
          <input type="text" name='photoUrl' className="input" placeholder="photo Url" />

          {/* email */}
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />

          {/* password */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />

          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4 w-full">Registetion</button>

          <p className='mt-2'>Already have an account ? <NavLink to="/auth"><span className='text-secondary'>Login</span></NavLink></p>
        </form>
      </div>
    </div>
  )
}

export default Register