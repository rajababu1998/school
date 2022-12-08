import React from 'react'
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Menubar = () => {
  return (
    <>
        <Link to='/login' className='nav-link btn btn-outline-success'>Login</Link>
    </>
  )
}

export default Menubar