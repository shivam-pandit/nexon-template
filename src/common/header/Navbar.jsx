import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
