import React, { use } from 'react'
import { NavLink } from 'react-router';
const catagoryPromise = fetch('/categories.json')
.then((res)=>res.json())

const Categories = () => {

const categories = use(catagoryPromise)

  return (
    <div> 
<h3>All categories</h3>

<div className='grid grid-cols-1 gap-3 text-center'>
    {categories.map((categorie)=> <NavLink className="hover:bg-base-300 py-3" key={categorie.id} to={`/categorie/${categorie.id}`}>
         {categorie.name}
    </NavLink>)}
</div>

    </div>
  )
}

export default Categories