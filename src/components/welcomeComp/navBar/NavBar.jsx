import React from 'react'
import './NavBar.css'
import logo from '../../../assets/Mark_Logo_Blue.svg'

const NavBar = () => {
  return (
    <div className='NavBar-container'>
        <p className='header-text'> See how optimized your site is for AI, powered by our AEO Maturity Model -- Get my score → </p>

        <div className='nav-bar'>
            <ul className='left-side-nav'>
                <img src={logo} className='logo' />
                <li > <span className='webflow'> Webflow</span></li>
                <li className='nav-list'>Platform</li>
                <li className='nav-list'>Solutions</li>
                <li className='nav-list'>Resources</li>
                <li className='nav-list'>Enterprise </li>
                <li className='nav-list'>Pricing</li>
            </ul>

            <ul className='right-side-nav'>
                <li className='login'>Log in</li>
                <li className='contact-sales-li'>Contact Sales</li>
                <li className='get-started'>Get Started</li>
            </ul>
        </div>

        <hr className='navbar-hr'/>
    </div>
  )
}

export default NavBar