import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/Asos_assets/asset 1.svg'
// import SearchIcon from '@mui/icons-material/Search';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';

function Navbar() {
  return (
    // <div>
    <div className="header">
    <div className="navbar flex align-middle items-center gap-10 ">
    <div className="left flex gap-11 justify-between">

      <div className="logo w-full flex justify-between items-center gap-3">
        <NavLink to="/">
        
          <img src={logo} alt="Logo" className=' scale-105 text-[#fff]'  />
        </NavLink>
          <div className="nav-links ">
        <ul className=' flex gap-4'>
          <NavLink to="/man" className="nav-link" style={({ isActive }) => ({
                    color: isActive ? "#fff" : "black",
                    width:isActive ? "fitContent" : "fitContent",
                    textAlign: "center",
                    backgroundColor: isActive ? "#3a3a3b72" : "transparent",
                    fontWeight: isActive ? "bold" : "normal",
                    padding: "10px",
                    borderRadius: "15px",
                    textDecoration: "none",
                })}>Man</NavLink>
          <NavLink to="/woman" className="nav-link" style={({ isActive }) => ({
                    color: isActive ? "#fff" : "black",
                    width:isActive ? "fitContent" : "fitContent",
                    textAlign: "center",
                    padding: "10px",
                    borderRadius: "15px",
                    fontWeight: isActive ? "bold" : "normal",
                    backgroundColor: isActive ? "#3a3a3b72" : "transparent",
                    textDecoration: "none",
                })} >Woman</NavLink>
        </ul>
      </div>
        
        
      </div>
     
    </div>
    <div className="right flex gap-10 items-center">
                <div className="searchbar relative">
                  <input type="text" placeholder='Search for item and brands ' className='' />
                 <SearchSharpIcon className=' absolute right-5 top-5 text-[#000]' />
                </div>
                <div className="icon flex gap-5">
                

                <AccountCircleIcon className='text-[#000] text-5xl'  />
                
               
                <FavoriteIcon className='text-[#000] text-5xl' />
                <ShoppingCartIcon className='text-[#000] text-5xl' />   
                </div>
      </div>
      
    </div>
    </div>
      
    // </div>
  )
}

export default Navbar
