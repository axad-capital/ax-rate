import React from 'react'
import './navComp.css'
import { Link, useLocation } from 'react-router-dom';

import Logo from './ax-rate-logo.png'

const NavComp = () => {

    const location = useLocation();

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id='bg-col'>
                <div className="container-fluid">
                    <Link to='/' className='navbar-brand'><img onClick={() => localStorage.clear()} className='logo' src={Logo} alt='logo'/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href='/' className={location.hash === '' ? 'nav-link active' : 'nav-link'}>Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a href='/about-us' className={location.hash === '/about-us' ? 'nav-link active' : 'nav-link'}>About Us</a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a href='/info' className={location.hash === '/info' ? 'nav-link active' : 'nav-link'}>Auto Insurance Company Info</a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a href='/blogs' className={location.hash === '/blogs' ? 'nav-link active' : 'nav-link'}>Blogs</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default NavComp