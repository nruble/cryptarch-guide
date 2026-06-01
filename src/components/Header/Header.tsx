import './Header.scss'
import { useState, useRef, useEffect } from 'react'
import { clsx } from 'clsx'
import { Link, NavLink, useLocation } from "react-router-dom"
import cryptarchLogo from '../../assets/cryptarch_logo.png'
import { RiBookLine, RiBookOpenFill } from "react-icons/ri"

export default function Header() {
    const [navOpen, setNavOpen] = useState(false)
    const navMenu = useRef(null)
    const location = useLocation()

    function toggleMobileNav(){
        setNavOpen(prev => !prev)
    }
    
    useEffect(()=>{
        setNavOpen(false)
    },[location])

    return (
        <header className='site-head'>
            <Link to="/" className='site-logo-link'>
                <img src={cryptarchLogo} alt="Cryptarch logo" className="site-logo-icon" />
                <div className="site-logo-text">Cryptarch <span className="site-logo-text-2nd">Guide</span></div>
            </Link>
            <button className='site-header-mobile-nav-btn' onClick={toggleMobileNav} aria-label="Site Menu">
                {navOpen ? <RiBookOpenFill/> : <RiBookLine />}
            </button>
            <nav className={clsx(`site-header-nav`, navOpen && `open`)} ref={navMenu}>
                <NavLink to="/acquisition" className={({isActive}) => isActive ? 'head-nav-link active' : 'head-nav-link'}>
                    Sources
                </NavLink>
                {/* <NavLink to="/collection" className={({isActive}) => isActive ? 'head-nav-link active' : 'head-nav-link'}>
                    Collection
                </NavLink> */}
                <NavLink to="/items" className={({isActive}) => isActive ? 'head-nav-link active' : 'head-nav-link'}>
                    Items
                </NavLink>
            </nav>
        </header>
    )
}