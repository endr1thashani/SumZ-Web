import React, {useState} from 'react'
import {RiMenu3Line , RiCloseLine} from 'react-icons/ri'
import './navbar.css'

const Menu = () =>(
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#about'>About</a></p>
    <p><a href='#possibility'>Possibilities</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu , setToggleMenu] = useState(false)
  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <h1>SumZ</h1>
        </div>
        <div className='navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className="navbar-sign">
          <p>Sign in</p>
          <button type='button'>Sign up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu
        ?<RiCloseLine color='#FFFF' size={27} onClick={() => setToggleMenu(false)}/>
        :<RiMenu3Line color='#FFFF' size={27} onClick={() => setToggleMenu(true)}/>
      }
      {toggleMenu && (
        <div className='navbar-menu_container scale-up-center'>
          <div className='navbar-menu_container-links'>
            <Menu/>
            <div className="navbar-menu_container-links-sign">
              <p>Sign in</p>
            <button type='button'>Sign up</button>
           </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar
