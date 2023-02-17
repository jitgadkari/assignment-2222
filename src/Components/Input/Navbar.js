import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <div>
        <nav>
            <ul className='nav'>
                <li>Home</li>
                <li>Input</li>
                <button className='togglebutton'>=</button>
            </ul>
            
        </nav>
    </div>
  )
}
