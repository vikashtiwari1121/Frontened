import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className='navbar bg-white navbar-light navbar-expand-md fixed-top'>
                <div className='container-fluid'>
                    <a href=''>
                        <h2 className='logo'>MEDIGO</h2>
                    </a>
                    <button className="navbar-toggler" data-bs-target="#ab" data-bs-toggle="collapse">
                        <i className="fa-solid fa-bars imp"></i>
                    </button>

                    <div className='navbar-collapse collapse' id="ab">
                        <ul className='navbar-nav ms-auto'>
                            <li><Link to="/" className='nav-link menu-margin navMenuOne'>HOME</Link></li>
                            <li><Link to="/login" className='nav-link menu-margin'><button className='navButton'>Login</button></Link></li>
                            <li><Link to="/signup" className='nav-link menu-margin'><button className='navButton'>Sign Up</button></Link></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
