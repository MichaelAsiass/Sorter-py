import React from 'react'
import '../style.css'
import '../logo.png' 
import Logo from '../logo.png'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar">
                <div class="navbar-container">
                    <a class="navbar-brand" href="#">
                        <img src={Logo} alt="Logo" />
                    </a>
                    <ul class="navbar-menu">
                        <li class="navbar-item"><a class="navbar-link" href="#">Home</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
