import React from 'react'
import './Navbar.css'



const Navbar = () => {
  return (
    <div className='navbar'>
        <img  src='./images/logo.png' />
        <ul className= "nav-menu">  
      <li className="nav-item">
         <i class="fa-solid fa-user">
        </i>  
         </li>
      <li className="nav-item"> 
       <i class="fa-solid fa-cart-shopping">
        </i>
        </li> 
    </ul>
    </div>
  )
}

export default Navbar
 