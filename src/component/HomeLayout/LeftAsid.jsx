import React, { Suspense } from 'react'
import Categories from '../Categories/Categories'

const LeftAsid = () => {
  return (
    <div className='py-5'>
        <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>

        <Categories></Categories>
        </Suspense>
    </div>
  )
}

export default LeftAsid