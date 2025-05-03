import React from 'react'
import Navber from '../../component/Navber/Navber'
import { Outlet } from 'react-router'

const Authentication = () => {
  return (
    <div className=' bg-base-200 max-h-screen'>
        <div className='max-w-11/12 mx-auto'>

      
        <header className=''>
            <Navber></Navber>
        </header>
        <main className='flex justify-center max-h-screen'>
            <Outlet></Outlet>
        </main>
    </div>
    </div>
  )
}

export default Authentication