import React from 'react'
import { Routes, Route } from 'react-router-dom'
import List from '../list'

const Navbar = ({ children }) => {
    return (
        <div className='conatiner'>
            <ul className="nav">
                <li className="nav-item">
                    <a class="nav-link active" aria-current="page" href="/local-storage/">List</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/local-storage/input">Input</a>
                </li>

            </ul>
            {children}
        </div>

    )
}

export default Navbar