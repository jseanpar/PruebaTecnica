import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const Navbar = () => (
  <nav className="Navbar">
    <Link to='/tasks'>Tasks</Link>
  </nav>
)

export default Navbar