import React from 'react'
import { Link } from 'react-router-dom'
import List from '../list'

const Navbar = ({ children }) => {
    return (
        <div className='conatiner'>
            <ul className="nav">
                <li className="nav-item">
                    <Link className='nav-link' to="/ls/">Home</Link>
                    {/* <a class="nav-link active" aria-current="page" href="/ls/">List</a> */}
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to="/ls/input">List</Link>
                    {/* <a className="nav-link" href="/ls/input">Input</a> */}
                </li>

            </ul>
            {children}
        </div>

    )
}

export default Navbar