import React from 'react'

import logo from '../../assets/images/logo.png'
import { NavBar } from '../../components'
import './style.css'

function closeNav() {
    document.getElementById("navBar").style.width = "0%";
}
function openNav() {
    document.getElementById("navBar").style.width = "100%";
}
function toggleLogo() {
    let element = document.getElementById("h1-menu-tag")
    if (element.classList.contains('menu-hidden')) {
        element.classList.remove('menu-hidden')
        element.classList.add('menu')
    } else {                
        element.classList.remove('menu')
        element.classList.add('menu-hidden')
    }
}
export default function MenuLayout(props) {
    return (
        <div>
            <header className="menu-layout-header">
                <img src={logo} alt="logo" className='static-logo' onMouseEnter={toggleLogo} onMouseLeave={toggleLogo} onClick={openNav}/>
                <h1 className='menu-hidden' id="h1-menu-tag" onClick={openNav}>Menu</h1>
                <NavBar closeNav={closeNav} />
            </header>
            {props.children}
        </div>
    )
}