import React, { use } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { Navigate, useLocation } from 'react-router'
import Loading from '../Loading/Loading'

const PrivateRoute = ({children}) => {

const {user,loding} = use(AuthContext)
 const location = useLocation()
 console.log(location);
 
if(loding){
  return <Loading></Loading>
}
console.log(user);

if(!user){
  
return <Navigate state={location.pathname} to='/auth'></Navigate>
}

 
  return children
}

export default PrivateRoute